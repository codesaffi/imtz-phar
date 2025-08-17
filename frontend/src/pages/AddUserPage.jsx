import React, { useState } from 'react';
import CustomerForm from '../components/CustomerForm';

const AddUserPage = () => {
  const [success, setSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const handleUserCreated = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000); // Hide after 2 seconds
    setFormKey((prev) => prev + 1); // Reload form
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      {success && (
        <div className="mb-4 p-3 bg-green-600 text-white rounded shadow text-center animate-fade-in">
          User created successfully!
        </div>
      )}
      <CustomerForm key={formKey} onCustomerCreated={handleUserCreated} />
    </div>
  );
};

export default AddUserPage;
