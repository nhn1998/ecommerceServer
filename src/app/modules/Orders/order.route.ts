import express from 'express'
import orderController from './order.controller';

const router = express.Router()

// Order post

router.post('/',orderController.createOrder)


export const orderRoute = router;