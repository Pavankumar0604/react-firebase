import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.tsx';        
import Signup from './components/auth/Signup.tsx';                       
import Login from './components/auth/Login.tsx';                       
import Dashboard from './components/Dashboard/Dashboard.tsx';           
import PrivateRoute from './components/auth/PrivateRoute.tsx';          
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      
      <AuthProvider>
        <div className="App">
          <Routes>
            {/* Redirect root to dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            
            {/* Public routes */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            
            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
