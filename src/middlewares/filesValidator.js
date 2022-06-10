const { check } = require('express-validator');
const { validate } = require('../util/validateHelper');
const {findByNameExactly}=require("../repositories/filesRepository");
const validateCreate = [
    check('name','name is required')
        .notEmpty().isString()
        .custom(async function (value) {
            if (value) {
                file=await findByNameExactly(value);
            };
            if (file) {
                throw new Error('This file already exits')
            }
        } ),
    (req, res, next) => validate(req, res, next)
]

const validateUpdate = [
    check('name','name is required').notEmpty().isString(),
    (req, res, next) => {validate(req, res, next)}
]

module.exports = { validateCreate, validateUpdate };