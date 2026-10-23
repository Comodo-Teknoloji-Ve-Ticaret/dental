import React from 'react';
import { Phone, Clock, MapPin, Globe } from 'lucide-react';

interface TopBarProps {
  currentLang: string;
  onLangChange: (lang: 'TR' | 'EN') => void;
  onOpenAppointments: () => void;
  appointmentCount: number;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentLang,
  onLangChange,
  onOpenAppointments,
  appointmentCount
}) => {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <a href="tel:+905078505287" className="top-bar-item" title="Bizi Arayın">
            <Phone size={14} className="top-bar-icon" />
            <span>0507 8505 287</span>
          </a>
          <span className="top-bar-divider">•</span>
          <div className="top-bar-item">
            <Clock size={14} className="top-bar-icon" />
            <span>Pzt - Cmt: 10:00 - 19:00</span>
          </div>
          <span className="top-bar-divider">•</span>
          <div className="top-bar-item hidden-mobile">
            <MapPin size={14} className="top-bar-icon" />
            <span>Gürsu, Gazi Mustafa Kemal Blv. No:57/2, Konyaaltı / Antalya</span>
          </div>
        </div>

        <div className="top-bar-right">
          {appointmentCount > 0 && (
            <button 
              onClick={onOpenAppointments} 
              className="top-bar-app-badge"
              title="Kayıtlı randevularınızı görüntüleyin"
            >
              <span>Randevularım ({appointmentCount})</span>
            </button>
          )}

          <div className="lang-switcher">
            <Globe size={13} />
            <button 
              className={`lang-btn ${currentLang === 'TR' ? 'active' : ''}`}
              onClick={() => onLangChange('TR')}
            >
              TR
            </button>
            <span className="lang-sep">/</span>
            <button 
              className={`lang-btn ${currentLang === 'EN' ? 'active' : ''}`}
              onClick={() => onLangChange('EN')}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .top-bar {
          background-color: var(--color-primary-dark);
          color: #94a3b8;
          font-size: 0.8125rem;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          z-index: 50;
        }
        .top-bar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .top-bar-left, .top-bar-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .top-bar-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #cbd5e1;
          transition: color var(--transition-fast);
        }
        .top-bar-item:hover {
          color: var(--color-accent);
        }
        .top-bar-icon {
          color: var(--color-accent);
        }
        .top-bar-divider {
          color: rgba(255, 255, 255, 0.2);
          font-size: 0.7rem;
        }
        .top-bar-app-badge {
          background: rgba(93, 95, 239, 0.2);
          border: 1px solid rgba(93, 95, 239, 0.4);
          color: #a5b4fc;
          font-size: 0.75rem;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          font-weight: 600;
        }
        .top-bar-app-badge:hover {
          background: var(--color-brand);
          color: #ffffff;
        }
        .lang-switcher {
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(255, 255, 255, 0.06);
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }
        .lang-btn {
          color: #94a3b8;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 4px;
        }
        .lang-btn.active {
          color: var(--color-accent);
        }
        .lang-sep {
          color: rgba(255, 255, 255, 0.2);
          font-size: 0.7rem;
        }
        @media (max-width: 900px) {
          .hidden-mobile {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
