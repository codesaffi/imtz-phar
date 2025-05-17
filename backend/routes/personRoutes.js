// routes/personRoutes.js
import express from 'express';
import Person from '../models/Person.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const person = new Person(req.body);
    await person.save();
    res.status(201).json(person);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/api/persons', async (req, res) => {
  try {
    const persons = await Person.find(); // Or however you’re fetching data
    res.status(200).json(persons);
  } catch (err) {
    console.error(err); // This should show the error in the console
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
