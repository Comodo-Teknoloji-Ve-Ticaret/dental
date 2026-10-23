import React from 'react';
import { Phone, Clock, ShieldCheck, Award } from 'lucide-react';

interface QuickFeaturesProps {
  onOpenBooking: () => void;
}

export const QuickFeatures: React.FC<QuickFeaturesProps> = ({ onOpenBooking }) => {
  return (
    <div className="quick-features-bar">
      <div className="container">
        <div className="features-grid">
          {/* Card 1: Direct Call */}
          <a href="tel:+905078505287" className="feature-item" title="Hemen Arayın">
            <div className="feature-icon-box">
              <Phone size={24} className="feature-icon" />
            </div>
            <div className="feature-content">
              <span className="feature-label">Sorularınız İçin Arayın</span>
              <span className="feature-value">0507 8505 287</span>
              <span className="feature-sub">Uzman danışmanlarımız hatta</span>
            </div>
          </a>

          {/* Card 2: Hours */}
          <div className="feature-item">
            <div className="feature-icon-box">
              <Clock size={24} className="feature-icon" />
            </div>
            <div className="feature-content">
              <span className="feature-label">Çalışma Saatlerimiz</span>
              <span className="feature-value">Pzt - Cmt: 10:00 - 19:00</span>
              <span className="feature-sub">Pazar: Acil Nöbetçi Hizmeti</span>
            </div>
          </div>

          {/* Card 3: Quality & Guarantee */}
          <div className="feature-item">
            <div className="feature-icon-box">
              <ShieldCheck size={24} className="feature-icon" />
            </div>
            <div className="feature-content">
              <span className="feature-label">Sterilizasyon & Güvence</span>
              <span className="feature-value">Avrupa CE & FDA Onaylı</span>
              <span className="feature-sub">Biyouyumlu kaliteli malzemeler</span>
            </div>
          </div>

          {/* Card 4: Quick Action */}
          <div className="feature-item action-feature">
            <div className="feature-icon-box gold">
              <Award size={24} className="feature-icon-gold" />
            </div>
            <div className="feature-content">
              <span className="feature-label">Hızlı Randevu</span>
              <button onClick={onOpenBooking} className="quick-book-link">
                Online Randevu Oluştur →
              </button>
              <span className="feature-sub">Anında onay & hatırlatma</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .quick-features-bar {
          background: #ffffff;
          border-bottom: 1px solid var(--color-border);
          position: relative;
          z-index: 25;
          margin-top: -30px;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #ffffff;
          border-radius: var(--radius-lg);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
          border: 1px solid var(--color-border);
          overflow: hidden;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px 22px;
          border-right: 1px solid var(--color-border);
          transition: background var(--transition-fast), transform var(--transition-fast);
          text-decoration: none;
        }
        .feature-item:last-child {
          border-right: none;
        }
        .feature-item:hover {
          background-color: #f8fafc;
        }
        .feature-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background-color: var(--color-brand-light);
          color: var(--color-brand);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .feature-icon-box.gold {
          background-color: var(--color-accent-light);
          color: var(--color-accent);
        }
        .feature-icon-gold {
          color: #b47800;
        }
        .feature-content {
          display: flex;
          flex-direction: column;
        }
        .feature-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--color-text-muted);
        }
        .feature-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-top: 2px;
        }
        .feature-sub {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
          margin-top: 2px;
        }
        .action-feature {
          background: linear-gradient(135deg, #ffffff 0%, var(--color-accent-light) 100%);
        }
        .quick-book-link {
          font-size: 0.95rem;
          font-weight: 700;
          color: #925800;
          text-align: left;
          padding: 2px 0;
          margin-top: 1px;
        }
        .quick-book-link:hover {
          color: #000000;
        }

        @media (max-width: 1040px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .feature-item:nth-child(2) {
            border-right: none;
          }
          .feature-item:nth-child(1),
          .feature-item:nth-child(2) {
            border-bottom: 1px solid var(--color-border);
          }
        }
        @media (max-width: 640px) {
          .quick-features-bar {
            margin-top: 0;
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
          .feature-item {
            border-right: none;
            border-bottom: 1px solid var(--color-border);
          }
          .feature-item:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </div>
  );
};
