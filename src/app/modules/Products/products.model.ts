import { Schema, model } from "mongoose";
import { Inventory, Products, Variants } from "./products.interface";


const variantSchema = new Schema<Variants>({
    type:{type:String, required:true},
    value:{type:String,required:true}
})


const inventorySchema = new Schema<Inventory>({
    quantity:{type:Number},
    inStock:{type:Boolean}
})

const productSchema = new Schema<Products>({
    name:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number,required:true},
    category:{type:String, required:true},
    tags:{type:[String],required:true},
    variants:{type:[variantSchema],required:true},
    inventory:{type:inventorySchema,required:true}
})

export const productModel = model<Products>('productModel',productSchema)