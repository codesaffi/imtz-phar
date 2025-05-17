import { create } from 'zustand';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Add axios interceptor
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['auth-token'] = token;
  }
  return config;
});

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  // Add initialization function
  initialize: async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await axios.get(`${BACKEND_URL}/api/auth/verify`);
        set({ isAuthenticated: true });
      } catch (err) {
        localStorage.removeItem('token');
        set({ isAuthenticated: false });
      }
    }
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(`${BACKEND_URL}/api/auth/login`, { email, password });
      localStorage.setItem('token', res.data.token);
          set({ 
      user: { email: res.data.user.email, name: res.data.user.name },
      isAuthenticated: true,
      isLoading: false
    });
   return res.data.user;
    } catch (err) {
      set({ 
        error: err.response?.data?.message || 'Login failed', 
        isLoading: false 
      });
      throw err;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, isAuthenticated: false, error: null });
  },

  register: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(`${BACKEND_URL}/api/auth/register`, { email, password, name });
      localStorage.setItem('token', res.data.token);
      set({ 
        user: { email, name }, 
        isAuthenticated: true, 
        isLoading: false 
      });
    } catch (err) {
      set({ 
        error: err.response?.data?.message || 'Registration failed', 
        isLoading: false 
      });
      throw err;
    }
  },
}));