import { z } from "zod";

// Define the Zod schema for Variants
const variantSchema = z.object({
  type: z.string().nonempty("Type is required"),
  value: z.string().nonempty("Value is required"),
});

// Define the Zod schema for Inventory
const inventorySchema = z.object({
  quantity: z.number().nonnegative("Quantity must be a non-negative number"),
  inStock: z.boolean(),
});

// Define the Zod schema for Products
const productSchemaValidation = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().nonempty("Description is required"),
  price: z.number().positive("Price must be a positive number"),
  category: z.string().nonempty("Category is required"),
  tags: z.array(z.string().nonempty("Tags must be non-empty strings")),
  variants: z.array(variantSchema),
  inventory: inventorySchema,
});
  export default productSchemaValidation;