import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#0e0b21] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#7d98d1]">Pharmacy</Link>
        <div className="space-x-4">
          <Link to="/login" className="text-[#7d98d1] hover:underline">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;