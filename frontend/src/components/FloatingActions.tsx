import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ArrowUp, MessageCircle } from 'lucide-react';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Action Stack */}
      <div className="floating-stack-desktop">
        {showScrollTop && (
          <button 
            onClick={scrollToTop} 
            className="floating-btn scroll-top-btn" 
            title="Yukarı Çık"
            aria-label="Yukarı Çık"
          >
            <ArrowUp size={20} />
          </button>
        )}

        <button 
          onClick={onOpenBooking} 
          className="floating-btn booking-float-btn"
          title="Online Randevu Al"
        >
          <Calendar size={20} />
          <span className="float-label">Randevu Al</span>
        </button>

        <a 
          href="https://wa.me/905078505287?text=Merhaba,%20Comodo%20Dental%20Centre%20tedavileri%20hakkında%20bilgi%20almak%20istiyorum." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="floating-btn whatsapp-float-btn"
          title="WhatsApp Canlı Destek"
        >
          <MessageCircle size={24} />
          <span className="float-label">WhatsApp</span>
        </a>
      </div>

      {/* Mobile Fixed Bottom Bar (Comodo Dental Centre) */}
      <div className="mobile-bottom-bar">
        <a href="tel:+905078505287" className="mobile-bar-btn call">
          <Phone size={18} />
          <span>Hemen Ara</span>
        </a>
        <button onClick={onOpenBooking} className="mobile-bar-btn book">
          <Calendar size={18} />
          <span>Randevu Al</span>
        </button>
        <a 
          href="https://wa.me/905078505287?text=Merhaba,%20randevu%20almak%20istiyorum." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mobile-bar-btn wp"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
      </div>

      <style>{`
        /* Desktop Floating */
        .floating-stack-desktop {
          position: fixed;
          bottom: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 95;
        }
        .floating-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 0.875rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
          text-decoration: none;
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }
        .floating-btn:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
        }
        .scroll-top-btn {
          background: #191e26;
          color: #ffffff;
          padding: 12px;
          border-radius: 50%;
          align-self: flex-end;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .booking-float-btn {
          background: var(--color-accent);
          color: #191e26;
        }
        .whatsapp-float-btn {
          background: #25D366;
          color: #ffffff;
        }

        /* Mobile Bottom Bar */
        .mobile-bottom-bar {
          display: none;
        }

        @media (max-width: 768px) {
          .floating-stack-desktop {
            display: none;
          }
          .mobile-bottom-bar {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 100;
            box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
            height: 60px;
          }
          .mobile-bar-btn {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4px;
            font-size: 0.75rem;
            font-weight: 700;
            text-decoration: none;
            color: #ffffff;
            border: none;
          }
          .mobile-bar-btn.call {
            background-color: #191E26;
          }
          .mobile-bar-btn.book {
            background-color: var(--color-brand);
          }
          .mobile-bar-btn.wp {
            background-color: #25D366;
          }
        }
      `}</style>
    </>
  );
};
