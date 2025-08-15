import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader, Lock, Mail } from 'lucide-react';
import Input from '../components/Input';
import { useAuthStore } from '../store/authStore2';
import FloatingShapes from '../components/FloatingShapes';



const LoginPage = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    // await login(email, password);
      try {
    await login(email, password);
    // Add this navigation after successful login
   navigate('/admin');
  } catch (err) {
    // Error will be handled by the auth store
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
            Welcome Back
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              icon={Mail}
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={Lock}
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className='flex justify-between items-center'>
              <Link to='/forgot-password' className='text-sm text-[#7d98d1] hover:underline'>
                Forgot Password?
              </Link>
            </div>

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
                  <span>Logging in...</span>
                </div>
              ) : 'Login'}
            </motion.button>
          </form>
        </div>

        <div className='px-6 py-4 bg-[#172542]/50 border-t border-[#282354]'>
          <p className='text-sm text-center text-gray-300'>
            Don't have an account?{' '}
            <Link 
              to='/signup' 
              className='text-[#7d98d1] hover:underline font-medium'
            >
              Create Account
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;