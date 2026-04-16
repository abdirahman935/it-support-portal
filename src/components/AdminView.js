// src/components/AdminView.js
import React from 'react';
import StatCard from './StatCard';

function AdminView({ requests, updateRequestStatus, deleteRequest }) {
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
    <div className="admin-view">
      <div className="page-header">
        <h2>Administrasjon - Supportforespørsler</h2>
      </div>
      
      <div className="stats-overview">
        <StatCard title="Totalt" value={requests.length} type="total" />
        <StatCard title="Nye" value={countByStatus('Ny')} type="new" />
        <StatCard title="Under behandling" value={countByStatus('Under behandling')} type="in-progress" />
        <StatCard title="Løste" value={countByStatus('Løst')} type="resolved" />
      </div>
      
      {requests.length === 0 ? (
        <div className="no-requests-admin">
          <p>Ingen supportforespørsler å vise.</p>
        </div>
      ) : (
        <div className="admin-requests-list">
          {requests.map(request => (
            <div key={request.id} className="admin-request-card">
              <div className="admin-request-header">
                <h3>{request.problemtype}</h3>
                <div className="admin-request-controls">
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
                    className="delete-btn"
                    onClick={() => handleDelete(request.id)}
                  >
                    Slett
                  </button>
                </div>
              </div>
              <div className="admin-request-body">
                <p><strong>Beskrivelse:</strong> {request.beskrivelse}</p>
                <div className="admin-request-meta">
                  <span><strong>Dato:</strong> {request.dato} kl. {request.tid}</span>
                  <span><strong>Navn:</strong> {request.fulltNavn}</span>
                  <span><strong>E-post:</strong> {request.epost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
  
export default AdminView;