// --- RecordForm.jsx ---
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const RecordForm = ({ customerId }) => {
  const [type, setType] = useState('purchase');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [date, setDate] = useState('');
  const [remainingAmount, setRemainingAmount] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BACKEND_URL}/api/transactions`, {
  person: customerId,
  transactionType: 'buy',
  products: [
    {
      name: productName,
      quantity: 1,
      price: productPrice,
    },
  ],
  totalAmount: productPrice,
  paidAmount: productPrice - remainingAmount,
  date,
});
      setProductName('');
      setProductPrice('');
      setDate('');
      setRemainingAmount('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mt-4">
      <h3 className="text-lg font-semibold mb-2">Add Record</h3>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full p-2 border mb-2"
      >
        <option value="purchase">Purchase</option>
        <option value="sale">Sale</option>
      </select>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="w-full p-2 border mb-2"
        required
      />
      <input
        type="number"
        placeholder="Product Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        className="w-full p-2 border mb-2"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border mb-2"
        required
      />
      <input
        type="number"
        placeholder="Remaining Amount"
        value={remainingAmount}
        onChange={(e) => setRemainingAmount(e.target.value)}
        className="w-full p-2 border mb-2"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Record</button>
    </form>
  );
};

export default RecordForm;