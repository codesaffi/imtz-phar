import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserRecords = () => {
  const { username } = useParams();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, [username]);

  const fetchRecords = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/stock/user/${username}`, {
        headers: { 'auth-token': localStorage.getItem('token') },
      });
      setRecords(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#172542] p-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#7d98d1] to-[#282354] text-transparent bg-clip-text mb-6">
        Records for {username}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {records.map((record) => (
          <div key={record._id} className="bg-[#1f2d47] p-4 rounded-lg shadow-lg text-white">
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

export default UserRecords;