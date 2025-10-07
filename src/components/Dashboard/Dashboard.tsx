import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';
import Avatar from 'react-avatar';
import './Dashboard.css';

export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Dashboard</h1>
          <div className="header-actions">
            {currentUser && (
              <span className="user-email">
                Welcome, {currentUser.email}
              </span>
            )}
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="dashboard-main">
        {error && <div className="error-message">{error}</div>}
        <div className="dashboard-grid">
          <div className="dashboard-card profile-card">

            <div className="animated-avatar">
              {currentUser?.displayName?.charAt(0).toUpperCase() || "U"}
            </div>
            {/* <Avatar
              name={currentUser?.displayName || "User"}
              round={true}
              size="88"
              color="#5285f6"
            /> */}
            <h2 className="profile-name">
              {currentUser?.displayName || 'No name set'}
            </h2>
            <p className="profile-email">{currentUser?.email}</p>
            <div className="profile-additional">
              <span>UserID: {currentUser?.uid}</span>
            </div>
          </div>
          <div className="dashboard-card">
            <h3>Welcome Message</h3>
            <p>
              You have successfully logged in with Firebase Authentication!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
