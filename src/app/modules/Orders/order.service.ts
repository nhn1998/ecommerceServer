import { Orders } from "./order.interface";
import OrderSchemaModel from "./order.model";

const createOrderIntoDB = async (order: Orders) => {
  if(await OrderSchemaModel.isUserExists(order.productId)){
    throw new Error('user already exist')
  }
  const result = await OrderSchemaModel.create(order);
  return result;
};

// get all order
const getAllOrderIntoDB = async (email:string) => {
    if(email){
        const result = await OrderSchemaModel.find({email})
    return result
    }
    else{

        const result = await OrderSchemaModel.find();
        return result;
    }
};

export const orderServices = {
  createOrderIntoDB,
  getAllOrderIntoDB,
};
