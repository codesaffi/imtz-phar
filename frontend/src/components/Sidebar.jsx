// import React from 'react';
// import { Link } from 'react-router-dom';

// const SideBar = ({ isCollapsed, toggleSidebar }) => {
//   return (
//     <div
//       className={`fixed top-0 left-0 h-full bg-[#172542] text-white transition-all duration-300 ${
//         isCollapsed ? 'w-20' : 'w-64'
//       }`}
//     >
//       <button
//         onClick={toggleSidebar}
//         className="p-4 text-[#7d98d1] hover:text-white focus:outline-none"
//       >
//         {isCollapsed ? '>' : '<'}
//       </button>
//       {!isCollapsed && (
//         <ul className="mt-4 space-y-2">
//           <li>
//             <Link to="/admin/dashboard" className="block p-4 hover:bg-[#282354]">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/admin/all-records" className="block p-4 hover:bg-[#282354]">All Records</Link>
//           </li>
//           <li>
//             <Link to="/admin/user-records" className="block p-4 hover:bg-[#282354]">User Records</Link>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SideBar;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore2';
import { ChevronRight, Home, Box, BarChart, Wallet, User, Settings, LogOut } from 'lucide-react';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="fixed left-0 top-[60px] sm:top-[76px] h-[calc(100vh-60px)] sm:h-[calc(100vh-76px)] flex items-center z-40">
      <motion.div
        initial={{ width: 80 }}
        animate={{ width: isCollapsed ? 80 : 256 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-[#0e0b21] border-r border-[#282354] h-full p-4 flex flex-col relative"
      >
        <button
          onClick={toggleSidebar}
          className="absolute left-full top-1/2 transform -translate-y-1/2 bg-[#0e0b21] p-2 rounded-r-lg text-[#7d98d1]"
        >
          <motion.div animate={{ rotate: isCollapsed ? 0 : 180 }}>
            <ChevronRight size={24} />
          </motion.div>
        </button>

        <nav className="flex flex-col space-y-4 mt-10">
          <Link to="/admin/dashboard" className="flex items-center text-gray-300 hover:text-[#7d98d1] p-2 rounded-lg hover:bg-[#282354]">
            <Home className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">Dashboard</span>}
          </Link>
          <Link to="/admin/all-records" className="flex items-center text-gray-300 hover:text-[#7d98d1] p-2 rounded-lg hover:bg-[#282354]">
            <Box className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">Records</span>}
          </Link>
          <Link to="/admin/user-records" className="flex items-center text-gray-300 hover:text-[#7d98d1] p-2 rounded-lg hover:bg-[#282354]">
            <BarChart className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">User Records</span>}
          </Link>
          {/* <Link to="/finance" className="flex items-center text-gray-300 hover:text-[#7d98d1] p-2 rounded-lg hover:bg-[#282354]">
            <Wallet className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">Finance Manager</span>}
          </Link> */}
        </nav>

        <div className="border-t border-[#282354] my-6" />

        <nav className="flex flex-col space-y-4">
          <Link to="/profile" className="flex items-center text-gray-300 hover:text-[#7d98d1] p-2 rounded-lg hover:bg-[#282354]">
            <User className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">Profile</span>}
          </Link>
          <Link to="/settings" className="flex items-center text-gray-300 hover:text-[#7d98d1] p-2 rounded-lg hover:bg-[#282354]">
            <Settings className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">Settings</span>}
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-300 hover:text-[#7d98d1] p-2 rounded-lg hover:bg-[#282354]"
          >
            <LogOut className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </button>
        </nav>
      </motion.div>
    </div>
  );
};

export default Sidebar;