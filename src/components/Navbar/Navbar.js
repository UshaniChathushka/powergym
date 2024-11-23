import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../../images/logo.png';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/pricing">Our Pricing</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
