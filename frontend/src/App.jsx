import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AllRecords from './pages/AllRecords';
import UserRecords from './pages/UserRecords';
import FloatingShapes from './components/FloatingShapes';
import { useAuthStore } from './store/authStore';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0b21] via-[#172542] to-[#282354] relative overflow-hidden">
      <FloatingShapes color="bg-[#7d98d1]" size="w-64 h-64" top="-5%" left="10%" delay={0} />
      <FloatingShapes color="bg-[#7d98d1]" size="w-48 h-48" top="70%" left="80%" delay={5} />
      <FloatingShapes color="bg-[#7d98d1]" size="w-32 h-32" top="40%" left="-10%" delay={2} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<ProtectedRoute><LandingPage /></ProtectedRoute>}>
          <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="all-records" element={<ProtectedRoute><AllRecords /></ProtectedRoute>} />
          <Route path="user-records/:username" element={<ProtectedRoute><UserRecords /></ProtectedRoute>} />
        </Route>
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
