import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Home = () => (
  <section className="container">
    <div className="login-container">
      <div className="circle circle-one"></div>
      <div className="form-container">
        <h1 className="opacity">Welcome to GrievanceBox</h1>
        <p className="lead opacity">Login or Register to submit your grievance</p>
        <Link className="btn btn-light btn-lg home-btn" to="/register">Register</Link>
        <Link className="btn btn-light btn-lg home-btn" to="/login">Login</Link>
      </div>
      <div className="circle circle-two"></div>
    </div>
    <div className="theme-btn-container"></div>
  </section>
);

export default Home;
