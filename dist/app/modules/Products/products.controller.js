"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_service_1 = require("./products.service");
const product_validation_1 = __importDefault(require("./product.validation"));
// create product response
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        // validation with zod
        const ValidateData = product_validation_1.default.parse(product);
        const result = yield products_service_1.productServices.createProductIntoDB(ValidateData);
        res.status(200).json({
            success: true,
            message: "Products created successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "could not add products",
            error: err,
        });
    }
});
// get product response
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        if (searchTerm) {
            const result = yield products_service_1.productServices.getProductIntoDB(searchTerm);
            res.status(200).json({
                success: true,
                message: `Products matching search term ${searchTerm} fetched successfully!`,
                data: result,
            });
        }
        else {
            const result = yield products_service_1.productServices.getProductIntoDB();
            res.status(200).json({
                success: true,
                message: "Products fetched successfully",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "could not get products",
            error: err,
        });
    }
});
// get single product response
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield products_service_1.productServices.getSingleProductIntoDB(productId);
        res.status(200).json({
            success: true,
            message: "successfully get single product",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "can't get single product",
            err: err,
        });
    }
});
// update single value
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const quantity = req.body.inventory.quantity;
        const result = yield products_service_1.productServices.updateValueIntoDB(productId, quantity);
        res.status(500).json({
            success: true,
            message: "update product successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "can't update values",
            error: err,
        });
    }
});
// delete product
const DeleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        yield products_service_1.productServices.DeleteProductIntoDB(productId);
        res.status(200).json({
            success: true,
            message: "Student Deleted successfully",
            data: null,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "product is not deleted",
            error: err,
        });
    }
});
exports.default = {
    createProduct,
    getProduct,
    getSingleProduct,
    updateSingleProduct,
    DeleteProduct,
};
