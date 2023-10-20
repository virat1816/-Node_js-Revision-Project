const joi = require("joi");

// create order validation
const createOrder = {
    body : joi.object().keys(
        {
            order_name : joi.string().required().trim(),
            quantity : joi.number().integer().required(),
            product:joi.string().trim().required(),
        }
    )
};

module.exports = {
    createOrder
}