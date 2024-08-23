import { Products } from "./products.interface";
import { productModel } from "./products.model";

// create product query
const createProductIntoDB=async(product:Products)=>{
    const result = await productModel.create(product)
    return result
}

// get all product query
const getProductIntoDB=async()=>{
    const result = await productModel.find()
    return result
}

// get single product query
const getSingleProductIntoDB=async(id:string)=>{
    const result = await productModel.findOne({_id:id})
    return result
}

// update single Value

const updateValueIntoDB = async(id:string,quantity:number)=>{
    const result = await productModel.findByIdAndUpdate({_id:id},{
        $set:{
            'inventory.quantity': quantity
        }
    })
    return result;
}

// deleteProduct from db
const DeleteProductIntoDB = async(id:string)=>{
    const result = await productModel.deleteOne({_id:id})
    return result
}

// search query 
const findDataByQuery= async(searchTerm:string)=>{
    const result = await productModel.find({
        $or: [
            { name: { $regex: searchTerm, $options: 'i' } },          
            { description: { $regex: searchTerm, $options: 'i' } },   
            { category: { $regex: searchTerm, $options: 'i' } },      
            { tags: { $regex: searchTerm, $options: 'i' } },       
          ],
    })
    return result
}


export const productServices = {
    createProductIntoDB,
    getProductIntoDB,
    getSingleProductIntoDB,
    updateValueIntoDB,
    DeleteProductIntoDB,
    findDataByQuery
}