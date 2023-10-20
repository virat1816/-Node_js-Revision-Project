const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_name:{
        type:String,
        trim:true
    },
    product_info:{
        type: String,
        trim:true
    },
    product_price:{
        type:Number,
        trim:true
    },
    product_image: {
        type: String,
        trim: true
    },
    is_active:{
        type:Boolean,
        default:true
    }
},
{
    timestamps: true,
    versionKey: false,
    toJSON: {
        transform: function (doc, data) {
            if (data ?.product_image) {
                data.product_image = `${config.base_url}product_image/${data.product_image}`;
            }
        },
    },
});

const product = mongoose.model("product" , productSchema);
module.exports = product;
