import express from 'express'
import { addToCart,getUserCart,updateCart } from '../controller/cartController.js'
const cartRouter = express.Router()
import authUser from '../middleware/auth.js'

cartRouter.post('/get',authUser,getUserCart)
cartRouter.post('/add',authUser, addToCart)
cartRouter.post('/update',authUser,updateCart)

export default cartRouter