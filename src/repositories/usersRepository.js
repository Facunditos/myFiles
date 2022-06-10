const {User}=require("../database/models/index");

const usersRepository={
    findByEmail:async(email)=>{
        const user=await User.findOne({
            where:{
                email
            },
            include:[{
                association:"Files",
                attributes:["id"],
                
            }],
            
        })
        return user
    },
    findByResetToken:async(resetToken)=>{
        const user=await User.findOne({
            where:{
                resetToken,
            }
        });
        return user
    },
    create:async(body)=>{
        const user=await User.create({
            first_name:body.first_name,
            last_name:body.last_name,
            email:body.email,
            password:body.password,
            resetToken:body.resetToken,
        })
        return user
    },
    update:async(body)=>{
        return await User.update({
            first_name:body.first_name,
            last_name:body.last_name,
            email:body.email,
            password:body.password,
            resetToken:body.resetToken,
        },{
            where:{
                id:body.id
            }
        });
    }
}

module.exports=usersRepository