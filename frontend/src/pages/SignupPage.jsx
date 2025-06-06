import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader, Lock, Mail, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { useAuthStore } from '../store/authStore2';
import FloatingShapes from '../components/FloatingShapes';


const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { register, isLoading, error } = useAuthStore();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData.email, formData.password, formData.name);
      navigate('/admin'); // Navigate to dashboard
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0b21] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating background shapes */}
      <FloatingShapes color="bg-[#7d98d1]" size="w-32 h-32" top="20%" left="10%" delay={0} />
      <FloatingShapes color="bg-[#282354]" size="w-48 h-48" top="60%" left="80%" delay={2} />
      <FloatingShapes color="bg-[#7d98d1]" size="w-24 h-24" top="40%" left="50%" delay={4} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[#0e0b21]/90 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl border border-[#282354] relative z-10"
      >
        <div className="p-6 md:p-8">
          <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#7d98d1] to-[#282354] text-transparent bg-clip-text'>
            Create an Account
          </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
            <Input 
              icon={User} 
              type='text' 
              name="name" 
              placeholder='Full Name' 
              value={formData.name}
              onChange={handleChange} required
            />
            <Input 
              icon={Mail} 
              type='email' 
              name="email"
              placeholder='Email Address' 
              value={formData.email}
             onChange={handleChange} required
            />
            <Input 
              icon={Lock} 
              type='password' 
              name="password" c
              placeholder='Password' 
             value={formData.password}
             onChange={handleChange} required
            />

            {error && <p className='text-red-500 text-sm font-semibold mt-2'>{error}</p>}

            <motion.button
              className='w-full py-3 px-4 bg-gradient-to-r from-[#7d98d1] to-[#282354] text-white font-semibold rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#7d98d1] focus:ring-offset-2 transition-all duration-200 disabled:opacity-50'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader size='1.2rem' className='animate-spin' />
                  <span>Creating Account...</span>
                </div>
              ) : 'Sign Up'}
            </motion.button>
            {error && <p>{error}</p>}
          </form>
        </div>

        <div className='px-6 py-4 bg-[#172542]/50 border-t border-[#282354]'>
          <p className='text-sm text-center text-gray-300'>
            Already have an account?{' '}
            <Link 
              to='/login' 
              className='text-[#7d98d1] hover:underline font-medium'
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;