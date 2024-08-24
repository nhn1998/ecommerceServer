import { Model } from "mongoose";

export type Orders={
    email:string;
    productId:string;
    price:number;
    quantity: number;
}

export interface ordersValidationModel extends Model<Orders> {
    isUserExists(id:string,_id:string): Promise<Orders | null>
 }