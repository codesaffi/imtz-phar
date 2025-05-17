
// --- CustomerPage.jsx ---
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerForm from '../components/CustomerForm';
import RecordForm from '../components/RecordForm';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const CustomerPage = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      const { data } = await axios.get(`${BACKEND_URL}/api/persons`);
      setCustomers(data);
    };
    fetchCustomers();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <CustomerForm onCustomerCreated={(newCustomer) => setCustomers([...customers, newCustomer])} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {customers.map((customer) => (
          <div
            key={customer._id}
            className={`border p-4 rounded cursor-pointer bg-white shadow ${selectedCustomer?._id === customer._id ? 'border-blue-500' : ''}`}
            onClick={() => setSelectedCustomer(customer)}
          >
            <h4 className="font-bold text-lg">{customer.name}</h4>
            <p className="text-sm">{customer.phone}</p>
          </div>
        ))}
      </div>
      {selectedCustomer && <RecordForm customerId={selectedCustomer._id} />}
    </div>
  );
};

export default CustomerPage;
