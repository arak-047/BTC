import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Catalogue.css';

const Catalogue = () => {
  return (
    <section id="about" className="catalogue-section">
      <div className="container">
        <div className="catalogue-wrapper">
          <motion.div 
            className="catalogue-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="./assets/catalogue-section.png" alt="BTC London Lifestyle" className="catalogue-img" />
            <div className="catalogue-overlay"></div>
          </motion.div>
          
          <motion.div 
            className="catalogue-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="catalogue-title">
              The <span className="text-gradient">British Tiger Crew</span> Ethos
            </h2>
            <p className="catalogue-text">
              We believe kids' clothing shouldn't compromise on style or durability. 
              BTC London brings the premium aesthetic of streetwear to the playground. 
              Our cargo pants are engineered with high-grade utility fabrics, reinforced 
              stitching, and a fit that moves with them.
            </p>
            <p className="catalogue-text">
              Whether they're exploring the urban jungle or hanging out with friends, 
              they're doing it in comfort and unmatched style.
            </p>
            
            <button className="btn-primary" style={{ marginTop: '2rem' }}>
              Read Our Story
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
