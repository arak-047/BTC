import React from 'react';
import { motion } from 'framer-motion';
import './Collection.css';

const products = [
  {
    id: 1,
    name: 'Urban Explorer Cargo',
    price: '₹1,299',
    productImg: '/assets/PD1.png',
    lifestyleImg: '/assets/K1-PD1.png',
    color: 'Sand'
  },
  {
    id: 2,
    name: 'Active Street Cargo',
    price: '₹1,499',
    productImg: '/assets/PD2.png',
    lifestyleImg: '/assets/K2-PD2.png',
    color: 'Midnight Black'
  },
  {
    id: 3,
    name: 'Tactical Stealth Cargo',
    price: '₹1,399',
    productImg: '/assets/PD3.png',
    lifestyleImg: '/assets/K3-PD3.png',
    color: 'Olive Green'
  },
  {
    id: 4,
    name: 'Neon Accents Cargo',
    price: '₹1,599',
    productImg: '/assets/PD4.png',
    lifestyleImg: '/assets/K4-PD4.png',
    color: 'Concrete Grey'
  },
  {
    id: 5,
    name: 'Camo Adventure Cargo',
    price: '₹1,499',
    productImg: '/assets/PD5.png',
    lifestyleImg: '/assets/K5-PD5.png',
    color: 'Desert Camo'
  },
  {
    id: 6,
    name: 'Utility Premium Cargo',
    price: '₹1,699',
    productImg: '/assets/PD6.png',
    lifestyleImg: '/assets/K6-PD6.png',
    color: 'Navy Blue'
  }
];

const Collection = () => {
  return (
    <section id="cargo" className="collection-section">
      <div className="container">
        <div className="collection-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Latest <span className="text-gradient">Drops</span>
          </motion.h2>
          <p className="section-subtitle">Engineered for comfort. Designed to stand out.</p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="product-image-container">
                <img src={product.productImg} alt={product.name} className="img-product" />
                <img src={product.lifestyleImg} alt={`${product.name} lifestyle`} className="img-lifestyle" />
                
                <div className="product-badge">NEW</div>
                <button className="add-to-cart-btn">Quick Add</button>
              </div>
              
              <div className="product-info">
                <div className="product-meta">
                  <span className="product-color">{product.color}</span>
                  <span className="product-price">{product.price}</span>
                </div>
                <h3 className="product-name">{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
