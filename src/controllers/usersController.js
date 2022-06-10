require("dotenv").config()
const {
    findByEmail,
    findByResetToken,
    create,
    update
}=require("../repositories/usersRepository");
const bcryptjs=require("bcryptjs");
const generateToken=require("../helpers/generateToken");
const sendResetPasswordEmail=require("../services/emailsService");

const usersController={
    registerUser:async(req,res)=>{
        let {body}=req;
        body.password=bcryptjs.hashSync(body.password,10);
        try {
            const user=await create(body);
            res.status(201).json({
                status:201,
                message:'User created',
                user
            })
            
        } catch(error) {
            (error)
            res.status(500).json({
                status:500,
                message:'Server error'
            })
            
        }
    },
    loginUser:async(req,res)=>{
        let {email,password}=req.body;
        try {    
            let user=await findByEmail(email);
            if (!user) {
                return res.status(404).json({
                    status:404,
                    message:'There is no user whit this email. You have to register'
                }) 
            }
            const encryptedPassrod=user.password
            const isRightPassword=bcryptjs.compareSync(password,encryptedPassrod)    
            if (!isRightPassword) {
                return res.status(401).json({
                    status:401,
                    message:'There is an error in the password. Try it again'
                })
            }
            const tokenLogin=generateToken(user,process.env.SECRETPRIVATEKEY_LOGIN);
            
            res.status(200).json({
                status:200,
                message:'User logged',
                tokenLogin
            })
        } catch(error) {
            console.log(error)
            res.status(500).json({
                status:500,
                message:'Server error'
            })
            
        }
    },
    forgotPassword:async (req,res)=>{
        const {email}=req.body;
        try {
            let user=await findByEmail(email);
            if (!user) {
                return res.status(404).json({
                    status:404,
                    message:'There is no user whit that e-mail',
                })
            };
            const resetToken=generateToken(user,process.env.SECRETPRIVATEKEY_RESETPASSWORD);
            const verificationLink=`http://localhost:${process.env.PORT}/users/new-password?resetToken=${resetToken}`
            await sendResetPasswordEmail(user,verificationLink);
            user.resetToken=resetToken
            await update(user);
            res.status(200).json({
                status:200,
                message:"check your e-mail for a link to reset your password",
                resetToken

            })
            
        } catch(error) {
            console.log(error)
            res.status(500).json({
                status:500,
                message:'Server error'
            })
            
        }
    },
    createNewPassword:async(req,res)=>{
        const {resettoken}=req.headers;
        const {newPassword}=req.body;
        try {
        let user=await findByResetToken(resettoken)
        if (!user) {
            return res.status(401).json({
                status:404,
                message:'There is no user who want to change the password',
            })
        };
        user.password=bcryptjs.hashSync(newPassword,10);
        await update(user);
        res.status(200).json({
            status:200,
            message:"password changed",
        });
        } catch(error) {
            console.log(error)
            res.status(500).json({
                status:500,
                message:'Server error'
            });
        }
    }
};

module.exports=usersController