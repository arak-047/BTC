import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="/assets/catalogue-section.png" 
          alt="Kids Cargo Action" 
          className="hero-bg-img" 
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <motion.div 
          className="hero-text-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">
            Built for <span className="text-gradient">Play.</span><br />
            Styled for the <span className="text-gradient">Streets.</span>
          </h1>
          <p className="hero-subtitle">
            Premium cargo fits for the next generation. Designed in London, built for every adventure.
          </p>
          
          <div className="hero-cta-wrapper">
            <button className="btn-primary flex-btn">
              Shop Drop 01
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
