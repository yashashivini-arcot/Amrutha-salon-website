import React from 'react';
import { motion } from 'framer-motion';

// Custom inline SVG for Instagram to match premium styling and bypass package exports
const InstagramIcon = ({ size = 24, ...props }) => (
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

const FloatingIG = () => {
  const handleIGOpen = () => {
    window.open("https://www.instagram.com/amrutha_saloon?igsh=MWQzbXpra2JzdmV3YQ==", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.15, rotate: -5, boxShadow: "0 10px 25px rgba(220, 39, 67, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      onClick={handleIGOpen}
      className="floating-ig-btn"
      title="Follow us on Instagram"
      aria-label="Follow us on Instagram"
    >
      <InstagramIcon size={26} stroke="white" />
    </motion.div>
  );
};

export default FloatingIG;
