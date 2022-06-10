const { check } = require('express-validator');
const { validate } = require('../util/validateHelper');
const { findByEmail } = require('../repositories/usersRepository');

const validateRegister = [
    check('first_name','first_name is required and it has to include at least three letters').isLength({min:3}),
    check('last_name','last_name is required and it has to include at least three letters').isLength({min:3}),
    check('email')
        .notEmpty().withMessage('email is required')         
        .isEmail().withMessage('email has to be valid')
        .custom(async function (email) {
            if (email) {
                user=await findByEmail(email);
            };
            if (user) {
                throw new Error('This email already exits')
            }
        } ),
    check('password','password has to include at least six characters long, one lowercase letter, one uppercase letter and one number').isStrongPassword({minLength: 6,minLowercase: 1,minUppercase: 1,minNumbers: 1,minSymbols: 0,}),
    (req, res, next) => {validate(req,res,next)}
];

const validateLogin = [
    check('email')
        .notEmpty().withMessage('email is required')         
        .isEmail().withMessage('email has to be valid'),
    check('password','password has to include at least six characters long, one lowercase letter, one uppercase letter and one number').isStrongPassword({minLength: 6,minLowercase: 1,minUppercase: 1,minNumbers: 1,minSymbols: 0,}),
    (req, res, next) => {validate(req,res,next)}
];

const validateForgotPassword = [
    check('email')
        .notEmpty().withMessage('email is required')         
        .isEmail().withMessage('email has to be valid'),
    (req, res, next) => {validate(req,res,next)}
];

const validateNewPassword=[
    check('newPassword','password has to include at least six characters long, one lowercase letter, one uppercase letter and one number').isStrongPassword({minLength:6,minLowercase:1,minNumbers:1,minUppercase:1,minSymbols:0}),
    (req,res,next)=>{validate(req,res,next)}
];

module.exports = { validateRegister, validateLogin,validateForgotPassword,validateNewPassword };