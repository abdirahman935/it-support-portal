// src/components/RequestList.js
import React from 'react';

function RequestList({ requests }) {
  const getStatusClass = (status) => {
    return status.toLowerCase().replace(' ', '-');
  };

  return (
    <div className="list-card">
      <h3>Mine innsendte forespørsler ({requests.length})</h3>
      
      {requests.length === 0 ? (
        <div className="empty-state">
          <p>Du har ikke sendt inn noen forespørsler ennå.</p>
          <p>Bruk skjemaet til venstre for å sende inn din første forespørsel.</p>
        </div>
      ) : (
        <div className="requests-list">
          {requests.map(request => (
            <div 
              key={request.id} 
              className={`request-item status-${getStatusClass(request.status)}`}
            >
              <div className="request-header">
                <h4>{request.problemtype}</h4>
                <span className={`status-badge status-${getStatusClass(request.status)}`}>
                  {request.status}
                </span>
              </div>
              <div className="request-body">
                <p><strong>Beskrivelse:</strong> {request.beskrivelse}</p>
                <div className="request-meta">
                  <span><strong>Dato:</strong> {request.dato} kl. {request.tid}</span>
                  <span><strong>Navn:</strong> {request.fulltNavn}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RequestList;