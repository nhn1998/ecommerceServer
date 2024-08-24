"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoute = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = __importDefault(require("./order.controller"));
const router = express_1.default.Router();
// Order post
router.post('/', order_controller_1.default.createOrder);
// get all order
router.get('/', order_controller_1.default.getAllData);
exports.orderRoute = router;
