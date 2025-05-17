import FloatingShapes from './components/FloatingShapes';
import { useAuthStore } from './store/authStore2';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const { initialize } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0b21] via-[#172542] to-[#282354] relative overflow-hidden">
      <Navbar />
      <Outlet /> {/* 👈 This is where your nested routes like LandingPage, LoginPage, etc. will render */}
      
      {/* Optional animated background shapes */}
      <FloatingShapes color="bg-[#7d98d1]" size="w-64 h-64" top="-5%" left="15%" delay={0} />
      <FloatingShapes color="bg-blue-400" size="w-24 h-24" top="10%" left="2%" delay={1} />
      <FloatingShapes color="bg-blue-400" size="w-16 h-16" top="50%" left="80%" delay={3} />
      <FloatingShapes color="bg-blue-400" size="w-20 h-20" top="80%" left="20%" delay={5} />
      <FloatingShapes color="bg-blue-400" size="w-24 h-24" top="70%" left="80%" delay={1} />
    </div>
  );
}

export default App;
