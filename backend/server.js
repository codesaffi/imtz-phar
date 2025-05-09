// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/mongodb.js'
// import connectCloudinary from './config/cloudinary.js'
// import userRouter from './routes/userRoute.js'
// import productRouter from './routes/productRoute.js'
// import cartRouter from './routes/cartRoute.js'
// import orderRouter from './routes/orderRoute.js'

// // app config
// const app = express()
// const port = process.env.PORT || 5000
// connectDB()
// connectCloudinary()

// // middleware
// app.use(express.json())
// app.use(cors())

// // api endpoints
// app.use('/api/user', userRouter)
// app.use('/api/product', productRouter)
// app.use('/api/cart', cartRouter)
// app.use('/api/order',orderRouter)


// app.get('/',(req,res)=>{
//     res.send('API WORKING')
// })

// app.listen(port, ()=> console.log('Server started running on PORT :' + port))




import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import purchaseRoutes from './routes/purchaseRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.frontendlink,  // Replace with your actual frontend URL
  credentials: true,
  //'https://localhost:5173',
}));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/purchases', purchaseRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Pharmacy API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
