import { Schema, model } from "mongoose";
import { Orders } from "./order.interface";

const OrderSchema=new Schema<Orders>({
    email:{type:String,required:true},
    productId:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true}
})

const OrderSchemaModel=model<Orders>('Orders',OrderSchema)

export default OrderSchemaModel