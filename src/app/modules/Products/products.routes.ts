import express from "express";
import productController from "./products.controller";

const router = express.Router();
// create products
router.post("/", productController.createProduct);
// get products
router.get("/", productController.getProduct);
// get single product
router.get("/:productId", productController.getSingleProduct);

// update product

router.put("/:productId", productController.updateSingleProduct);

// Delete product

router.delete("/:productId", productController.DeleteProduct);


export const productRoute = router;
