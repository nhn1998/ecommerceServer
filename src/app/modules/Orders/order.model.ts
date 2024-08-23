import { Schema, model } from "mongoose";
import { Orders, ordersValidationModel } from "./order.interface";

const OrderSchema=new Schema<Orders,ordersValidationModel>({
    email:{type:String,required:true},
    productId:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true}
})

OrderSchema.statics.isUserExists=async function(id:string){
    console.log(id)
    const existingUser = await OrderSchemaModel.findOne({productId:id})
    return existingUser
}

const OrderSchemaModel=model<Orders,ordersValidationModel>('Orders',OrderSchema)

export default OrderSchemaModel