// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';

function App() {
  const [requests, setRequests] = useState([]);

  // Last fra localStorage ved oppstart
  useEffect(() => {
    const savedRequests = localStorage.getItem('it-support-requests');
    if (savedRequests) {
      setRequests(JSON.parse(savedRequests));
    }
  }, []);

  // Lagre til localStorage når requests endres
  useEffect(() => {
    localStorage.setItem('it-support-requests', JSON.stringify(requests));
  }, [requests]);

  const addRequest = (newRequest) => {
    const requestWithId = {
      ...newRequest,
      id: Date.now().toString(),
      status: 'Ny',
      dato: new Date().toLocaleDateString('no-NO'),
      tid: new Date().toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' })
    };
    setRequests([requestWithId, ...requests]);
  };

  const updateRequestStatus = (id, newStatus) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: newStatus } : request
    ));
  };

  const deleteRequest = (id) => {
    setRequests(requests.filter(request => request.id !== id));
  };

  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="header-content">
            <div className="logo">
              <div>
                <h1>IT Support Portal</h1>
                <p className="tagline">Support for studenter</p>
              </div>
            </div>
            
            <nav className="nav">
              <Link to="/" className="nav-link">Hjem</Link>
              <Link to="/admin" className="nav-link">Admin</Link>
              <a href="#help" className="nav-link">Hjelp</a>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="container">
                  <HomePage 
                    requests={requests} 
                    addRequest={addRequest} 
                  />
                </div>
              } 
            />
            <Route 
              path="/admin" 
              element={
                <div className="admin-container">
                  <AdminPage 
                    requests={requests}
                    updateRequestStatus={updateRequestStatus}
                    deleteRequest={deleteRequest}
                  />
                </div>
              } 
            />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">
              <span>IT Support Portal</span>
            </div>
            <p className="copyright">© {new Date().getFullYear()} Skole IT Support</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;