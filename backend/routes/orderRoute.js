import express from 'express'
import { placeOrder ,placeOrderStripe, placeOrderRazorpay,allOrders,userOrders,updateStatus,verifyRazorpay } from '../controller/orderController.js'
import adminAuth  from '../middleware/adminAuth.js'

import  authUser from '../middleware/auth.js'
const orderRouter = express.Router()

//admin features for orders
orderRouter.post('/list',adminAuth, allOrders)
orderRouter.post('/status',adminAuth, updateStatus)

//Payment features
orderRouter.post('/place', authUser,placeOrder)
orderRouter.post('/stripe', authUser,placeOrderStripe)
orderRouter.post('/razorpay', authUser,placeOrderRazorpay)

//user features
orderRouter.post('/userorders',authUser, userOrders)

//verify razorpay
orderRouter.post('/verifyRazorpay',authUser, verifyRazorpay)
export default orderRouter
