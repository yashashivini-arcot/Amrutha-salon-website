import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import NailStudio from './components/NailStudio';
import OtherTreatments from './components/OtherTreatments';
import NailPromotionalBanner from './components/NailPromotionalBanner';
import BannerCarousel from './components/BannerCarousel';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import ContactMap from './components/ContactMap';
import FloatingWA from './components/FloatingWA';
import FloatingIG from './components/FloatingIG';
import { Phone, MapPin, Clock } from 'lucide-react';
import logoImg from './assets/logo.webp';
import './App.css';

// Custom inline SVG icons for Instagram and Facebook to bypass Lucide package export mismatches
const Instagram = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);


function App() {
  const [activeSection, setActiveSection] = useState('women');

  // Monitor scroll using Intersection Observer to dynamically highlight navbar links
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Triggers when the section takes up the middle part of the screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {/* Dynamic Sticky Header */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Block */}
        <Hero setActiveSection={setActiveSection} />

        {/* Dynamic Smooth Looping Offers Carousel */}
        <BannerCarousel />

        {/* Featured promotional banner for Nail Studio */}
        <NailPromotionalBanner />

        {/* 2. Services Block (includes Women at #women and Men at #men sequential sections) */}
        <Services />

        {/* 3. Dedicated stand-alone Nail Studio Section (#nail-studio) */}
        <NailStudio />

        {/* 4. Other Treatments Aesthetic Clinical Block (#other-treatments) */}
        <OtherTreatments />

        {/* 6. Visual Portfolio & Mock Insta Block */}
        <Gallery />

        {/* 6.5. Verified Guest Reviews Section */}
        <Reviews />

        {/* 7. Contact Info & Interactive Maps Block */}
        <ContactMap />
      </main>

      {/* 8. Elegant Sticky WhatsApp & Instagram Widgets */}
      <FloatingWA />
      <FloatingIG />

      {/* 9. Premium Editorial Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* About Column */}
            <div className="footer-about">
              <div className="logo-footer-container" style={{ marginBottom: '20px' }}>
                <img src={logoImg} alt="Sri Sai Amrutha Salon and beauty solutions Logo" className="logo-img-footer" />
              </div>
              <p>
                Experience a sensory journey of beauty, wellness, and self-care. 
                Sri Sai Amrutha Salon and beauty solutions is Vanasthalipuram's premier destination for luxury styling, 
                elite manicures, and medical-grade aesthetic skin procedures.
              </p>
              <div className="footer-social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Instagram">
                  <Instagram size={15} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Facebook">
                  <Facebook size={15} />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <span className="footer-title">Salon Sections</span>
              <ul className="footer-links">
                <li><a href="#women">Women</a></li>
                <li><a href="#men">Men</a></li>
                <li><a href="#nail-studio">Nail Studio</a></li>
                <li><a href="#other-treatments">Other Treatments</a></li>
                <li><a href="#gallery">Work Portfolio</a></li>
                <li><a href="#contact">Location Map</a></li>
              </ul>
            </div>

            {/* Quick Contact Column */}
            <div>
              <span className="footer-title">Studio Info</span>
              <ul className="footer-links" style={{ color: 'rgba(250, 249, 246, 0.65)', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <MapPin size={16} style={{ color: 'var(--champagne-gold)', flexShrink: 0, marginTop: '2px' }} />
                  <a 
                    href="https://maps.app.goo.gl/EsPE1CnWYNGZhhYh8"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    1st Floor, Above Wow Colors Saree Store, Eseva Road, Beside Red Water Tank, Sachivalaya Nagar, Vanasthalipuram, Hyderabad - 500070
                  </a>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Phone size={16} style={{ color: 'var(--champagne-gold)', flexShrink: 0 }} />
                  <span>+91 88850 87999 / +91 85005 75599</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Clock size={16} style={{ color: 'var(--champagne-gold)', flexShrink: 0 }} />
                  <span>Open Daily: 9:00 AM - 9:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Sri Sai Amrutha Salon and beauty solutions. All Rights Reserved.</p>
            <p>Designed with Luxury Minimal Spa Aesthetic</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
