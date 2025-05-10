import { create } from 'zustand';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(`${BACKEND_URL}/auth/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      set({ user: { email }, isAuthenticated: true, isLoading: false });
    } catch (err) {
      set({ error: err.response?.data?.message || 'Login failed', isLoading: false });
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
    const res = await axios.post(`${BACKEND_URL}/auth/register`, { email, password, name });
    localStorage.setItem('token', res.data.token);
    set({ user: { email, name }, isAuthenticated: true, isLoading: false });
  } catch (err) {
    set({ error: err.response?.data?.message || 'Registration failed', isLoading: false });
    throw err;
  }
},
}));