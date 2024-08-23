import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { productRoute } from './app/modules/Products/products.routes'
import { orderRoute } from './app/modules/Orders/order.route'
const app:Application = express()


app.use(express.json())
app.use(cors())


app.use('/api/products', productRoute)

// orders
app.use('/api/orders',orderRoute)
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app
