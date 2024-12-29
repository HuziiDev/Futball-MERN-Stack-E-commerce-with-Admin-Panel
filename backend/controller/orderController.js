
import orderModel from "../models/oderModel.js";
import { userModel } from "../models/userModel.js";
import Stripe from 'stripe'
import razorpay from 'razorpay'

//Gloabal vars
const currency = 'inr'
const deliveryCharge = 10;

//gateway Initialization
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

//iniliazing razorpay
const razorpayInstance = new razorpay({
    key_id: 'rzp_test_YYawNLvVNzbPTO',
    key_secret: 'yi638u0UcIE5kUIbF2bu1C0G'
})


//placing order using cash on delivery method
 const placeOrder = async (req, res) => {
  
    try {
        const {userId, items, amount, address} = req.body;
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData:[]});
        res.json({success:true, message:"Order Placed Successfully"})

        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }

 }


 //placing order using stripe payment method

 const placeOrderStripe = async (req, res) => {
    // try {
    //     const { userId, items, amount, address } = req.body;
    //     const { origin } = req.headers;
    
    //     const orderData = {
    //       userId,
    //       items,
    //       amount,
    //       paymentMethod: "Stripe",
    //       payment: false,
    //       date: Date.now(),
    //       address,
    //     };
    
    //     const newOrder = new orderModel(orderData);
    //     await newOrder.save();
    
    //     const line_items = items.map((item) => ({
    //       price_data: {
    //         currency: currency,
    //         product_data: {
    //           name: item.name,
    //         },
    //         unit_amount: item.price * 100,
    //       },
    //       quantity: item.quantity,
    //     }));
    
    //     line_items.push({
    //       price_data: {
    //         currency: currency,
    //         product_data: {
    //           name: "Delivery Charges",
    //         },
    //         unit_amount: deliveryCharge * 100,
    //       },
    //       quantity: 1,
    //     });
    
    //     const session = await stripe.checkout.sessions.create({
    //       success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
    //       cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
    //       line_items,
    //       mode: "payment",
    //     });
    
    //     res.json({
    //       success: true,
    //       session_url: session.url,
    //       message: "Order placed successfully",
    //     });
    //   } catch (error) {
    //     console.log(error);
    //     res.json({ success: false, message: error.message });
    //   }
 }



 //placing order using razpay payment method

 const placeOrderRazorpay = async (req, res) => {
 try {
  const { userId, items, amount, address } = req.body;
     
  
      const orderData = {
        userId,
        items,
        amount,
        paymentMethod: "Razorpay",
        payment: false,
        date: Date.now(),
        address,
      };

      const newOrder = new orderModel(orderData);
          await newOrder.save();

          const options = {
            amount: amount * 100,
            currency: currency.toUpperCase(),
            receipt: newOrder._id.toString(),

          }
      
          await razorpayInstance.orders.create(options, (error, order) => {
     if (error) {
       return res.json({ success: false, message: error.message });
     }
     res.json({ success: true, order, message: "Order Placed Successfully" });
   })
 } catch (error) {
  
 }


 }
 // verify razorpay
 const verifyRazorpay = async (req, res) => {
  try {
    const {userId,razorpay_order_id}=req.body
     const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
     if(orderInfo.status==='paid'){
      await orderModel.findByIdAndUpdate(orderInfo.receipt, {payment:true});
      await userModel.findByIdAndUpdate(userId, {cartData:[]});
      res.json({success:true, message:"Payment Successfull"})
     }
     else{
      res.json({success:false, message:"Payment Failed"})
     }
     
  } catch (error) {
   console.log(error) 
   res.json({success:false, message:error.message})
  }


 }
 //All orders data for admin panel

 const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({success:true, orders})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
    
 }

    //user order data for the frontend part
 const userOrders = async (req, res) => {
    try {
        const{userId} = req.body;
        const orders = await orderModel.find({userId});
        res.json({success:true, orders})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }

 }

 // update order status for admin panel
    const updateStatus = async (req, res) => {
        try {
            const {orderId, status} = req.body;
             await orderModel.findByIdAndUpdate(orderId, {status});
                res.json({success:true, message:"Order Status Updated Successfully"})
            
        } catch (error) {
            console.log(error)
            res.json({success:false, message:error.message})
            
        }
    
    }

    export{
        placeOrder,
        placeOrderStripe,
        placeOrderRazorpay,
        allOrders,
        userOrders,
        updateStatus,
        verifyRazorpay
    }