import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Star, ArrowRight, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { womenServices, menServices, WHATSAPP_NUMBER } from '../data/servicesData';

const Services = () => {
  const [expandedWomenCategory, setExpandedWomenCategory] = useState(null);
  const [expandedMenCategory, setExpandedMenCategory] = useState(null);

  // Dynamic booking redirect to WhatsApp with prefilled, URL-safe details
  const handleBooking = (service, gender) => {
    let message = "";
    
    if (gender === 'women') {
      message = `Hi, I would like to book a ${service.title} appointment from the Women's Services menu. Please share available timings.`;
    } else {
      message = `Hi, I would like to book a Gentlemen's ${service.title} appointment from the Men's Services menu. Please share available timings.`;
    }

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  };

  const handleWomenToggle = (categoryName) => {
    if (expandedWomenCategory === categoryName) {
      setExpandedWomenCategory(null);
    } else {
      setExpandedWomenCategory(categoryName);
    }
  };

  const handleMenToggle = (categoryName) => {
    if (expandedMenCategory === categoryName) {
      setExpandedMenCategory(null);
    } else {
      setExpandedMenCategory(categoryName);
    }
  };

  return (
    <>
      {/* ==================== 1. WOMEN'S SERVICES SECTION ==================== */}
      <section 
        id="women" 
        className="section services-section-wrapper theme-women-lilac"
        style={{ transition: 'background-color 0.5s ease', borderBottom: '1px solid var(--border-light)' }}
      >
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <span>Curated Beauty & Styling Menu</span>
            <h2>Women</h2>
            <p>
              Experience pure sensory indulgence. Flawless haircuts, ammonia-free coloring, rejuvenating skin procedures, and personalized bridal packages.
            </p>
          </div>

          {/* Women Categories Accordions */}
          <div className="accordions-container">
            <h3 className="menu-group-title">Luxury Treatment Categories</h3>
            {womenServices.map((cat) => {
              const isOpen = expandedWomenCategory === cat.category;
              return (
                <div key={cat.category} className={`accordion-panel ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="accordion-header" 
                    onClick={() => handleWomenToggle(cat.category)}
                    aria-expanded={isOpen}
                  >
                    <div className="accordion-header-left">
                      <Sparkles size={14} className="accordion-icon" />
                      <h3>{cat.category}</h3>
                    </div>
                    <div className="accordion-header-right">
                      <span className="items-count">{cat.items.length} Procedures</span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="accordion-content"
                      >
                        <p className="accordion-category-desc">{cat.description}</p>
                        <div className="services-grid">
                          {cat.items.map((service) => (
                            <div key={service.id} className="service-card">
                              <div className="card-content">
                                <div className="card-meta">
                                  <span>
                                    <Clock size={12} style={{ marginRight: '4px' }} />
                                    {service.duration || "40 Mins"}
                                  </span>
                                  <span>
                                    <Star size={12} fill="var(--champagne-gold)" style={{ color: 'var(--champagne-gold)', marginRight: '4px' }} />
                                    {service.rating || "4.9"}
                                  </span>
                                </div>
                                
                                <h3 className="card-title">
                                  {service.title}
                                  {service.tag && <span className="card-tag-badge">{service.tag}</span>}
                                </h3>
                                <p className="card-desc">{service.description}</p>
                                
                                <div className="card-footer">
                                  <span className="card-price">{service.price}</span>
                                  <button
                                    className="btn btn-primary card-btn"
                                    onClick={() => handleBooking(service, 'women')}
                                  >
                                    Book Now
                                    <ArrowRight size={11} style={{ marginLeft: '6px' }} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== 2. MEN'S SERVICES SECTION ==================== */}
      <section 
        id="men" 
        className="section services-section-wrapper theme-men-teal"
        style={{ transition: 'background-color 0.5s ease', borderBottom: '1px solid var(--border-light)' }}
      >
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <span>Sartorial Grooming & Styling Menu</span>
            <h2>Men</h2>
            <p>
              Elite haircuts, precision beard sculpts, premium treatments, and refreshing skin therapies crafted for the modern gentleman.
            </p>
          </div>

          {/* Men Categories Accordions */}
          <div className="accordions-container">
            <h3 className="menu-group-title">Premium Gentlemen Grooming</h3>
            {menServices.map((cat) => {
              const isOpen = expandedMenCategory === cat.category;
              return (
                <div key={cat.category} className={`accordion-panel ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="accordion-header" 
                    onClick={() => handleMenToggle(cat.category)}
                    aria-expanded={isOpen}
                  >
                    <div className="accordion-header-left">
                      <Sparkles size={14} className="accordion-icon" />
                      <h3>{cat.category}</h3>
                    </div>
                    <div className="accordion-header-right">
                      <span className="items-count">{cat.items.length} Services</span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="accordion-content"
                      >
                        <p className="accordion-category-desc">{cat.description}</p>
                        <div className="services-grid">
                          {cat.items.map((service) => (
                            <div key={service.id} className="service-card">
                              <div className="card-content">
                                <div className="card-meta">
                                  <span>
                                    <Clock size={12} style={{ marginRight: '4px' }} />
                                    {service.duration || "40 Mins"}
                                  </span>
                                  <span>
                                    <Star size={12} fill="var(--champagne-gold)" style={{ color: 'var(--champagne-gold)', marginRight: '4px' }} />
                                    {service.rating || "4.9"}
                                  </span>
                                </div>
                                
                                <h3 className="card-title">
                                  {service.title}
                                  {service.tag && <span className="card-tag-badge">{service.tag}</span>}
                                </h3>
                                <p className="card-desc">{service.description}</p>
                                
                                <div className="card-footer">
                                  <span className="card-price">{service.price}</span>
                                  <button
                                    className="btn btn-primary card-btn"
                                    onClick={() => handleBooking(service, 'men')}
                                  >
                                    Book Now
                                    <ArrowRight size={11} style={{ marginLeft: '6px' }} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
