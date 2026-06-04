import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, Plus, CheckCircle, Clock } from 'lucide-react';
import { supabase } from '../supabaseClient';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Fetch reviews on component mount
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      if (data) {
        // Map database schema to frontend structure:
        const mappedReviews = data.map(item => ({
          id: item.id,
          name: item.name,
          rating: item.rating,
          text: item.review,
          date: new Date(item.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })
        }));
        setReviews(mappedReviews);
      }
    } catch (err) {
      console.error('Error fetching reviews:', err);
      setError('Could not retrieve reviews. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      alert("Please fill in both your name and review comment.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('reviews')
        .insert([
          {
            name: name.trim(),
            rating: rating,
            review: comment.trim()
          }
        ]);

      if (error) {
        throw error;
      }

      // Reset Form and show success
      setName('');
      setComment('');
      setRating(5);
      setSubmitSuccess(true);
      
      // Refresh reviews list to show the new review immediately
      await fetchReviews();

      setTimeout(() => {
        setSubmitSuccess(false);
        setIsFormOpen(false);
      }, 2000);

    } catch (err) {
      console.error('Error submitting review:', err);
      alert('Failed to submit review: ' + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayedReviews = isExpanded ? reviews : reviews.slice(0, 3);

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
                      disabled={isSubmitting}
                      style={{
                        width: '100%',
                        padding: '14px 0',
                        fontWeight: '600',
                        letterSpacing: '0.1em',
                        opacity: isSubmitting ? 0.7 : 1,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {isSubmitting ? 'Submitting Reflection...' : 'Submit Feedback'}
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
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  background: 'var(--bg-ivory)',
                  border: '1px solid var(--border-light)',
                  padding: '50px 30px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  border: '2px solid rgba(20, 93, 91, 0.1)',
                  borderTop: '2px solid var(--primary-teal)',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }} />
                <style>{`
                  @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                `}</style>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', margin: 0 }}>
                  Retrieving guest reflections...
                </p>
              </motion.div>
            ) : error ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  background: 'var(--bg-ivory)',
                  border: '1px dashed #d9534f',
                  padding: '30px',
                  textAlign: 'center',
                  color: '#d9534f'
                }}
              >
                <p style={{ fontSize: '14px', margin: 0 }}>{error}</p>
                <button 
                  onClick={fetchReviews}
                  style={{
                    marginTop: '12px',
                    background: 'var(--primary-teal)',
                    color: 'white',
                    border: 'none',
                    padding: '6px 16px',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  Retry
                </button>
              </motion.div>
            ) : reviews.length === 0 ? (
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
              displayedReviews.map((review) => {
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

        {reviews.length > 3 && (
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn btn-secondary"
              style={{
                background: 'transparent',
                border: '1px solid var(--border-gold)',
                color: 'var(--text-main)',
                padding: '12px 30px',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--bg-ivory)';
                e.target.style.borderColor = 'var(--text-main)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = 'var(--border-gold)';
              }}
            >
              {isExpanded ? 'Show Less' : 'View All Reviews'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Reviews;
