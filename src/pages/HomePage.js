// src/pages/HomePage.js
import React from 'react';
import RequestForm from '../components/RequestForm';
import RequestList from '../components/RequestList';

function HomePage({ requests, addRequest }) {
  return (
    <div className="home-page">
      <div className="page-header">
        <h2>IT Support for Elever</h2>
        <p>Send inn en supportforespørsel hvis du har problemer med datamaskin, nettverk eller programvare.</p>
      </div>

      <div className="content-grid">
        <div className="content-section">
          <RequestForm addRequest={addRequest} />
        </div>
        
        <div className="content-section">
          <RequestList requests={requests} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;