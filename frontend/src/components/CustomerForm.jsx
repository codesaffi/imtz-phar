// --- CustomerForm.jsx ---
import React, { useState } from 'react';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const CustomerForm = ({ onCustomerCreated }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('customer');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } =   await axios.post(`${BACKEND_URL}/api/persons`, { 
  name, 
  phone,
  type  // Add this
});
      onCustomerCreated(data);
      setName('');
      setPhone('');
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Add New Customer</h3>
      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 border mb-2"
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="w-full p-2 border mb-2"
      />
      <select
  value={type}
  onChange={(e) => setType(e.target.value)}
  className="w-full p-2 border mb-2"
  required
>
  <option value="customer">Customer</option>
  <option value="vendor">Vendor</option>
  <option value="both">Both</option>
</select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Customer</button>
    </form>
  );
};

export default CustomerForm;
