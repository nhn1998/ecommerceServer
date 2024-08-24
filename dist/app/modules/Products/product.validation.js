"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define the Zod schema for Variants
const variantSchema = zod_1.z.object({
    type: zod_1.z.string().nonempty("Type is required"),
    value: zod_1.z.string().nonempty("Value is required"),
});
// Define the Zod schema for Inventory
const inventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().nonnegative("Quantity must be a non-negative number"),
    inStock: zod_1.z.boolean(),
});
// Define the Zod schema for Products
const productSchemaValidation = zod_1.z.object({
    name: zod_1.z.string().nonempty("Name is required"),
    description: zod_1.z.string().nonempty("Description is required"),
    price: zod_1.z.number().positive("Price must be a positive number"),
    category: zod_1.z.string().nonempty("Category is required"),
    tags: zod_1.z.array(zod_1.z.string().nonempty("Tags must be non-empty strings")),
    variants: zod_1.z.array(variantSchema),
    inventory: inventorySchema,
});
exports.default = productSchemaValidation;
