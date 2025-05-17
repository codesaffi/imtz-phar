// components/ProtectedRoute.jsx
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore2';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, initialize, isLoading } = useAuthStore();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      await initialize();
      setInitialized(true);
    };
    checkAuth();
  }, []);

  if (!initialized || isLoading) return <div>Loading...</div>;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
