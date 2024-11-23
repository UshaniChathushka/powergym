import React from "react";
import ContactIcon from "../../images/contact.png";
import EmailIcon from "../../images/email.png";
import FbIcon from "../../images/fb1.png";
import InstagramIcon from "../../images/instagram1.png";
import LocationIcon from "../../images/location.png";
import Logo from "../../images/logo.png";
import XIcon from "../../images/x1.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo & Socials */}
        <div className="footer-column">
          <img src={Logo} alt="PowerGym Logo" className="footer-logo" />
          <p className="footer-tagline">
            Transforming Your Fitness Journey, One Rep at a Time.
          </p>
          <p className="footer-follow-us">Follow us on!</p>
          <div className="footer-social-icons">
            <img src={FbIcon} alt="Facebook" />
            <img src={InstagramIcon} alt="Instagram" />
            <img src={XIcon} alt="X" />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Our Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact Information</h3>
          <p className="footer-contact-item">
            <img src={ContactIcon} alt="Contact" /> +1 (555) 123-4567
          </p>
          <p className="footer-contact-item">
            <img src={EmailIcon} alt="Email" /> info@powergym.com
          </p>
          <p className="footer-contact-item">
            <img src={LocationIcon} alt="Location" /> 123 Fitness Ave, Los Angeles, CA 90001
          </p>
        </div>

        {/* Column 4: Hours of Operation */}
        <div className="footer-column">
          <h3 className="footer-heading">Hours of Operation</h3>
          <p className="footer-hours">Mon - Fri: 6:00 AM - 10:00 PM</p>
          <p className="footer-hours">Saturday: 8:00 AM - 8:00 PM</p>
          <p className="footer-hours">Sunday: Closed</p>
        </div>
      </div>

      {/* Horizontal Line & Copyright */}
      <div className="footer-bottom">
        <hr />
        <p className="footer-copyright">© 2024 PowerGym. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
