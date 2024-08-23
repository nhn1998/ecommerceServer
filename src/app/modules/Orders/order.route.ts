import express from 'express'
import orderController from './order.controller';

const router = express.Router()

// Order post

router.post('/',orderController.createOrder)

// get all order

router.get('/',orderController.getAllData)


export const orderRoute = router;