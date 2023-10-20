const {order} = require("../models");

// create order service
const createOrder = async(reqBody) =>{
    return order.create(reqBody);
};

// get order list service
const getOrderList = async(req,res) =>{
    return order.find().populate("cart");
};

// delete order service
const deleteOrder = async(orderId) =>{
    return order.findByIdAndDelete(orderId);
};

// get order details by id service
const getOrderById = async(orderId) =>{
    return order.findById(orderId);
};

// update order service
const updateOrder = async(orderId , updateBody) =>{
    return order.findByIdAndUpdate(orderId , {$set : updateBody});
};

module.exports = {
    createOrder,
    getOrderList,
    deleteOrder,
    getOrderById,
    updateOrder
}