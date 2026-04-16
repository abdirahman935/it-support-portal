// src/components/AdminControls.js
import React from 'react';

function AdminControls({ adminLoggedIn, isAdmin, toggleView, handleAdminLogout }) {
  return (
    <div className="admin-controls">
      {adminLoggedIn ? (
        <div className="admin-logged-in">
          <span>Administrator: admin</span>
          <div>
            <button className="toggle-view-btn" onClick={toggleView}>
              {isAdmin ? 'Vis brukerside' : 'Vis adminside'}
            </button>
            <button className="logout-btn" onClick={handleAdminLogout}>
              Logg ut
            </button>
          </div>
        </div>
      ) : (
        <div className="admin-login-prompt">
          <a href="#admin-login">Administrasjon? Logg inn her.</a>
        </div>
      )}
    </div>
  );
}

export default AdminControls;