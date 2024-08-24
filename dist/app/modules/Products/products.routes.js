"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = __importDefault(require("./products.controller"));
const router = express_1.default.Router();
// create products
router.post("/", products_controller_1.default.createProduct);
// get products
router.get("/", products_controller_1.default.getProduct);
// get single product
router.get("/:productId", products_controller_1.default.getSingleProduct);
// update product
router.put("/:productId", products_controller_1.default.updateSingleProduct);
// Delete product
router.delete("/:productId", products_controller_1.default.DeleteProduct);
exports.productRoute = router;
