const express = require("express");
const {
    productValidation
} = require("../../validations");
const {
    productController
} = require("../../controllers");
const validate = require("../../middlewares/validate");
const {
    upload
} = require("../../middlewares/upload.js")

const router = express.Router();

/** create product info */
router.post(
    "/create-product",
    upload.single("product_image"),
    // validate(productValidation.createProduct),
    productController.createProduct
);

/** get product list */
router.get(
    "/list",
    productController.getProductList
);

/** delete product */
router.delete(
    "/delete-product/:productId",
    productController.deleteProduct
);

/** update product */
router.put(
    "/update-product/:productId",
    upload.single("product_image"),
    productController.updateProduct
)

module.exports = router;