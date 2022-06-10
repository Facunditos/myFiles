require("dotenv").config()
const jwt=require("jsonwebtoken")

const verifyTokenLogin=(req,res,next)=> {
    const {token}=req.headers
    jwt.verify(token,process.env.SECRETPRIVATEKEY_LOGIN,(error,resolve)=>{
        if (error) {
            console.log(error);
            return res.status(401).json({
                status:401,
                message:'There is a problem with user authentication',
                detail:error.message
            }) ;
        };
        req.user=resolve.payload
        return next()
        }
    )
};
const verifyTokenReset=(req,res,next)=> {
    const {resettoken}=req.headers
    jwt.verify(resettoken,process.env.SECRETPRIVATEKEY_RESETPASSWORD,(error,resolve)=>{
        if (error) {
            return res.status(401).json({
                status:401,
                message:'There is a problem with user authentication',
                detail:error.message
            }) ;
        };
        req.user=resolve.payload
        return next()
        }
    )
};
module.exports={verifyTokenLogin,verifyTokenReset}