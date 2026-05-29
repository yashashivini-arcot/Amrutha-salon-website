import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, HeartHandshake } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/servicesData';
import pmuImg from '../assets/pmu services.jpeg';
import laserClinicImg from '../assets/laser clinic.jpeg';

const OtherTreatments = () => {
  const treatments = [
    {
      title: "PMU Services (Permanent Make-Up)",
      description: "Define your geometry and restore facial symmetry with semi-permanent pigments formulated for a lasting, organic glow.",
      features: [
        "Permanent Eyebrows (Microblading & 3D)",
        "Permanent Lip Colour Tinting",
        "BB Glow Makeup Therapy",
        "Scalp Coverage & Beard Density Restoration"
      ],
      price: "₹3,499 onwards",
      badge: "Cosmetic Pigment",
      bgImage: pmuImg,
      objectPosition: "center 75%",
      whatsappType: "PMU Services Consultation"
    },
    {
      title: "Laser Clinic & Skin Corrections",
      description: "Medical-grade laser treatments targeting permanent body hair reduction and professional skin growth removals.",
      features: [
        "Laser Hair Reduction starting at ₹1,500/session",
        "Skin Tags Removal & Clearance",
        "Moles & Warts Removal Available",
        "Certified clinical safe procedures"
      ],
      price: "₹1,500 onwards",
      badge: "Laser Clinic",
      bgImage: laserClinicImg,
      objectPosition: "center",
      whatsappType: "Laser & Skin Corrections Consultation"
    }
  ];

  const handleBooking = (type) => {
    let message = "";
    if (type.toLowerCase().includes('pmu')) {
      message = "Hi, I would like to enquire about PMU Services (Permanent Eyebrows, Lips, BB Glow, or Scalp/Beard density coverage). Please share available timings.";
    } else {
      message = "Hi, I would like to book a consultation for Laser Hair Reduction or Skin Tags/Mole/Wart Removal. Please share available timings.";
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="other-treatments" className="section" style={{ backgroundColor: 'var(--bg-pure)' }}>
      {/* Translucent Watermark Logo Background */}
      <div className="watermark-logo-bg" />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span>Clinical & Cosmetic Artistry</span>
          <h2>Other Treatments</h2>
          <p>
            Where scientific beauty meets cosmetic precision. We provide clean, safe, and elite certified aesthetic procedures.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="treatments-custom-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', maxWidth: '1000px', margin: '0 auto' }}>
          {treatments.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="treatment-highlight-card"
            >
              {/* Header Image Block */}
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={t.bgImage}
                  alt={t.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: t.objectPosition || 'center' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  zIndex: 10
                }}>
                  <span className="badge-gold" style={{ background: 'var(--primary-teal)', color: 'var(--bg-pure)' }}>
                    {t.badge}
                  </span>
                </div>
              </div>

              {/* Text Block */}
              <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '24px', color: 'var(--text-main)', marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>
                  {t.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
                  {t.description}
                </p>

                {/* Features List */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px', flexGrow: 1 }}>
                  {t.features.map((feat, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: 'var(--text-main)' }}>
                      <Sparkles size={12} style={{ color: 'var(--champagne-gold)', flexShrink: 0 }} />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Footer details */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '20px',
                  marginTop: 'auto',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  <div>
                    <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-secondary)', display: 'block', letterSpacing: '0.05em' }}>Price Guide</span>
                    <span style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-main)' }}>{t.price}</span>
                  </div>

                  <button
                    className="btn btn-primary"
                    style={{ padding: '10px 20px', fontSize: '12px' }}
                    onClick={() => handleBooking(t.title)}
                  >
                    Consult via WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safety Badges Block */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '30px',
          marginTop: '60px',
          padding: '24px',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
          maxWidth: '1000px',
          margin: '60px auto 0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Shield size={20} style={{ color: 'var(--primary-teal)' }} />
            <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-main)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Certified Sterile Safety
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Sparkles size={20} style={{ color: 'var(--primary-teal)' }} />
            <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-main)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Advanced Aesthetic Laser Technology
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <HeartHandshake size={20} style={{ color: 'var(--primary-teal)' }} />
            <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-main)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Complete Clinical Aftercare
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherTreatments;
