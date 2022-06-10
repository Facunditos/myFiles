const express=require('express');
const router=express.Router();
const {
    validateRegister,
    validateLogin,
    validateForgotPassword,
    validateNewPassword}
=require("../middlewares/usersValidator");

const {
    registerUser,
    loginUser,
    forgotPassword,
    createNewPassword
}=require('../controllers/usersController');

const{verifyTokenReset}=require("../middlewares/verifyToken")


router.post('/',validateRegister,registerUser);
router.post('/login',validateLogin,loginUser);
router.put('/forgot-password',validateForgotPassword,forgotPassword);
router.put('/new-password',verifyTokenReset,validateNewPassword,createNewPassword);
module.exports=router
