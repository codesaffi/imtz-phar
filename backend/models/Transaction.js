// models/Transaction.js
import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  person: { type: mongoose.Schema.Types.ObjectId, ref: 'Person', required: true },
  products: [
    {
      name: String,
      quantity: Number,
      price: Number,
    }
  ],
  transactionType: { type: String, enum: ['buy', 'sell'], required: true },
  totalAmount: { type: Number, required: true },
  paidAmount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
}, {  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }  });

transactionSchema.virtual('remainingAmount').get(function () {
  return this.totalAmount - this.paidAmount;
});

export default mongoose.model('Transaction', transactionSchema);
