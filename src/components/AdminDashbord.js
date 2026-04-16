// src/components/AdminDashboard.js
import React from 'react';

function AdminDashboard({ requests, updateRequestStatus, deleteRequest }) {
  const statusOptions = ['Ny', 'Under behandling', 'Løst'];
  
  const countByStatus = (status) => {
    return requests.filter(request => request.status === status).length;
  };

  const handleStatusChange = (id, newStatus) => {
    updateRequestStatus(id, newStatus);
  };

  const handleDelete = (id) => {
    if (window.confirm('Er du sikker på at du vil slette denne forespørselen?')) {
      deleteRequest(id);
    }
  };
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h3>Admin Dashboard</h3>
        <p>Her kan du administrere alle supportforespørsler</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-box total">
          <h4>Totalt</h4>
          <div className="stat-number">{requests.length}</div>
        </div>
        <div className="stat-box new">
          <h4>Nye</h4>
          <div className="stat-number">{countByStatus('Ny')}</div>
        </div>
        <div className="stat-box in-progress">
          <h4>Under behandling</h4>
          <div className="stat-number">{countByStatus('Under behandling')}</div>
        </div>
        <div className="stat-box resolved">
          <h4>Løste</h4>
          <div className="stat-number">{countByStatus('Løst')}</div>
        </div>
      </div>
      
      <div className="requests-container">
        <h4>Alle forespørsler</h4>
        
        {requests.length === 0 ? (
          <div className="empty-state">
            <p>Ingen supportforespørsler å vise.</p>
            <p>Når elever sender inn forespørsler, vil de vises her.</p>
          </div>
        ) : (
          <div className="admin-requests-list">
            {requests.map(request => (
              <div key={request.id} className="admin-request-item">
                <div className="admin-request-header">
                  <div>
                    <h5>{request.problemType}</h5>
                    <div className="request-info">
                      <span><strong>ID:</strong> #{request.id}</span>
                      <span><strong>Dato:</strong> {request.date} {request.time}</span>
                    </div>
                  </div>
                  <div className="admin-controls">
                    <select 
                      value={request.status} 
                      onChange={(e) => handleStatusChange(request.id, e.target.value)}
                      className="status-select"
                    >
                      {statusOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                    <button 
                      className="btn delete-btn"
                      onClick={() => handleDelete(request.id)}
                    >
                      Slett
                    </button>
                  </div>
                </div>
                <div className="admin-request-body">
                  <p><strong>Beskrivelse:</strong> {request.description}</p>
                  <div className="admin-request-meta">
                    <span><strong>Navn:</strong> {request.name}</span>
                    <span><strong>E-post:</strong> {request.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;