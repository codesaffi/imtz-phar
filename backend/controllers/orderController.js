import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


// placing orders using cod method
const placeOrder = async (req,res) => {

    try {

        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({succes:true,message:"Order Place"})
        
    } catch (error) {
        console.log(error);
        res.json({succes:false,message:error.message})
    }

}

// all orders data for admin panel
const allOrders = async (req,res) => {

    try {
        
        const orders = await orderModel.find({})
        res.json({success:true,orders})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
    
}

// all order for frontend
const userOrders = async (req,res) => {
    try {

        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({success:true,orders})
        
    } catch (error) {
        console.log(error);
        res.json({succes:false,message:error.message})
    }
}

// update order status from admin
const UpdateStatus = async (req,res) => {
    try {

        const { orderId, status} = req.body

        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({success:true,message:'Status Updated'})
        
    } catch (error) {
        console.log(error);
        res.json({succes:false,message:error.message})
    }
}

export {placeOrder,allOrders,userOrders,UpdateStatus}