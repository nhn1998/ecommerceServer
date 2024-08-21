// import { Schema, model, connect } from 'mongoose';


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