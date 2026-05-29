import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.webp';
import { WHATSAPP_NUMBER } from '../data/servicesData';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll to update header styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'women', label: 'Women' },
    { id: 'men', label: 'Men' },
    { id: 'nail-studio', label: 'Nail Studio' },
    { id: 'other-treatments', label: 'Other Treatments' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
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

  const openWhatsAppGeneral = () => {
    const message = "Hi Sri Sai Amrutha Salon and beauty solutions, I am visiting your website and want to book an appointment. Please share available timings.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'glass scrolled' : 'top'}`}>
        <div className="container nav-container">
          {/* Elegant Logo Image */}
          <a href="#women" className="logo-brand-container" onClick={(e) => handleLinkClick(e, 'women')}>
            <img src={logoImg} alt="Sri Sai Amrutha Salon and beauty solutions Logo" className="logo-img" />
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links nav-links-desktop">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Call To Action */}
          <div className="nav-actions nav-actions-desktop">
            <button className="btn btn-gold btn-gold-nav" onClick={openWhatsAppGeneral}>
              <Phone size={13} style={{ marginRight: '8px' }} />
              Book Now
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mobile-drawer"
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                     href={`#${link.id}`}
                     className="mobile-nav-link"
                     onClick={(e) => handleLinkClick(e, link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <div className="mobile-drawer-info">
                <p style={{ color: 'var(--text-main)', fontWeight: '600', marginBottom: '4px' }}>Sri Sai Amrutha Salon and beauty solutions</p>
                <p style={{ color: 'var(--text-secondary)' }}>Vanasthalipuram, Hyderabad</p>
              </div>
              <button
                className="btn btn-primary"
                style={{ width: '100%', display: 'flex', gap: '8px' }}
                onClick={openWhatsAppGeneral}
              >
                <Phone size={14} />
                WhatsApp Booking
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
