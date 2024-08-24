"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const OrderSchemaZod = zod_1.z.object({
    email: zod_1.z.string().email().nonempty("Email is required"),
    productId: zod_1.z.string().nonempty("Product ID is required"),
    price: zod_1.z.number().positive("Price must be a positive number"),
    quantity: zod_1.z.number().int().positive("Quantity must be a positive integer"),
});
exports.default = OrderSchemaZod;
