import { Request, Response } from "express";
import { productServices } from "./products.service";
import productSchemaValidation from "./product.validation";

// create product response
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    // validation with zod
    const ValidateData = productSchemaValidation.parse(product)

    const result = await productServices.createProductIntoDB(ValidateData);
    res.status(200).json({
      success: true,
      message: "Products created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "could not add products",
      error: err,
    });
  }
};

// get product response
const getProduct = async (req: Request, res: Response) => {
  try {
    const {searchTerm} = req.query
    if (searchTerm) {
        const result = await productServices.findDataByQuery(searchTerm as string)
        res.status(200).json({
            success: true,
            message: `Products matching search term ${searchTerm} fetched successfully!`,
            data: result,
          });
      } else {
        const result = await productServices.getProductIntoDB();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: result,
    });
      }
    
    
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "could not get products",
      error: err,
    });
  }
};

// get single product response
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProductIntoDB(productId);
    res.status(200).json({
      success: true,
      message: "successfully get single product",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "can't get single product",
      err: err,
    });
  }
};

// update single value

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const quantity = req.body.inventory.quantity;
    const result = await productServices.updateValueIntoDB(productId, quantity);
    res.status(500).json({
      success: true,
      message: "update product successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "can't update values",
      error: err,
    });
  }
};

// delete product

const DeleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
     await productServices.DeleteProductIntoDB(productId);
    res.status(200).json({
      success: true,
      message: "Student Deleted successfully",
      data: null,
    });
    
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "product is not deleted",
      error: err,
    });
  }
};




export default {
  createProduct,
  getProduct,
  getSingleProduct,
  updateSingleProduct,
  DeleteProduct,
};
