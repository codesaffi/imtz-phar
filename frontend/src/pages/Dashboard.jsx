import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore2';

const Dashboard = () => {
  const { logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-[#172542] p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#7d98d1] to-[#282354] text-transparent bg-clip-text">
          Admin Dashboard
        </h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/admin/customer-page"
          className="bg-[#1f2d47] p-6 rounded-lg shadow-lg hover:bg-[#282354] transition text-white"
        >
          <h2 className="text-xl font-semibold">CUSTOMERS</h2>
          <p>View all stock records.</p>
        </Link>
        {/* <Link
          to="/admin/user-records"
          className="bg-[#1f2d47] p-6 rounded-lg shadow-lg hover:bg-[#282354] transition text-white"
        >
          <h2 className="text-xl font-semibold">User Records</h2>
          <p>Search and view individual user records.</p>
        </Link> */}
      </div>
    </div>
  );
};

export default Dashboard;