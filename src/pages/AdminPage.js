// src/pages/AdminPage.js
import React, { useState } from 'react';
import AdminLogin from '../components/AdminLogin';
import AdminView from '../components/AdminView';

const AdminPage = ({ requests, updateRequestStatus, deleteRequest }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsAdminLoggedIn(true);
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
  };

  return (
    <div className="admin-page">
      {!isAdminLoggedIn ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <>
          <div className="admin-controls">
            <div className="admin-logged-in">
              <span>Administrator: admin</span>
              <button onClick={handleLogout} className="btn logout-btn">
                Logg ut
              </button>
            </div>
          </div>
          <AdminView 
            requests={requests}
            updateRequestStatus={updateRequestStatus}
            deleteRequest={deleteRequest}
          />
        </>
      )}
    </div>
  );
};

export default AdminPage;