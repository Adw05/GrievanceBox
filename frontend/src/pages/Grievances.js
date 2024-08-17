import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Grievances = () => {
  const [grievance, setGrievance] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGrievance = async () => {
      try {
        const response = await axios.get('/api/grievance/grievances');
        setGrievance(response.data.grievance);
      } catch (error) {
        console.error('Error fetching grievances:', error);
        navigate('/login');
      }
    };
    fetchGrievance();
  }, [navigate]);

  return (
    <section className="container">
      <div className="login-container">
        <div className="circle circle-one"></div>
        <div className="form-container">
          <h1 className="opacity">View Grievance</h1>
          <p className="secret-text opacity">{grievance}</p>
          <a className="btn btn-light btn-lg home-btn" href="/" role="button">Log Out</a>
          <a className="btn btn-dark btn-lg home-btn" href="/submit" role="button">Update Grievance</a>
        </div>
        <div className="circle circle-two"></div>
      </div>
      <div className="theme-btn-container"></div>
    </section>
  );
};

export default Grievances;
