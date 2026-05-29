import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER } from '../data/servicesData';

const FloatingWA = () => {
  const handleWAOpen = () => {
    const message = "Hi Sri Sai Amrutha Salon and beauty solutions, I am visiting your website and want to book an appointment. Please share available timings.";
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0 10px 25px rgba(37, 211, 102, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      onClick={handleWAOpen}
      className="floating-wa-btn"
      title="Chat & Book on WhatsApp"
      aria-label="Chat and Book on WhatsApp"
    >
      <MessageCircle size={26} fill="white" />
    </motion.div>
  );
};

export default FloatingWA;
