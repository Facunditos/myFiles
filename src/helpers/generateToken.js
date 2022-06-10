const jwt=require("jsonwebtoken");
const generateToken=(user,secretPrivateKey)=>{
    const token=jwt.sign(
    {payload:user},
    secretPrivateKey,
    {
      expiresIn: "4h",
    })
    return token
};
module.exports=generateToken