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
const order_service_1 = require("./order.service");
const order_zod_validation_1 = __importDefault(require("./order.zod.validation"));
// order post request
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = req.body;
        // validation with zod
        const zodValidation = order_zod_validation_1.default.parse(orders);
        const result = yield order_service_1.orderServices.createOrderIntoDB(zodValidation);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(200).json({
            success: false,
            message: "user already exist",
            error: err
        });
    }
});
// get request
const getAllData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        if (email) {
            const result = yield order_service_1.orderServices.getAllOrderIntoDB(email);
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully for user email!",
                data: result
            });
        }
        else {
            const result = yield order_service_1.orderServices.getAllOrderIntoDB();
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err
        });
    }
});
exports.default = {
    createOrder,
    getAllData
};
