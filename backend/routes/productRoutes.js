import express from 'express';
  import Product from '../models/Product.js';
  import { verifyToken } from '../middleware/auth.js';

  const router = express.Router();

  // Get all products
  router.get('/', verifyToken, async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });

  // Add a product
  router.post('/', verifyToken, async (req, res) => {
    const { name, price, description, stockQuantity } = req.body;
    try {
      const product = new Product({ name, price, description, stockQuantity });
      await product.save();
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });

  export default router;