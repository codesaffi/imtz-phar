import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AllRecords from './pages/AllRecords';
import SignupPage from './pages/SignupPage.jsx';
import AdminLayout from './components/AdminLayout';
import ProtectedRoute from './components/ProtectRoute';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      {
        path: 'admin',
        element: <ProtectedRoute><AdminLayout /></ProtectedRoute>,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'all-records', element: <AllRecords /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

