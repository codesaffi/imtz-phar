import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#0e0b21] p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#7d98d1]">City Pharmacy</Link>
        <div className="space-x-4">
          <Link to="/login" className="text-[#7d98d1] hover:underline px-4 py-2">Login</Link>
          {/* <Link 
            to="/signup" 
            className="bg-[#7d98d1] text-[#0e0b21] px-4 py-2 rounded-lg hover:bg-[#6984b8] transition-colors"
          >
            Sign Up
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;