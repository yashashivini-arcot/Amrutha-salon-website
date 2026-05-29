import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, Plus, CheckCircle, Clock } from 'lucide-react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Load reviews from localStorage on mount
  useEffect(() => {
    const savedReviews = localStorage.getItem('amrutha_salon_client_reviews');
    if (savedReviews) {
      try {
        setReviews(JSON.parse(savedReviews));
      } catch (e) {
        console.error("Failed to parse saved reviews", e);
      }
    }
  }, []);

  // Save reviews to localStorage
  const saveReviews = (updatedReviews) => {
    localStorage.setItem('amrutha_salon_client_reviews', JSON.stringify(updatedReviews));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      alert("Please fill in both your name and review comment.");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      rating: rating,
      text: comment.trim(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    saveReviews(updatedReviews);

    // Reset Form
    setName('');
    setComment('');
    setRating(5);
    setSubmitSuccess(true);
    
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsFormOpen(false);
    }, 2000);
  };

  const handleDeleteReview = (id) => {
    const updated = reviews.filter(r => r.id !== id);
    setReviews(updated);
    saveReviews(updated);
  };

  return (
    <section id="reviews" className="section" style={{ backgroundColor: 'var(--bg-pure)', position: 'relative', borderBottom: '1px solid var(--border-light)' }}>
      {/* Translucent Watermark Background */}
      <div className="watermark-logo-bg" style={{ opacity: 0.02 }} />

      <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="premium-badge-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
            <MessageSquare size={10} />
            Guest Reflections
          </span>
          <h2 style={{ fontSize: '44px', fontFamily: 'var(--font-serif)', color: 'var(--text-main)', marginBottom: '16px', lineHeight: '1.2' }}>
            Client Feedback
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', margin: '0 auto', maxWidth: '600px' }}>
            We invite you to share your experience with our beauty, styling, or nail treatments. Your honest review helps us maintain our premium standards.
          </p>
        </div>

        {/* Action Header & Tally */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--border-light)',
          paddingBottom: '20px',
          marginBottom: '30px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <span style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-main)', fontFamily: 'var(--font-serif)' }}>
              Guest Feedback ({reviews.length})
            </span>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => setIsFormOpen(!isFormOpen)}
            style={{
              padding: '10px 20px',
              fontSize: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: isFormOpen ? 'var(--text-main)' : 'var(--primary-teal)'
            }}
          >
            <Plus size={14} style={{ transform: isFormOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s ease' }} />
            {isFormOpen ? 'Close Form' : 'Write a Review'}
          </button>
        </div>

        {/* Animated Feedback Form */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{ overflow: 'hidden', marginBottom: '40px' }}
            >
              <form 
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--bg-ivory)',
                  border: '1px solid var(--border-gold)',
                  padding: '30px',
                  boxShadow: 'var(--shadow-premium)'
                }}
              >
                {submitSuccess ? (
                  <div style={{ textAlign: 'center', padding: '20px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={44} style={{ color: 'var(--primary-teal)' }} />
                    <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--text-main)', margin: 0 }}>Review Submitted Successfully</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', margin: 0 }}>Thank you for sharing your experience at Sri Sai Amrutha.</p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--text-main)', margin: '0 0 4px 0' }}>Share Your Experience</h3>
                    
                    {/* Name Input */}
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)', fontWeight: '600', marginBottom: '8px' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Anjali Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                        style={{ background: 'var(--bg-pure)' }}
                      />
                    </div>

                    {/* Star Rating Selector */}
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)', fontWeight: '600', marginBottom: '8px' }}>
                        Rating
                      </label>
                      <div style={{ display: 'flex', gap: '8px', color: 'var(--champagne-gold)' }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', color: 'inherit' }}
                          >
                            <Star 
                              size={24} 
                              fill={star <= rating ? 'var(--champagne-gold)' : 'none'} 
                              style={{ transition: 'transform 0.2s ease', transform: star <= rating ? 'scale(1.1)' : 'scale(1)' }}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Comment Area */}
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)', fontWeight: '600', marginBottom: '8px' }}>
                        Your Review *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your experience..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="form-input"
                        style={{ background: 'var(--bg-pure)', resize: 'vertical', minHeight: '100px', borderRadius: '0' }}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '14px 0', fontWeight: '600', letterSpacing: '0.1em' }}
                    >
                      Submit Feedback
                    </button>
                  </div>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Comments Feed List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <AnimatePresence>
            {reviews.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  background: 'var(--bg-ivory)',
                  border: '1px dashed var(--champagne-gold)',
                  padding: '50px 30px',
                  textAlign: 'center'
                }}
              >
                <MessageSquare size={36} style={{ color: 'var(--champagne-gold)', marginBottom: '16px', opacity: 0.7 }} />
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--text-main)', marginBottom: '8px' }}>
                  No Guest Reviews Yet
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', margin: '0 auto', maxWidth: '400px' }}>
                  Be the first to share your experience! Click the "Write a Review" button above to submit your reflection.
                </p>
              </motion.div>
            ) : (
              reviews.map((review) => {
                return (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      background: 'var(--bg-pure)',
                      border: '1px solid var(--border-light)',
                      padding: '24px 30px',
                      boxShadow: 'var(--shadow-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      position: 'relative'
                    }}
                  >
                    {/* Comment Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <h4 style={{ fontSize: '15.5px', fontWeight: '600', color: 'var(--text-main)', margin: 0, fontFamily: 'var(--font-sans)' }}>
                            {review.name}
                          </h4>
                          <span style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '3px', 
                            fontSize: '9.5px', 
                            color: 'var(--primary-teal)', 
                            backgroundColor: 'var(--primary-teal-light)', 
                            padding: '2px 8px', 
                            fontWeight: '600',
                            letterSpacing: '0.02em'
                          }}>
                            <CheckCircle size={8} fill="var(--primary-teal)" style={{ color: 'var(--bg-pure)' }} />
                            Verified Customer
                          </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                          {/* Stars */}
                          <div style={{ display: 'flex', gap: '2px', color: 'var(--champagne-gold)' }}>
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={11} 
                                fill={i < review.rating ? 'var(--champagne-gold)' : 'none'} 
                                style={{ color: 'var(--champagne-gold)' }} 
                              />
                            ))}
                          </div>
                          
                          {/* Dot Separator */}
                          <span style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'var(--text-secondary)', opacity: 0.3 }} />
                          
                          {/* Date */}
                          <span style={{ fontSize: '11.5px', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <Clock size={10} />
                            {review.date}
                          </span>
                        </div>
                      </div>

                      {/* Optional Delete Button for demo management */}
                      <button
                        onClick={() => handleDeleteReview(review.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-secondary)',
                          fontSize: '11px',
                          opacity: 0.5,
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          padding: '4px'
                        }}
                        onMouseEnter={(e) => e.target.style.opacity = 1}
                        onMouseLeave={(e) => e.target.style.opacity = 0.5}
                      >
                        Delete
                      </button>
                    </div>

                    {/* Comment Body */}
                    <p style={{
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.65',
                      margin: 0,
                      whiteSpace: 'pre-wrap',
                      fontStyle: 'normal'
                    }}>
                      "{review.text}"
                    </p>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
