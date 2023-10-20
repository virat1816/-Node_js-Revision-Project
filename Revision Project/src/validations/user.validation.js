const joi = require("joi");

/** create user */
const createUser ={
    body : joi.object().keys({
        first_name : joi.string().required().trim(),
        last_name: joi.string().required().trim(),
        email: joi.string().required().trim(),
        password: joi.number().required().integer(),
    })
}

module.exports = {
    createUser
}