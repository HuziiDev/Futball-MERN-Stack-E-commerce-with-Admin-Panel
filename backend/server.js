import express from 'express'
import { connectToDb } from './config/db.js'
import cors from 'cors'
import dotenv from 'dotenv'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
dotenv.config()
const app = express()
connectToDb()
connectCloudinary()
const port = process.env.PORT
app.use(express.json())
app.use(cors())


app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.get('/', (req,res) =>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})