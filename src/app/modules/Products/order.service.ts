import { Orders } from "../Orders/order.interface";
import OrderSchemaModel from "../Orders/order.model";

const createOrderIntoDB = async(order:Orders)=>{
    const result = await OrderSchemaModel.create(order)
    return result;
}

export const orderServices={
    createOrderIntoDB
}