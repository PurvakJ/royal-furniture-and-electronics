import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Royal Furniture & Electronics</h3>
          <p>Your trusted destination for quality furniture and electronic appliances.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Maur Talwandi Road, Near Haryali Pump</p>
          <p>Phone: +91 99151-84617</p>
          <p>Email: royalfurnitureandelectronics1@google.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Royal Furniture & Electronics. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
