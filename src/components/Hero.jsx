import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar } from 'lucide-react';
import salonInterior from '../assets/counter-amrutha.webp';
import { WHATSAPP_NUMBER } from '../data/servicesData';

const Hero = ({ setActiveSection }) => {
  const scrollToWomen = (e) => {
    e.preventDefault();
    setActiveSection('women');
    const element = document.getElementById('women');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleBooking = () => {
    const message = "Hi Sri Sai Amrutha Salon and beauty solutions, I am visiting your website and want to book an appointment. Please share available timings.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="home" className="hero">
      {/* Translucent Watermark Logo Background */}
      <div className="watermark-logo-bg" />

      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hero-content"
          >
            <div className="hero-subtitle">
              <Sparkles size={12} style={{ color: 'var(--champagne-gold)', marginRight: '6px' }} />
              Luxury Minimal Spa Aesthetic
            </div>

            <h1 className="hero-title">
              Elevate Your <br />
              <span>Everyday Beauty</span> & <br />
              Luxury Self-Care
            </h1>

            <p className="hero-description">
              Welcome to Sri Sai Amrutha Salon and beauty solutions, the ultimate luxury sanctuary in Vanasthalipuram, Hyderabad. 
              We blend advanced skin therapies, bespoke hair styling, premium chrome nail arts, 
              and luxury spa procedures into a signature serene experience.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleBooking}>
                <Calendar size={13} style={{ marginRight: '8px' }} />
                Book Appointment
              </button>
              <button className="btn btn-secondary" onClick={scrollToWomen}>
                Our Services
              </button>
            </div>
          </motion.div>

          {/* Hero Right Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="hero-visual"
          >
            {/* Elegant Champagne Gold Framing */}
            <div className="gold-frame-accent"></div>

            {/* Premium Asymmetric Salon Photo Container */}
            <div className="main-image-container">
              <img
                src={salonInterior}
                alt="Sri Sai Amrutha Salon and beauty solutions Luxury Interior"
                loading="eager"
              />
            </div>

            {/* Experience Highlight Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
              className="floating-accent-box"
            >
              <h3>12+</h3>
              <p>Years of Luxury Styling</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
