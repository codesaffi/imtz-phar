import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import purchaseRoutes from './routes/purchaseRoutes.js';

dotenv.config();


const frontendlink =  process.env.FRONTEND_URL;
const app = express();


// Middleware
app.use(cors({
  origin: frontendlink,  
  credentials: true,
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

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
