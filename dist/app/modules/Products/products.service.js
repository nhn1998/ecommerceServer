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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const products_model_1 = require("./products.model");
// create product query
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.productModel.create(product);
    return result;
});
// get all product query
const getProductIntoDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        const result = yield products_model_1.productModel.find({
            $or: [
                { name: { $regex: searchTerm, $options: "i" } },
                { description: { $regex: searchTerm, $options: "i" } },
                { category: { $regex: searchTerm, $options: "i" } },
                { tags: { $regex: searchTerm, $options: "i" } },
            ],
        });
        return result;
    }
    else {
        const result = yield products_model_1.productModel.find();
        return result;
    }
});
// get single product query
const getSingleProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.productModel.findOne({ _id: id });
    return result;
});
// update single Value
const updateValueIntoDB = (id, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.productModel.findByIdAndUpdate({ _id: id }, {
        $set: {
            "inventory.quantity": quantity,
        },
    });
    return result;
});
// deleteProduct from db
const DeleteProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.productModel.deleteOne({ _id: id });
    return result;
});
exports.productServices = {
    createProductIntoDB,
    getProductIntoDB,
    getSingleProductIntoDB,
    updateValueIntoDB,
    DeleteProductIntoDB,
};
