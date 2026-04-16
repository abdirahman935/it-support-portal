// src/components/RequestForm.js
import React, { useState } from 'react';

function RequestForm({ addRequest }) {
  const [formData, setFormData] = useState({
    fulltNavn: '',
    epost: '',
    problemtype: '',
    beskrivelse: ''
  });

  const problemTyper = [
    'Velg problemtype',
    'Datamaskin',
    'Nettverk',
    'Programvare',
    'Brukernavn/Passord',
    'Skriver',
    'Annet'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fulltNavn || !formData.epost || 
        formData.problemtype === 'Velg problemtype' || !formData.beskrivelse) {
      alert('Vennligst fyll ut alle feltene');
      return;
    }

    addRequest(formData);
    
    setFormData({
      fulltNavn: '',
      epost: '',
      problemtype: 'Velg problemtype',
      beskrivelse: ''
    });
    
    alert('Supportforespørsel sendt inn!');
  };

  return (
    <div className="form-card">
      <h3>Send inn ny supportforespørsel</h3>
      <form onSubmit={handleSubmit} className="support-form">
        <div className="form-group">
          <label htmlFor="fulltNavn">Fullt navn *</label>
          <input
            type="text"
            id="fulltNavn"
            name="fulltNavn"
            value={formData.fulltNavn}
            onChange={handleChange}
            placeholder="Skriv ditt fulle navn"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="epost">E-postadresse *</label>
          <input
            type="email"
            id="epost"
            name="epost"
            value={formData.epost}
            onChange={handleChange}
            placeholder="din.epost@skole.no"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="problemtype">Problemtype *</label>
          <select
            id="problemtype"
            name="problemtype"
            value={formData.problemtype}
            onChange={handleChange}
            required
          >
            {problemTyper.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="beskrivelse">Beskrivelse *</label>
          <textarea
            id="beskrivelse"
            name="beskrivelse"
            value={formData.beskrivelse}
            onChange={handleChange}
            placeholder="Beskriv problemet ditt i detalj..."
            rows="4"
            required
          />
        </div>
        
        <button type="submit" className="btn submit-btn">
          Send inn forespørsel
        </button>
      </form>
    </div>
  );
}
export default RequestForm;