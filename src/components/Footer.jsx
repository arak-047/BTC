import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/assets/logo.png" alt="BTC London Logo" className="footer-logo-img" />
              <span className="footer-brand-text">BTC London</span>
            </div>
            <p className="footer-desc">
              British Tiger Crew. Premium streetwear and utility fits engineered for the next generation.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" title="Instagram">IG</a>
              <a href="#" className="social-link" title="Twitter">TW</a>
              <a href="#" className="social-link" title="Facebook">FB</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Shop</h4>
            <ul>
              <li><a href="#">All Products</a></li>
              <li><a href="#">Cargo Fits</a></li>
              <li><a href="#">T-Shirts</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Help</h4>
            <ul>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4 className="footer-title">Stay in the Loop</h4>
            <p className="newsletter-text">Sign up for exclusive drops and early access.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="newsletter-input" />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BTC London (British Tiger Crew). All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
