import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/servicesData';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span>Client Love</span>
          <h2>Spa Testimonials</h2>
          <p>
            Read what our esteemed patrons have to say about their relaxing beauty experiences at Amrutha Salon & Tattoos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="testimonial-card"
            >
              {/* Quotation Icon overlay */}
              <Quote className="quote-icon" size={40} />

              {/* Gold Stars */}
              <div className="stars">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--champagne-gold)" style={{ color: 'var(--champagne-gold)' }} />
                ))}
              </div>

              {/* Quote text */}
              <p className="quote-text">
                "{test.quote}"
              </p>

              {/* Author Info */}
              <div className="author-block">
                <div className="author-avatar">
                  {test.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="author-name">{test.author}</h4>
                  <span className="author-role">{test.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
