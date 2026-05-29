import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { galleryItems } from '../data/servicesData';

// Offline-safe local fallback assets
import hairFallback from '../assets/bridal-makeover.webp';
import nailsFallback from '../assets/gel-french-polish.webp';
import interiorFallback from '../assets/salon-mirrors.webp';
import groomingFallback from '../assets/salon-interior.webp';
import treatmentsFallback from '../assets/brows.webp';

// Custom inline SVG icon for Instagram to bypass Lucide package export mismatches
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


const Gallery = () => {
  const [filter, setFilter] = useState('All');

  // Filter categories structured as requested
  const filters = ['All', 'Hair', 'Nail Art', 'Salon Interiors', 'Treatments'];

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="section" style={{ backgroundColor: 'var(--bg-ivory)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span>Visual Portfolio</span>
          <h2>Our Work Gallery</h2>
          <p>
            Browse through our portfolio of elegant nail sets, advanced skincare rituals, and premium hair transformations.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="gallery-filter-bar">
          {filters.map((f, i) => (
            <button
              key={i}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Dynamic Gallery Grid */}
        <motion.div layout className="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="gallery-item"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite error loops
                    if (item.category === 'Nail Art') {
                      e.target.src = nailsFallback;
                    } else if (item.category === 'Salon Interiors') {
                      e.target.src = interiorFallback;
                    } else if (item.category === 'Grooming') {
                      e.target.src = groomingFallback;
                    } else if (item.category === 'Treatments') {
                      e.target.src = treatmentsFallback;
                    } else {
                      e.target.src = hairFallback;
                    }
                  }}
                />
                <div className="gallery-overlay">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Curated Instagram Block (Minimalist & Cleaned) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="insta-mockup-block"
          style={{ maxWidth: '600px', margin: '0 auto', padding: '30px' }}
        >
          <Instagram size={28} style={{ color: 'var(--champagne-gold)', marginBottom: '16px' }} />
          <h3>Find Us on Instagram</h3>
          <a
            href="https://www.instagram.com/amrutha_saloon?igsh=MWQzbXpra2JzdmV3YQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="insta-handle"
            style={{ marginBottom: 0 }}
          >
            @amrutha_saloon <ArrowUpRight size={14} style={{ display: 'inline', marginLeft: '4px' }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
