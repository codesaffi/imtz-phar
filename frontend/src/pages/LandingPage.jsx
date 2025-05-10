import React, { useState } from 'react';
import Navbar from '../components/Navbar';

import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';

const LandingPage = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const contentPadding = classNames('p-4 sm:p-6', {
    'pl-[88px] sm:pl-24': isCollapsed,
    'pl-[264px] sm:pl-72': !isCollapsed,
  });

  return (
    <>
      <Navbar />
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <main className={contentPadding}>
        <Outlet />
      </main>
    </>
  );
};

export default LandingPage;