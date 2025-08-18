import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecordForm from '../components/RecordForm';
import BackForwardNav from '../components/BackForwardNav';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const UserDetailsPage = () => {
  const { userId } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [userType, setUserType] = useState('customer');
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      const { data } = await axios.get(`${BACKEND_URL}/api/transactions/person/${userId}`);
      setTransactions(data);
    };
    const fetchUserType = async () => {
      const { data } = await axios.get(`${BACKEND_URL}/api/persons/${userId}`);
      setUserType(data.type);
    };
    fetchTransactions();
    fetchUserType();
  }, [userId, formKey]);

  const handleRecordAdded = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    setShowForm(false);
    setFormKey((prev) => prev + 1);
  };

  return (
    <div className="p-6 bg-[#172542] min-h-screen text-white relative">
  <BackForwardNav />
  <h2 className="text-2xl font-bold mb-4">User Transaction History</h2>
      {success && (
        <div className="mb-4 p-3 bg-green-600 text-white rounded shadow text-center animate-fade-in">
          Record added successfully!
        </div>
      )}
      <div className="mt-6">
        {transactions.length === 0 ? (
          <p className="text-gray-300">No transactions yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-[#1f2d47] rounded-lg shadow text-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-gray-600">Product Name</th>
                  <th className="px-4 py-2 border-b border-gray-600">Type</th>
                  <th className="px-4 py-2 border-b border-gray-600">Date</th>
                  <th className="px-4 py-2 border-b border-gray-600">Total</th>
                  <th className="px-4 py-2 border-b border-gray-600">Paid</th>
                  <th className="px-4 py-2 border-b border-gray-600">Remaining</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  transaction.products.map((product, idx) => (
                    <tr key={transaction._id + '-' + idx} className="hover:bg-[#282354] transition text-center">
                      <td className="px-4 py-2 border-b border-gray-700 text-center">{product.name}</td>
                      <td className="px-4 py-2 border-b border-gray-700 text-center">{transaction.transactionType}</td>
                      <td className="px-4 py-2 border-b border-gray-700 text-center">{new Date(transaction.date).toLocaleDateString()}</td>
                      <td className="px-4 py-2 border-b border-gray-700 text-center">${transaction.totalAmount}</td>
                      <td className="px-4 py-2 border-b border-gray-700 text-center">${transaction.paidAmount}</td>
                      <td className="px-4 py-2 border-b border-gray-700 text-center">${transaction.remainingAmount}</td>
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg"
          onClick={() => setShowForm(true)}
        >
          Add Record
        </button>
      </div>
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1f2d47] p-8 rounded-lg shadow-xl w-full max-w-md"
            >
              <RecordForm key={formKey} customerId={userId} userType={userType} onCustomerCreated={handleRecordAdded} hideHistory={true} />
              <button
                className="mt-4 w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserDetailsPage;
