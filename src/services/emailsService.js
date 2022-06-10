require("dotenv").config()
const sgMail=require("@sendgrid/mail")

const sendResetPasswordEmail= async function(user,link) {
    try{
        await sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg={
            to:user.email,
            from:process.env.SENDGRID_SENDER,
            subject:'reset password',
            text:"text",
            html:`<h1>Hi ${user.first_name}, reset your password:<a href=${link}>here</a></h1>`
        }
        await sgMail.send(msg)
    } catch (error) {
        console.log(error);
    }
    
}
module.exports=sendResetPasswordEmail