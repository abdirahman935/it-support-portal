// src/components/AdminLogin.js
import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (credentials.username === 'admin' && credentials.password === 'AdminSupport123') {
      onLogin();
      setCredentials({ username: '', password: '' });
      setError('');
    } else {
      setError('Ugyldig brukernavn eller passord');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
    setError('');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h3>Admin Login</h3>
          <p>Logg inn for å administrere supportforespørsler</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Brukernavn</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Skriv admin brukernavn"
              required
              className={error ? 'input-error' : ''}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Passord</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Skriv admin passord"
              required
              className={error ? 'input-error' : ''}
            />
          </div>
          
          <button type="submit" className="btn login-btn">
            Logg inn til Admin
          </button>
        </form>
        
        
      </div>
    </div>
  );
};
 
export default AdminLogin;