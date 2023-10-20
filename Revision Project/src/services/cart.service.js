const {cart} = require("../models");

// create cart service
const createCart = async(reqBody) =>{
    return cart.create(reqBody);
};

// get cart list service
const getCartList = async(req,res) =>{
    return cart.find().populate("user").populate("product");
};

// delete cart service
const deleteCart = async(cartId) =>{
    return cart.findByIdAndDelete(cartId);
};

// get cart details by id service
const getCartById = async(cartId) =>{
    return cart.findById(cartId);
};

// update cart details service
const updateCart = async(cartId , updateBody) =>{
    return cart.findByIdAndUpdate(cartId , {$set : updateBody})
}

module.exports = {
    createCart,
    getCartList,
    deleteCart,
    getCartById,
    updateCart
}