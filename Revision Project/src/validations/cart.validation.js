const joi = require("joi");

// create cart
const createCart = {
    body : joi.object().keys({
        quantity : joi.number().integer().required(),
        total:joi.number().required(),
        product:joi.string().trim().required(),
        user:joi.string().trim().required()
    })
};

module.exports = {
    createCart
}