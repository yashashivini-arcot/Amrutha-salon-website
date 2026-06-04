import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, MessageCircle, ArrowRight, ClipboardList } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/servicesData';
import './BookingCart.css';

const BookingCart = ({ selectedServices, onRemoveService, onClearAll }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (selectedServices.length === 0) return null;

  // Group services by section for structured listing in the cart
  const groupedServices = selectedServices.reduce((groups, service) => {
    const section = service.section || 'General';
    if (!groups[section]) {
      groups[section] = [];
    }
    groups[section].push(service);
    return groups;
  }, {});

  // Generate WhatsApp message and redirect URL
  const handleProceedToWhatsApp = () => {
    const serviceListText = selectedServices
      .map(service => `• ${service.title} (${service.section || 'Service'})`)
      .join('\n');

    const message = `Hello Amrutha Salon,

I would like to book the following services:

${serviceListText}

Please let me know the available appointment slots.

Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* 1. Elegant Sticky Floating Bottom Bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="floating-cart-bar-wrapper"
      >
        <div className="floating-cart-bar container" onClick={() => setIsOpen(true)}>
          <div className="cart-bar-left">
            <div className="cart-badge-count">
              <ClipboardList size={18} />
              <span>{selectedServices.length}</span>
            </div>
            <div className="cart-bar-text">
              <span className="cart-bar-title">{selectedServices.length === 1 ? '1 Service' : `${selectedServices.length} Services`} Selected</span>
              <span className="cart-bar-subtitle">Tap to review & book</span>
            </div>
          </div>
          
          <button className="btn btn-primary cart-bar-btn">
            View Booking Selection
            <ArrowRight size={14} style={{ marginLeft: '8px' }} />
          </button>
        </div>
      </motion.div>

      {/* 2. Selection Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="cart-backdrop"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%', y: 0 }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="cart-drawer-panel"
            >
              {/* Drawer Header */}
              <div className="cart-drawer-header">
                <div>
                  <h3>Your Selection</h3>
                  <p className="cart-drawer-count">{selectedServices.length} {selectedServices.length === 1 ? 'service' : 'services'} added</p>
                </div>
                <button className="cart-close-btn" onClick={() => setIsOpen(false)} aria-label="Close panel">
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Body (Scrollable List) */}
              <div className="cart-drawer-body">
                {Object.keys(groupedServices).map((section) => (
                  <div key={section} className="cart-section-group">
                    <h4 className="cart-section-title">{section}</h4>
                    <div className="cart-items-list">
                      {groupedServices[section].map((service) => (
                        <div key={service.id} className="cart-item-row">
                          <div className="cart-item-info">
                            <h5>{service.title}</h5>
                            <span className="cart-item-category">{service.category}</span>
                          </div>
                          
                          <div className="cart-item-actions">
                            <span className="cart-item-price">
                              {service.price ? (service.price.toString().includes('₹') || service.price.toString().includes('onwards') ? service.price : `₹${service.price}`) : 'Price Guide'}
                            </span>
                            <button
                              className="cart-item-remove-btn"
                              onClick={() => onRemoveService(service)}
                              title={`Remove ${service.title}`}
                              aria-label={`Remove ${service.title}`}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="cart-drawer-footer">
                <div className="cart-footer-actions">
                  <button className="cart-clear-btn" onClick={onClearAll}>
                    Clear Selection
                  </button>
                </div>
                
                <button className="btn btn-primary cart-checkout-btn" onClick={handleProceedToWhatsApp}>
                  <MessageCircle size={16} style={{ marginRight: '8px' }} />
                  Proceed to WhatsApp
                </button>
                <p className="cart-checkout-disclaimer">
                  Clicking will open WhatsApp to request availability for your selected services.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookingCart;
