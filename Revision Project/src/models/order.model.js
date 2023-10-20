const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        order_name:{
            type:String,
            trim:true
        },
        quantity:{
            type:Number,
            trim:true
        },
        cart:{
            type: mongoose.Types.ObjectId,
            ref:"cart"
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

const order = mongoose.model("order" , orderSchema);
module.exports = order;