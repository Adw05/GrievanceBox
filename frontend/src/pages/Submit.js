import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Submit = () => {
  const [grievance, setgrievance] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/grievance/submit', { grievance });
      navigate('/grievances');
    } catch (error) {
      console.error('Submit error:', error);
    }
  };

  return (
    <section className="container">
      <div className="login-container">
        <div className="circle circle-one"></div>
        <div className="form-container">
          <h1 className="opacity">Grievance</h1>
          <p className="secret-text opacity">Submit Grievance</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter here"
              onChange={(e) => setgrievance(e.target.value)}
            />
            <button className="opacity" type="submit">Submit</button>
          </form>
        </div>
        <div className="circle circle-two"></div>
      </div>
      <div className="theme-btn-container"></div>
    </section>
  );
};

export default Submit;
