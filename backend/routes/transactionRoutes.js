// routes/transactionRoutes.js
import express from 'express';
import Transaction from '../models/Transaction.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/person/:id', async (req, res) => {
  try {
    const transactions = await Transaction.find({ person: req.params.id })
      .sort({ date: -1 });  // Add sorting
    res.json(transactions);
  } catch (err) {
    console.error('Error fetching transactions:', err);
    res.status(500).json({ 
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined 
    });
  }
});

export default router;
