import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllRecords = () => {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({
    username: '',
    productName: '',
    productPrice: '',
    pricePaid: '',
    remainingPrice: '',
  });

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/stock', {
        headers: { 'auth-token': localStorage.getItem('token') },
      });
      setRecords(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/stock', form, {
        headers: { 'auth-token': localStorage.getItem('token') },
      });
      setRecords([...records, res.data]);
      setForm({ username: '', productName: '', productPrice: '', pricePaid: '', remainingPrice: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#172542] p-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#7d98d1] to-[#282354] text-transparent bg-clip-text mb-6">
        All Stock Records
      </h1>
      <form onSubmit={handleSubmit} className="bg-[#1f2d47] p-6 rounded-lg shadow-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="p-2 border rounded text-white bg-[#282354]"
            required
          />
          <input
            type="text"
            placeholder="Product Name"
            value={form.productName}
            onChange={(e) => setForm({ ...form, productName: e.target.value })}
            className="p-2 border rounded text-white bg-[#282354]"
            required
          />
          <input
            type="number"
            placeholder="Product Price"
            value={form.productPrice}
            onChange={(e) => setForm({ ...form, productPrice: e.target.value })}
            className="p-2 border rounded text-white bg-[#282354]"
            required
          />
          <input
            type="number"
            placeholder="Price Paid"
            value={form.pricePaid}
            onChange={(e) => setForm({ ...form, pricePaid: e.target.value })}
            className="p-2 border rounded text-white bg-[#282354]"
            required
          />
          <input
            type="number"
            placeholder="Remaining Price"
            value={form.remainingPrice}
            onChange={(e) => setForm({ ...form, remainingPrice: e.target.value })}
            className="p-2 border rounded text-white bg-[#282354]"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-gradient-to-r from-[#7d98d1] to-[#282354] text-white py-2 rounded-lg hover:from-[#7d98d1]/90 hover:to-[#282354]/90"
        >
          Add Record
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {records.map((record) => (
          <div key={record._id} className="bg-[#1f2d47] p-4 rounded-lg shadow-lg text-white">
            <p><strong>Username:</strong> {record.username}</p>
            <p><strong>Product:</strong> {record.productName}</p>
            <p><strong>Price:</strong> ${record.productPrice}</p>
            <p><strong>Paid:</strong> ${record.pricePaid}</p>
            <p><strong>Remaining:</strong> ${record.remainingPrice}</p>
            <p><strong>Date:</strong> {new Date(record.purchaseDate).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecords;