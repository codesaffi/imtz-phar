import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FloatingShapes from '../components/FloatingShapes';

const LandingPage = () => {
  return (
    <div className="bg-[#0e0b21] p-4 shadow-lg">
      
      {/* Floating background shapes */}
      <FloatingShapes color="bg-[#7d98d1]" size="w-32 h-32" top="20%" left="10%" delay={0} />
      <FloatingShapes color="bg-[#282354]" size="w-48 h-48" top="60%" left="80%" delay={2} />
      <FloatingShapes color="bg-[#7d98d1]" size="w-24 h-24" top="40%" left="50%" delay={4} />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#7d98d1] to-[#282354] text-transparent bg-clip-text"
          >
            Welcome to boja pharmacy
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Your trusted partner in health and wellness. Providing quality care and medications since 1995.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-6 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#7d98d1] to-[#282354] text-white rounded-lg font-semibold shadow-lg"
            >
              <Link to="/signup">Get Started</Link>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#7d98d1] text-[#7d98d1] rounded-lg font-semibold hover:bg-[#7d98d1]/10"
            >
              <Link to="/login">Order Now</Link>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}

<section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent relative z-10">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center text-[#7d98d1]">Why Choose Us?</h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "24/7 Service",
          description: "Round-the-clock pharmacy services for your urgent needs"
        },
        {
          title: "Expert Staff",
          description: "Licensed pharmacists and healthcare professionals"
        },
        {
          title: "Free Delivery",
          description: "Fast and reliable medication delivery service"
        }
      ].map((feature, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl backdrop-blur-md bg-[#ffffff0d] border border-[#7d98d155] shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105"
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#7d98d1]">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#7d98d1]">Contact Us</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-gray-300">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">Address</h3>
              <p>123 Health Street</p>
              <p>Medical City, MC 12345</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">Phone</h3>
              <p>Emergency: (123) 456-7890</p>
              <p>Office: (123) 456-7891</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">Hours</h3>
              <p>Open 24/7</p>
              <p>365 Days a Year</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
