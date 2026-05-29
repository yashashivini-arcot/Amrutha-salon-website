import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactMap = () => {
  const contactDetails = [
    {
      icon: <MapPin size={20} />,
      title: "Our Sanctuary Location",
      desc: (
        <a 
          href="https://maps.app.goo.gl/EsPE1CnWYNGZhhYh8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-map-link"
          style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s ease' }}
          onMouseEnter={(e) => e.target.style.color = 'var(--champagne-gold)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
        >
          1st Floor, Sri Sai Amrutha Salon & Beauty Solutions, Above Wow Colors Saree Store, Eseva Road, Beside Red Water Tank, Sachivalaya Nagar, Vanasthalipuram, Hyderabad - 500070
        </a>
      )
    },
    {
      icon: <Phone size={20} />,
      title: "Call for Reservations",
      desc: "+91 88850 87999 / +91 85005 75599"
    }
  ];

  const operatingHours = [
    { day: "Monday", hours: "9:00 AM - 9:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 9:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 9:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 9:00 PM" },
    { day: "Friday", hours: "9:00 AM - 9:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 9:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 9:00 PM" }
  ];

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-pure)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span>Find Us</span>
          <h2>Location & Hours</h2>
          <p>
            Visit us for your custom beauty rituals or walk in to consult on our premium grooming and nail therapies. 
            We are conveniently located at Sachivalaya Nagar, Vanasthalipuram, Hyderabad.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          {/* Left Column: Details & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-info-card"
          >
            <div>
              <h3 style={{ fontSize: '24px', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>Contact Sri Sai Amrutha</h3>
              <div className="contact-details">
                {contactDetails.map((detail, idx) => (
                  <div key={idx} className="contact-item">
                    <div className="contact-icon-wrapper">
                      {detail.icon}
                    </div>
                    <div className="contact-item-text">
                      <h4>{detail.title}</h4>
                      <div>{detail.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Operating Hours Table */}
            <div>
              <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--champagne-gold-hover)', marginBottom: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={14} />
                Operating Hours
              </h4>
              <table className="hours-table">
                <tbody>
                  {operatingHours.map((row, idx) => (
                    <tr key={idx}>
                      <td className="hours-day">{row.day}</td>
                      <td className="hours-time">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', height: '100%', minHeight: '460px' }}
          >
            <div className="map-wrapper" style={{ flexGrow: 1, position: 'relative', minHeight: '400px' }}>
              {/* Center-mapped exactly on the Sachivalaya Nagar salon location */}
              <iframe
                title="Sri Sai Amrutha Salon and beauty solutions Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.825828551404!2d78.5630652!3d17.3241088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba11f751e49dd%3A0xa9e143938d8441ed!2sAmrutha%20salon%20%26%20beauty%20solutions!5e0!3m2!1sen!2sin!4v1716616000000!5m2!1sen!2sin"
                className="map-frame"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ width: '100%', height: '100%', border: 'none', minHeight: '400px' }}
              ></iframe>
            </div>

            <a
              href="https://maps.app.goo.gl/EsPE1CnWYNGZhhYh8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                width: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '16px 28px',
                fontSize: '13px',
                fontWeight: '600',
                background: 'linear-gradient(135deg, var(--primary-teal) 0%, var(--primary-teal-hover) 100%)',
                color: 'var(--bg-pure)',
                boxShadow: 'var(--shadow-premium)',
                transition: 'var(--transition-luxury)',
                border: '1px solid var(--border-light)'
              }}
            >
              <MapPin size={16} />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
