import React, { useState } from 'react';
import { REVIEWS } from '../data/reviewsData';
import type { Review } from '../types';
import { Star, Sparkles, MessageSquarePlus, ChevronLeft, ChevronRight } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);

  // New review form
  const [name, setName] = useState('');
  const [treatment, setTreatment] = useState('Antalya Gülüş Tasarımı');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % reviewsList.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + reviewsList.length) % reviewsList.length);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev: Review = {
      id: 'rev_' + Date.now(),
      patientName: name.trim(),
      patientCity: 'Antalya',
      rating,
      date: 'Bugün',
      source: 'google',
      treatmentName: treatment,
      verified: true,
      comment: comment.trim(),
      doctorAttended: 'Uzm. Dt. Asım Özün'
    };

    setReviewsList([newRev, ...reviewsList]);
    setShowAddModal(false);
    setName('');
    setComment('');
  };

  const currentReview = reviewsList[activeSlide];

  return (
    <section id="yorumlar" className="section reviews-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag gold">
            <Sparkles size={14} />
            <span>Hasta Deneyimleri</span>
          </div>
          <h2 className="section-title">
            Gülüşlerin <span className="highlight-gold">Gerçek Hikayeleri</span>
          </h2>
          <p className="section-subtitle">
            Comodo Dental Centre ailesi olarak en büyük gururumuz; kliniğimizden mutlu, özgüvenli ve sağlıklı gülüşlerle ayrılan hastalarımızdır.
          </p>

          {/* External Rating Badges */}
          <div className="reviews-rating-bar">
            <div className="platform-rating-box google">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.02h3.9c2.28-2.1 3.64-5.2 3.64-9.11z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.02c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.74-2.1-6.68-4.93H1.21v3.12C3.21 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.32 14.3c-.24-.72-.38-1.49-.38-2.3s.14-1.58.38-2.3V6.58H1.21C.44 8.11 0 9.99 0 12s.44 3.89 1.21 5.42l4.11-3.12z"/>
                <path fill="#EA4335" d="M12 4.77c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.21 2.64 1.21 6.58l4.11 3.12c.94-2.83 3.58-4.93 6.68-4.93z"/>
              </svg>
              <div>
                <strong>4.7 / 5</strong>
                <span>Google Reviews</span>
              </div>
            </div>

            <div className="platform-rating-box trustpilot">
              <span className="tp-star">★</span>
              <div>
                <strong>4.8 / 5</strong>
                <span>Trustpilot Onaylı</span>
              </div>
            </div>

            <button 
              onClick={() => setShowAddModal(true)} 
              className="btn btn-outline btn-sm add-review-trigger"
            >
              <MessageSquarePlus size={16} />
              <span>Siz de Yorum Yapın</span>
            </button>
          </div>
        </div>

        {/* Testimonials Carousel & Cards */}
        <div className="review-carousel-card">
          <div className="review-quote-mark">“</div>
          
          <div className="review-stars-row">
            {[...Array(currentReview.rating)].map((_, i) => (
              <Star key={i} size={20} fill="#F6B400" color="#F6B400" />
            ))}
            <span className="review-source-tag">
              {currentReview.source === 'google' ? 'Google Doğrulanmış Hasta' : 'Trustpilot Doğrulanmış'}
            </span>
          </div>

          <p className="review-text">{currentReview.comment}</p>

          <div className="review-author-row">
            <div className="author-details">
              <strong className="author-name">{currentReview.patientName}</strong>
              <span className="author-meta">
                {currentReview.patientCity} • <span className="text-brand">{currentReview.treatmentName}</span>
              </span>
              {currentReview.doctorAttended && (
                <span className="author-doctor">İlgilenen Hekim: {currentReview.doctorAttended}</span>
              )}
            </div>

            {/* Slider Navigation Controls */}
            <div className="carousel-nav-buttons">
              <button onClick={prevSlide} className="carousel-btn" aria-label="Önceki Yorum">
                <ChevronLeft size={20} />
              </button>
              <span className="slide-counter">
                {activeSlide + 1} / {reviewsList.length}
              </span>
              <button onClick={nextSlide} className="carousel-btn" aria-label="Sonraki Yorum">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Review Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-container review-submit-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Deneyiminizi Paylaşın</h3>
              <button className="modal-close-btn" onClick={() => setShowAddModal(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="modal-body review-form">
              <div className="form-field">
                <label className="form-label">Adınız Soyadınız *</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Örn: Ayşe K."
                  className="form-input"
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label">Aldığınız Tedavi</label>
                <select 
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="form-input"
                >
                  <option value="Antalya Gülüş Tasarımı">Antalya Gülüş Tasarımı</option>
                  <option value="Yaprak Lamine Diş">Yaprak Lamine Diş</option>
                  <option value="Zirkonyum Diş Kaplama">Zirkonyum Diş Kaplama</option>
                  <option value="Çene Cerrahisi & Dental İmplant">Dental İmplant</option>
                  <option value="Lazerle Diş Beyazlatma">Diş Beyazlatma</option>
                  <option value="Modern Kanal Tedavisi">Kanal Tedavisi</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label">Puanınız</label>
                <div className="rating-select-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="star-btn"
                      onClick={() => setRating(star)}
                    >
                      <Star 
                        size={24} 
                        fill={star <= rating ? "#F6B400" : "none"} 
                        color={star <= rating ? "#F6B400" : "#cbd5e1"} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-field">
                <label className="form-label">Yorumunuz *</label>
                <textarea 
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Hekimimiz, klinik ekibimiz ve tedavi süreciniz hakkındaki görüşleriniz..."
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <div className="modal-footer">
                <button type="button" onClick={() => setShowAddModal(false)} className="btn btn-outline">
                  Vazgeç
                </button>
                <button type="submit" className="btn btn-accent">
                  Yorumu Yayınla
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .reviews-section {
          background-color: #f8fafc;
        }
        .reviews-rating-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 24px;
          flex-wrap: wrap;
        }
        .platform-rating-box {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #ffffff;
          padding: 10px 18px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }
        .platform-rating-box strong {
          font-size: 1rem;
          color: var(--color-primary);
          margin-right: 4px;
        }
        .platform-rating-box span {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
        }
        .tp-star {
          background: #00b67a;
          color: #ffffff;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          font-size: 0.875rem;
        }
        .add-review-trigger {
          border-radius: var(--radius-full);
        }
        .review-carousel-card {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 48px;
          max-width: 860px;
          margin: 0 auto;
          box-shadow: var(--shadow-lg);
          position: relative;
        }
        .review-quote-mark {
          position: absolute;
          top: 20px;
          right: 36px;
          font-family: serif;
          font-size: 6rem;
          line-height: 1;
          color: rgba(246, 180, 0, 0.15);
          pointer-events: none;
        }
        .review-stars-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 20px;
        }
        .review-source-tag {
          margin-left: 12px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #00b67a;
          background: rgba(0, 182, 122, 0.1);
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }
        .review-text {
          font-size: 1.25rem;
          line-height: 1.7;
          color: var(--color-primary);
          font-weight: 500;
          margin-bottom: 32px;
          font-style: italic;
        }
        .review-author-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid var(--color-border-subtle);
        }
        .author-details {
          display: flex;
          flex-direction: column;
        }
        .author-name {
          font-size: 1.1rem;
          color: var(--color-primary);
        }
        .author-meta {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
        }
        .text-brand {
          color: var(--color-brand);
          font-weight: 600;
        }
        .author-doctor {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin-top: 2px;
        }
        .carousel-nav-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .carousel-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--color-surface-subtle);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-border);
          transition: all var(--transition-fast);
        }
        .carousel-btn:hover {
          background: var(--color-primary);
          color: #ffffff;
        }
        .slide-counter {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-text-muted);
        }
        .review-submit-modal {
          max-width: 520px;
          width: 100%;
        }
        .rating-select-stars {
          display: flex;
          gap: 8px;
        }
        .star-btn {
          padding: 4px;
        }

        @media (max-width: 768px) {
          .review-carousel-card {
            padding: 28px 20px;
          }
          .review-text {
            font-size: 1.05rem;
          }
          .review-author-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .carousel-nav-buttons {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </section>
  );
};
