import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#172542] text-white transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="p-4 text-[#7d98d1] hover:text-white focus:outline-none"
      >
        {isCollapsed ? '>' : '<'}
      </button>
      {!isCollapsed && (
        <ul className="mt-4 space-y-2">
          <li>
            <Link to="/admin/dashboard" className="block p-4 hover:bg-[#282354]">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/all-records" className="block p-4 hover:bg-[#282354]">All Records</Link>
          </li>
          <li>
            <Link to="/admin/user-records" className="block p-4 hover:bg-[#282354]">User Records</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SideBar;