import React from 'react';
import type { Treatment } from '../types';
import { X, CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookTreatment: (treatment: Treatment) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onBookTreatment
}) => {
  if (!treatment) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-text">
            <span className="badge-tag gold">{treatment.categoryLabel}</span>
            <h2 className="modal-title">{treatment.title}</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Kapat">
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="modal-grid">
            {/* Visual Column */}
            <div className="modal-media">
              <img 
                src={treatment.image} 
                alt={treatment.title} 
                className="modal-cover-img" 
              />
              <div className="treatment-spec-pills">
                <div className="spec-pill">
                  <Clock size={16} className="spec-icon" />
                  <div>
                    <span className="spec-label">Seans Süresi:</span>
                    <strong>{treatment.duration}</strong>
                  </div>
                </div>
                <div className="spec-pill">
                  <Calendar size={16} className="spec-icon" />
                  <div>
                    <span className="spec-label">Tamamlanma:</span>
                    <strong>{treatment.sessionCount}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="modal-info">
              <p className="modal-desc">{treatment.description}</p>

              <div className="modal-sub-section">
                <h4 className="sub-title">Tedavinin Sağladığı Avantajlar</h4>
                <ul className="modal-check-list">
                  {treatment.benefits.map((benefit, i) => (
                    <li key={i} className="modal-check-item">
                      <CheckCircle2 size={18} className="check-gold" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-sub-section">
                <h4 className="sub-title">Tedavi Aşamaları Nasıl İşler?</h4>
                <ol className="modal-step-list">
                  {treatment.process.map((step, i) => (
                    <li key={i} className="modal-step-item">
                      <span className="step-number">{i + 1}</span>
                      <span className="step-text">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button onClick={onClose} className="btn btn-outline">
            Vazgeç
          </button>
          <button 
            onClick={() => {
              onClose();
              onBookTreatment(treatment);
            }} 
            className="btn btn-accent btn-lg"
          >
            <span>Bu Tedavi İçin Randevu Al</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          padding: 20px;
          overflow-y: auto;
        }
        .modal-container {
          background-color: #ffffff;
          border-radius: var(--radius-xl);
          max-width: 860px;
          width: 100%;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
          border: 1px solid var(--color-border);
          overflow: hidden;
          animation: modalAppear 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes modalAppear {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 24px 28px;
          border-bottom: 1px solid var(--color-border);
          background-color: #f8fafc;
        }
        .modal-title {
          font-size: 1.6rem;
          color: var(--color-primary);
          margin-top: 4px;
        }
        .modal-close-btn {
          color: var(--color-text-muted);
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-close-btn:hover {
          color: var(--color-primary);
          background-color: #f1f5f9;
        }
        .modal-body {
          padding: 28px;
          overflow-y: auto;
        }
        .modal-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 28px;
        }
        .modal-cover-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-radius: var(--radius-md);
          margin-bottom: 14px;
        }
        .treatment-spec-pills {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .spec-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          background-color: var(--color-surface-subtle);
          padding: 12px 14px;
          border-radius: var(--radius-sm);
        }
        .spec-icon {
          color: var(--color-brand);
        }
        .spec-label {
          display: block;
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }
        .modal-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }
        .modal-sub-section {
          margin-bottom: 22px;
        }
        .sub-title {
          font-size: 1.1rem;
          color: var(--color-primary);
          margin-bottom: 12px;
        }
        .modal-check-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .modal-check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9375rem;
          color: var(--color-text-main);
        }
        .check-gold {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .modal-step-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .modal-step-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.9375rem;
        }
        .step-number {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: var(--color-brand-light);
          color: var(--color-brand);
          font-weight: 700;
          font-size: 0.8125rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 14px;
          padding: 18px 28px;
          border-top: 1px solid var(--color-border);
          background-color: #f8fafc;
        }
        @media (max-width: 768px) {
          .modal-grid {
            grid-template-columns: 1fr;
          }
          .modal-cover-img {
            height: 200px;
          }
          .modal-footer {
            flex-direction: column-reverse;
          }
          .modal-footer .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
