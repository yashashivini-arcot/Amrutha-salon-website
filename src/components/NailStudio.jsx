import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Heart, ShieldCheck, Gem, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { nailServices, WHATSAPP_NUMBER } from '../data/servicesData';

const NailStudio = () => {
  const [activeSubCategory, setActiveSubCategory] = useState('Gel Polish');
  const scrollContainerRef = useRef(null);

  // Group items by subcategory
  const subCategories = ["Gel Polish", "Acrylic Extensions", "Nail Art", "Premium Nail Designs"];

  const handleBooking = (service) => {
    const message = `Hi, I would like to book a luxury session for ${service.title} at Sri Sai Amrutha Salon and beauty solutions. Please share available timings.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleGeneralBooking = () => {
    const message = "Hi Sri Sai Amrutha Salon and beauty solutions, I am visiting your website and want to book a nail appointment. Please share available timings.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  // Scroll horizontal deck
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      const newScrollLeft = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="nail-studio" className="section nail-studio-luxury-section">
      {/* Translucent Watermark Logo Background */}
      <div className="watermark-logo-bg" />

      <div className="container">
        {/* Section Header */}
        <div className="nail-studio-header">
          <div className="nail-header-left">
            <div className="premium-badge-lavender">
              <Sparkles size={12} style={{ marginRight: '6px' }} />
              Signature Attraction
            </div>
            <h2>Sri Sai Amrutha Nail Studio</h2>
            <p>
              Step into Hyderabad's premier glossy sanctuary. We deliver autoclave-sterilized safety, non-toxic luxury European gels, and custom-sculpted artisan acrylic extensions.
            </p>
          </div>
          
          {/* Scroll Control Arrows for Desktop */}
          <div className="deck-scroll-controls">
            <button className="scroll-arrow-btn" onClick={() => scroll('left')} aria-label="Scroll left">
              <ArrowLeft size={16} />
            </button>
            <button className="scroll-arrow-btn" onClick={() => scroll('right')} aria-label="Scroll right">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Glossy Subcategory Pill Switcher */}
        <div className="nail-tab-container">
          {subCategories.map((subCat) => (
            <button
              key={subCat}
              className={`nail-tab-btn-pill ${activeSubCategory === subCat ? 'active' : ''}`}
              onClick={() => setActiveSubCategory(subCat)}
            >
              {activeSubCategory === subCat && (
                <motion.div 
                  layoutId="active-nail-pill" 
                  className="nail-pill-bg-indicator"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
              <span className="nail-pill-text">{subCat}</span>
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Cards Deck */}
        <div 
          className="nail-deck-scroll-outer"
          ref={scrollContainerRef}
        >
          <motion.div 
            layout 
            className="nail-deck-scroll-inner"
          >
            <AnimatePresence mode="popLayout">
              {nailServices.items
                .filter((item) => item.subCategory === activeSubCategory)
                .map((item) => (
                  <motion.div 
                    key={item.id} 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`nail-glossy-card ${item.subCategory === 'Premium Nail Designs' ? 'featured-luxe' : ''}`}
                  >
                    <div className="nail-card-image-block">
                      {item.tag && <span className="nail-card-badge-glow">{item.tag}</span>}
                      <img src={item.image} alt={item.title} />
                      <div className="glass-reflection-sweep" />
                    </div>
                    
                    <div className="nail-card-body-block">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      
                      <div className="nail-card-footer-block">
                        <div className="price-tag">
                          <span className="currency">₹</span>
                          <span className="value">{item.price}</span>
                        </div>
                        <button 
                          className="btn btn-primary nail-booking-btn"
                          onClick={() => handleBooking(item)}
                        >
                          Book Now
                          <ArrowRight size={12} style={{ marginLeft: '6px' }} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Editorial Features Block */}
        <div className="nail-editorial-features">
          <div className="nail-feat-column">
            <div className="nail-feat-icon-circle">
              <Gem size={18} />
            </div>
            <h4>Handcrafted Artistry</h4>
            <p>From custom 3D details to minimal chrome shifting, our master artists paint with patient, elite precision.</p>
          </div>
          
          <div className="nail-feat-column">
            <div className="nail-feat-icon-circle">
              <ShieldCheck size={18} />
            </div>
            <h4>Medical-Grade Hygiene</h4>
            <p>Strict autoclave sterilization protocols, disposable tools, and spotless wellness-focused safety standards.</p>
          </div>
          
          <div className="nail-feat-column">
            <div className="nail-feat-icon-circle">
              <Heart size={18} />
            </div>
            <h4>Premium Formulations</h4>
            <p>Eco-friendly, non-toxic luxury European gel coatings that protect, nourish, and preserve your natural nails.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NailStudio;
