import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import SignupPage from './pages/SignupPage.jsx';
import AdminLayout from './components/AdminLayout';
import ProtectedRoute from './components/ProtectRoute';
import CustomerPage from './pages/CustomerPage.jsx';
import AddUserPage from './pages/AddUserPage.jsx';


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
          { path: 'customer-page', element: <CustomerPage /> },
          { path: 'add-user', element: <AddUserPage /> },
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

