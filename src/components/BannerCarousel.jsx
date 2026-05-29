import React from 'react';
import { motion } from 'framer-motion';

import salonBanner from '../assets/salon-banner.webp';
import offerBanner from '../assets/offer-banner.webp';
import skincareBanner from '../assets/skincare-banner.webp';
import nailsOffer from '../assets/nails-offer.webp';
import eyesOffer from '../assets/eyes-offer.webp';
import lashesOffer from '../assets/lashes-offer.webp';
import kidsOffer from '../assets/kids-haircut-offer.webp';

const BannerCarousel = () => {
  const banners = [
    { id: 1, img: salonBanner, alt: "Sri Sai Amrutha Salon and beauty solutions Luxury Experience" },
    { id: 2, img: offerBanner, alt: "Exclusive Rebranding Special Offers" },
    { id: 3, img: skincareBanner, alt: "Premium Skincare Aesthetic Laser Clinic" },
    { id: 4, img: nailsOffer, alt: "Artisan Gel Polish & Extensions Special" },
    { id: 5, img: eyesOffer, alt: "Beauty Lash & Eyebrow Shaping Offers" },
    { id: 6, img: lashesOffer, alt: "Luxury Eye Lashes Extensions Special" },
    { id: 7, img: kidsOffer, alt: "Junior Styling Gentlemen haircuts offer" }
  ];

  // Duplicate array to achieve a completely seamless infinite scroll cycle
  const duplicatedBanners = [...banners, ...banners, ...banners];

  return (
    <section className="banner-carousel-section" style={{ padding: '60px 0 20px', overflow: 'hidden', position: 'relative', backgroundColor: 'var(--bg-ivory)' }}>
      <div className="container">
        {/* Carousel Header */}
        <div className="section-header" style={{ marginBottom: '35px' }}>
          <span>Exquisite Offers</span>
          <h2>Exclusive Promotions</h2>
        </div>
      </div>
      
      {/* Infinite scrolling track container */}
      <div className="marquee-container">
        {/* Soft edge luxury gradient overlays */}
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />

        <motion.div 
          className="marquee-track"
          animate={{ x: [0, -2870] }} // 7 items * 410px width each = 2870px displacement for seamless loop
          transition={{
            ease: "linear",
            duration: 35, // Relaxed speed for luxury ambient feel
            repeat: Infinity,
          }}
          style={{ display: 'flex', gap: '30px', width: 'max-content' }}
        >
          {duplicatedBanners.map((banner, idx) => (
            <div 
              key={`${banner.id}-${idx}`} 
              className="banner-card-glow"
              style={{
                width: '380px',
                height: '220px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(13, 110, 110, 0.03)',
                flexShrink: 0,
                backgroundColor: 'var(--bg-pure)',
                position: 'relative'
              }}
            >
              <img 
                src={banner.img} 
                alt={banner.alt} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.3, 1)' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BannerCarousel;
