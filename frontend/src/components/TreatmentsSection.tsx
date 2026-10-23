import React, { useState } from 'react';
import { TREATMENTS } from '../data/treatmentsData';
import type { Treatment } from '../types';
import { Sparkles, Check, ArrowUpRight, Calendar, Info, Clock } from 'lucide-react';

interface TreatmentsSectionProps {
  onSelectTreatmentForBooking: (treatment: Treatment) => void;
  onOpenTreatmentDetail: (treatment: Treatment) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatmentForBooking,
  onOpenTreatmentDetail
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'estetik' | 'cerrahi' | 'genel' | 'acil'>('all');

  const filteredTreatments = activeFilter === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === activeFilter);

  return (
    <section id="tedaviler" className="section treatments-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag gold">
            <Sparkles size={14} />
            <span>Kapsamlı Diş Sağlığı & Estetiği</span>
          </div>
          <h2 className="section-title">
            Her Gülüşe Özel, <span className="highlight-gold">Kapsamlı Tedavilerimiz</span>
          </h2>
          <p className="section-subtitle">
            Comodo Dental Centre olarak, son teknoloji dijital diş hekimliği protokolleri ve kişiselleştirilmiş estetik yaklaşımlarla gülüşünüzü yeniden tasarlıyoruz.
          </p>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              Tüm Tedaviler ({TREATMENTS.length})
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'estetik' ? 'active' : ''}`}
              onClick={() => setActiveFilter('estetik')}
            >
              Estetik Diş Hekimliği
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'cerrahi' ? 'active' : ''}`}
              onClick={() => setActiveFilter('cerrahi')}
            >
              Çene Cerrahisi & İmplant
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'genel' ? 'active' : ''}`}
              onClick={() => setActiveFilter('genel')}
            >
              Kanal & Koruyucu
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'acil' ? 'active' : ''}`}
              onClick={() => setActiveFilter('acil')}
            >
              Acil & Nöbetçi
            </button>
          </div>
        </div>

        {/* Treatments Grid */}
        <div className="treatments-grid">
          {filteredTreatments.map((treatment) => (
            <div key={treatment.id} className="treatment-card">
              {/* Card Image Wrapper */}
              <div className="card-image-wrap">
                <img 
                  src={treatment.image} 
                  alt={treatment.title} 
                  className="card-img" 
                  loading="lazy"
                />
                <span className="card-badge">{treatment.badge}</span>
                <span className="card-category-pill">{treatment.categoryLabel}</span>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <h3 className="card-title">{treatment.title}</h3>
                <p className="card-summary">{treatment.summary}</p>

                {/* Benefits List */}
                <ul className="card-benefits">
                  {treatment.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="card-benefit-item">
                      <Check size={15} className="benefit-check" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Timing Specs */}
                <div className="card-meta">
                  <div className="meta-spec">
                    <Clock size={14} className="meta-icon" />
                    <span>{treatment.duration}</span>
                  </div>
                  <div className="meta-spec">
                    <Calendar size={14} className="meta-icon" />
                    <span>{treatment.sessionCount}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="card-actions">
                  <button 
                    onClick={() => onOpenTreatmentDetail(treatment)}
                    className="btn btn-outline btn-sm card-btn-detail"
                  >
                    <Info size={15} />
                    <span>İncele</span>
                  </button>
                  <button 
                    onClick={() => onSelectTreatmentForBooking(treatment)}
                    className="btn btn-primary btn-sm card-btn-book"
                  >
                    <Calendar size={15} />
                    <span>Randevu Al</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .treatments-section {
          background-color: #ffffff;
        }
        .filter-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 36px;
        }
        .filter-btn {
          padding: 10px 22px;
          border-radius: var(--radius-full);
          background-color: var(--color-surface-subtle);
          color: var(--color-text-secondary);
          font-weight: 600;
          font-size: 0.9375rem;
          border: 1px solid var(--color-border);
          transition: all var(--transition-fast);
        }
        .filter-btn:hover {
          background-color: #e2e8f0;
          color: var(--color-primary);
        }
        .filter-btn.active {
          background-color: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
          box-shadow: 0 4px 12px rgba(25, 30, 38, 0.2);
        }
        .treatments-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .treatment-card {
          background-color: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all var(--transition-normal);
        }
        .treatment-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-xl);
          border-color: #cbd5e1;
        }
        .card-image-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .treatment-card:hover .card-img {
          transform: scale(1.08);
        }
        .card-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(246, 180, 0, 0.95);
          color: #191e26;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .card-category-pill {
          position: absolute;
          bottom: 14px;
          left: 14px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: var(--radius-sm);
        }
        .card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-title {
          font-size: 1.35rem;
          color: var(--color-primary);
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .card-summary {
          font-size: 0.9375rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .card-benefits {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
          padding-top: 14px;
          border-top: 1px solid var(--color-border-subtle);
        }
        .card-benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--color-text-main);
        }
        .benefit-check {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .card-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 0.75rem;
          color: var(--color-text-muted);
          background-color: var(--color-surface-subtle);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          margin-bottom: 20px;
          margin-top: auto;
        }
        .meta-spec {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
        }
        .meta-icon {
          color: var(--color-brand);
        }
        .card-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .card-btn-detail {
          flex: 1;
        }
        .card-btn-book {
          flex: 1.5;
        }

        @media (max-width: 1040px) {
          .treatments-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .treatments-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
