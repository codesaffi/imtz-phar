// routes/personRoutes.js

import express from 'express';
import Person from '../models/Person.js';
import { verifyToken } from '../middleware/auth.js';
const router = express.Router();

// Create a customer for the authenticated user
router.post('/', verifyToken, async (req, res) => {
  try {
    const person = new Person({ ...req.body, user: req.user._id });
    await person.save();
    res.status(201).json(person);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get customers for the authenticated user only
router.get('/', verifyToken, async (req, res) => {
  try {
    const persons = await Person.find({ user: req.user._id });
    res.status(200).json(persons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
