import React from 'react';
import { Calendar } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/servicesData';

const NailPromotionalBanner = () => {
  const handleGeneralBooking = () => {
    const message = "Hi Sri Sai Amrutha Salon and beauty solutions, I am visiting your website and want to book a nail appointment. Please share available timings.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="nail-promotional-banner-section" style={{ backgroundColor: 'var(--bg-ivory)', padding: '50px 0 20px', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="nail-cta-wrapper" style={{ margin: '0 auto' }}>
          <div className="nail-cta-text">
            <h3>Indulge in Flawless Fingertips Today</h3>
            <p>Reservations are highly recommended. Let our artists craft custom nail masterpieces tailored to your style.</p>
          </div>
          <button className="btn btn-gold btn-gold-cta" onClick={handleGeneralBooking}>
            <Calendar size={14} style={{ marginRight: '8px' }} />
            Book Nail Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default NailPromotionalBanner;
