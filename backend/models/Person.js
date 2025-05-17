import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  type: { type: String, enum: ['customer', 'vendor', 'both'], required: true },
}, { timestamps: true });

export default mongoose.model('Person', personSchema);
