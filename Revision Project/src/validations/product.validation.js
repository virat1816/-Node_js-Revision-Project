const joi = require("joi");

// create project
const createProduct ={
    body : joi.object().keys({
        product_name : joi.string().required().trim(),
        product_info: joi.string().required().trim(),
        product_price: joi.number().required().integer(),
    })
}

module.exports = {
    createProduct
}