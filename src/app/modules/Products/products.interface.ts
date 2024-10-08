import { Model } from "mongoose";

export type Variants={
    type: string;
    value: string
}

export type Inventory={
    quantity:number;
    inStock: boolean;
}

export type Products = {
    name: string;
    description: string;
    price: number;
    category:string;
    tags: string[];
    variants:Variants[];
    inventory:Inventory;
  }
  
  export interface productValidationModel extends Model<Products> {
    isUserExists(_id:string): Promise<Products | null>
 }