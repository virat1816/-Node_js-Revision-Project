const {product} = require("../models");

// Create product service
const createProduct = async(reqBody)=>{
    return product.create(reqBody);
};

// get product list service
const getProductList = async(req,res) =>{
    return product.find();
};

// delete product service
const deleteProduct = async(productId) =>{
    return product.findByIdAndDelete(productId);
};

// Get product details by id service
const getProductById = async(productId)=>{
    return product.findById(productId)
}

// update product details service
const updateProduct = async(productId , updateBody)=>{
    return product.findByIdAndUpdate(productId , {$set : updateBody})
}

module.exports = {
    createProduct,
    getProductList,
    deleteProduct,
    getProductById,
    updateProduct
}