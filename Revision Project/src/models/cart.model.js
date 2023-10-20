const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        quantity: {
            type: Number,
            trim: true
        },
        total: {
            type : Number,
            trim: true
        },
        product:{
            type:mongoose.Types.ObjectId,
            ref:"product"
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user"
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const cart = mongoose.model("cart" , cartSchema);
module.exports = cart;