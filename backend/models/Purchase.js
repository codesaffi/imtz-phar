import mongoose from 'mongoose';

  const purchaseSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    customerName: { type: String, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    pricePaid: { type: Number, default: 0 },
    remainingPrice: { type: Number },
    purchaseDate: { type: Date, default: Date.now },
  }, { timestamps: true });

  export default mongoose.model('Purchase', purchaseSchema);