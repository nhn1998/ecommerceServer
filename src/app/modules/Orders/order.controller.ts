import { Request, Response } from "express";
import { orderServices } from "./order.service";
import OrderSchemaZod from "./order.zod.validation";

// order post request
const createOrder=async(req:Request,res:Response)=>{
    try{
        const orders  = req.body;
        // validation with zod
        const zodValidation = OrderSchemaZod.parse(orders)
    const result = await orderServices.createOrderIntoDB(zodValidation)
    res.status(200).json({
        success:true,
        message:"Order created successfully!",
        data:result
    })
    }
    catch(err){
        res.status(200).json({
            success:false,
            message:"user already exist",
            error:err
        })
    }

}
// get request
const getAllData = async(req:Request,res:Response)=>{
    try{

        const {email} = req.query;
        if(email){
            const result =await orderServices.getAllOrderIntoDB(email as string)
            
            res.status(200).json({
                success:true,
                message:"Orders fetched successfully for user email!",
                data:result
            })
        }
        else{

            const result = await orderServices.getAllOrderIntoDB()
            res.status(200).json({
            success:true,
            message:"Orders fetched successfully!",
            data:result
        })
        }
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong",
            error:err
        })
    }
}

export default {
    createOrder,
    getAllData
}