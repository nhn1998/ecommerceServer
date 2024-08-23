import { z } from "zod";

const OrderSchemaZod = z.object({
    email: z.string().email().nonempty("Email is required"),
    productId: z.string().nonempty("Product ID is required"),
    price: z.number().positive("Price must be a positive number"),
    quantity: z.number().int().positive("Quantity must be a positive integer"),
});

export default OrderSchemaZod;