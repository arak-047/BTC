import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="navbar-container container">
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="navbar-logo">
          <img src="./assets/logo.png" alt="BTC London Logo" className="logo-img" />
          <span className="brand-text">BTC London</span>
        </div>

        {/* Desktop Links */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="shop-drops.html" className="nav-link">Shop Drops</a>
          <a href="#cargo" className="nav-link">Cargo Fits</a>
          <a href="#about" className="nav-link">About BTC</a>
          <a href="ai-pocket.html" className="nav-link">AI Pocket</a>
        </div>

        {/* Cart Icon */}
        <div className="navbar-actions">
          <button className="cart-btn">
            <ShoppingBag size={22} />
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
