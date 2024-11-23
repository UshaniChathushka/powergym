import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Correct import
import './App.scss';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Package from './components/package/package';
import Pricing from './components/pricing/pricing';
import Services from './components/services/services';

function App() {
  return (
    <Router>
      <Navbar /> 
      
      <Routes>
        <Route path="/home" element={<Home />} /> 
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/pricing" element={<Pricing />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/package" element={<Package />} /> 
      </Routes>

      <Footer /> 
    </Router>
  );
}

export default App;
