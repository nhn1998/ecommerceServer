import { Orders } from "./order.interface";
import OrderSchemaModel from "./order.model";

const createOrderIntoDB = async (order: Orders) => {
  const result = await OrderSchemaModel.create(order);
  return result;
};

// get all order
const getAllOrderIntoDB = async () => {
  const result = await OrderSchemaModel.find();
  return result;
};
// email query
const getOrderByEmail = async(email:string)=>{
    
    const result = await OrderSchemaModel.find({email})
    return result
}
export const orderServices = {
  createOrderIntoDB,
  getAllOrderIntoDB,
  getOrderByEmail
};
