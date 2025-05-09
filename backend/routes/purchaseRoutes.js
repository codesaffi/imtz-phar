import express from 'express';
  import Purchase from '../models/Purchase.js';
  import Product from '../models/Product.js';
  import { verifyToken } from '../middleware/auth.js';

  const router = express.Router();

  // Get all purchases
  router.get('/', verifyToken, async (req, res) => {
    try {
      const purchases = await Purchase.find().populate('productId');
      res.json(purchases);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });

  // Add a purchase
  router.post('/', verifyToken, async (req, res) => {
    const { productId, customerName, quantity, pricePaid } = req.body;
    try {
      const product = await Product.findById(productId);
      if (!product) return res.status(404).json({ message: 'Product not found' });

      const totalPrice = product.price * quantity;
      const remainingPrice = totalPrice - pricePaid;

      const purchase = new Purchase({
        productId,
        customerName,
        quantity,
        totalPrice,
        pricePaid,
        remainingPrice,
        purchaseDate: new Date(),
      });

      await purchase.save();
      res.status(201).json(purchase);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });

  // Search purchases by customer name
  router.get('/search', verifyToken, async (req, res) => {
    const { customerName } = req.query;
    try {
      const purchases = await Purchase.find({ customerName: new RegExp(customerName, 'i') }).populate('productId');
      res.json(purchases);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });

  export default router;