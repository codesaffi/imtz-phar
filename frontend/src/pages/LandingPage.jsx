// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';

// import Sidebar from '../components/Sidebar';
// import { Outlet } from 'react-router-dom';
// import classNames from 'classnames';

// const LandingPage = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const contentPadding = classNames('p-4 sm:p-6', {
//     'pl-[88px] sm:pl-24': isCollapsed,
//     'pl-[264px] sm:pl-72': !isCollapsed,
//   });

//   return (
//     <>
//       <Navbar />
//       <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
//       <main className={contentPadding}>
//         <Outlet />
//       </main>
//     </>
//   );
// };

// export default LandingPage;




import React from 'react';
import { Link } from 'react-router-dom';
import FloatingShapes from '../components/FloatingShapes'; // Optional for visual flair
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* Background with optional floating shapes */}
      <div className="bg-[#0e0b21] p-4 shadow-lg">

        {/* Optional animated background shapes
        <FloatingShapes color="bg-[#7d98d1]" size="w-64 h-64" top="-5%" left="15%" delay={0} />
        <FloatingShapes color="bg-blue-400" size="w-24 h-24" top="10%" left="2%" delay={1} />
        <FloatingShapes color="bg-blue-400" size="w-16 h-16" top="50%" left="80%" delay={3} />
        <FloatingShapes color="bg-blue-400" size="w-20 h-20" top="80%" left="20%" delay={5} />
        <FloatingShapes color="bg-blue-400" size="w-24 h-24" top="70%" left="80%" delay={1} /> */}

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#7d98d1] to-[#282354] text-transparent bg-clip-text mb-6">
            Welcome to MedEase Pharmacy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Your trusted partner in health — delivering medicines, wellness, and care at your convenience.
          </p>
          <div className="flex gap-6">
            <Link to="/signup" className="px-6 py-3 bg-gradient-to-r from-[#7d98d1] to-[#282354] text-white rounded-lg font-semibold shadow-lg">
              Sign Up
            </Link>
            <Link to="/login" className="px-6 py-3 border-2 border-[#7d98d1] text-[#7d98d1] rounded-lg font-semibold hover:bg-[#7d98d1]/10">
              Login
            </Link>
          </div>
        </section>

<section className="bg-[#0e0b21] py-16 px-6 text-center">
  <h2 className="text-3xl font-bold text-[#7d98d1] mb-4">About MedEase Pharmacy</h2>
  <p className="text-gray-300 max-w-3xl mx-auto">
    MedEase Pharmacy is dedicated to providing quality medicines, expert advice, and health products to keep you and your family safe and healthy.
    With decades of experience and thousands of happy customers, we are proud to be a trusted name in healthcare.
  </p>
</section>



{/* Contact Section */}
<section className="bg-[#0e0b21] py-16 px-6 text-center">
  <h2 className="text-3xl font-bold text-[#7d98d1] mb-4">Contact Us</h2>
  <p className="text-gray-300">📍 123 Health Ave, Wellness City, PH 45678</p>
  <p className="text-gray-300 mt-2">📞 +1 234 567 890</p>
  <p className="text-gray-300 mt-2">✉️ contact@medeasepharma.com</p>
</section>

      </div>
    </>
  );
};

export default LandingPage;
