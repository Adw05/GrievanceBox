//frontend/src/app.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Grievances from './pages/Grievances';
import Submit from './pages/Submit';
import './styles.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/grievances" element={<Grievances />} />
      <Route path="/submit" element={<Submit />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
