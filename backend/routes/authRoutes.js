import express from 'express';
  import bcrypt from 'bcryptjs';
  import jwt from 'jsonwebtoken';
  import User from '../models/User.js';

  const router = express.Router();

  // Admin Login
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'User not found' });

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      
      res.json({ token,
      user: {
      email: user.email,
      name: user.name,
      id: user._id
    } });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });

  // Register Admin (for initial setup)
  router.post('/register', async (req, res) => {
    const { email, password, name } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) return res.status(400).json({ message: 'User already exists' });

      user = new User({ email, password, name });
      await user.save();

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(201).json({ token });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });

  // Add this new route to authRoutes.js
router.get('/verify', async (req, res) => {
  try {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.status(401).json(false);

    res.json(true);
  } catch (err) {
    res.status(500).json({ message: 'Token verification failed' });
  }
});

  export default router;
  