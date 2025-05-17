import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import personRoutes from './routes/personRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';


dotenv.config();


const frontendlink =  process.env.FRONTEND_URL;
const app = express();

// Middleware
app.use(cors({
  origin: frontendlink,  
  credentials: true,
}));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'auth-token, Content-Type');
  next();
});

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/persons', personRoutes);
app.use('/api/transactions', transactionRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Pharmacy API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
