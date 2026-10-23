import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, PhoneCall, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAppointments: () => void;
  appointmentCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenAppointments,
  appointmentCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ana Sayfa', href: '#hero' },
    { label: 'Tedavilerimiz', href: '#tedaviler' },
    { label: 'Öncesi & Sonrası', href: '#oncesi-sonrasi' },
    { label: 'Hakkımızda', href: '#hakkimizda' },
    { label: 'Hekimlerimiz', href: '#hekimler' },
    { label: 'Hasta Yorumları', href: '#yorumlar' },
    { label: 'S.S.S', href: '#sss' },
    { label: 'İletişim', href: '#iletisim' },
  ];

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo" onClick={handleLinkClick}>
          <div className="logo-icon-wrapper">
            <svg width="34" height="34" viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" rx="24" fill="#191E26"/>
              <path d="M50 18 C38 18 28 26 28 39 C28 48 32 55 35 64 C38 72 41 82 45 82 C48 82 49 76 50 68 C51 76 52 82 55 82 C59 82 62 72 65 64 C68 55 72 48 72 39 C72 26 62 18 50 18 Z" fill="#5D5FEF"/>
              <path d="M50 26 C43 26 36 31 36 39 C36 45 39 52 41 58 C43 64 45 72 48 72 C49 72 50 68 50 62 C50 68 51 72 52 72 C55 72 57 64 59 58 C61 52 64 45 64 39 C64 31 57 26 50 26 Z" fill="#FFFFFF"/>
              <path d="M68 22 L71 30 L79 31 L73 37 L75 45 L68 40 L61 45 L63 37 L57 31 L65 30 Z" fill="#F6B400"/>
            </svg>
            <div className="logo-star-pulse">
              <Sparkles size={12} className="star-pulse-icon" />
            </div>
          </div>
          <div className="brand-text">
            <span className="brand-title">COMODO DENTAL</span>
            <span className="brand-subtitle">CENTRE • KONYAALTI</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          {appointmentCount > 0 && (
            <button 
              onClick={onOpenAppointments} 
              className="btn btn-outline-white btn-sm hidden-mobile"
              title="Randevularım"
            >
              <Calendar size={15} />
              <span>Randevularım ({appointmentCount})</span>
            </button>
          )}

          <button 
            onClick={onOpenBooking} 
            className="btn btn-accent btn-sm btn-pulse"
          >
            <Calendar size={16} />
            <span>Randevu Al</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-toggle" 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mobile-drawer-footer">
            <button 
              onClick={() => { setIsMobileOpen(false); onOpenBooking(); }} 
              className="btn btn-accent btn-lg w-full"
            >
              <Calendar size={18} />
              <span>Hemen Randevu Al</span>
            </button>

            {appointmentCount > 0 && (
              <button 
                onClick={() => { setIsMobileOpen(false); onOpenAppointments(); }} 
                className="btn btn-outline-white w-full"
              >
                <Calendar size={18} />
                <span>Kayıtlı Randevularım ({appointmentCount})</span>
              </button>
            )}

            <a 
              href="tel:+905078505287" 
              className="btn btn-outline-white w-full"
            >
              <PhoneCall size={18} />
              <span>Bizi Arayın: 0507 8505 287</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background-color: rgba(25, 30, 38, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: all var(--transition-normal);
          padding: 14px 0;
        }
        .navbar-header.scrolled {
          padding: 10px 0;
          background-color: rgba(17, 21, 28, 0.98);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          border-bottom-color: rgba(255, 255, 255, 0.12);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-star-pulse {
          position: absolute;
          top: -4px;
          right: -4px;
          background: #f6b400;
          color: #191e26;
          border-radius: var(--radius-full);
          padding: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px rgba(246, 180, 0, 0.8);
          animation: pulseGlow 2s infinite ease-in-out;
        }
        .brand-text {
          display: flex;
          flex-direction: column;
        }
        .brand-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: #ffffff;
          line-height: 1.1;
        }
        .brand-subtitle {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-accent);
          text-transform: uppercase;
          margin-top: 2px;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }
        .nav-link {
          color: #cbd5e1;
          font-size: 0.9375rem;
          font-weight: 500;
          text-decoration: none;
          position: relative;
          padding: 6px 0;
          transition: color var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--color-accent);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: var(--color-accent);
          transition: width var(--transition-normal);
          border-radius: 2px;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .btn-pulse {
          animation: shadowPulse 2.5s infinite;
        }
        @keyframes shadowPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(246, 180, 0, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(246, 180, 0, 0);
          }
        }
        .mobile-toggle {
          display: none;
          color: #ffffff;
          padding: 6px;
        }
        .mobile-drawer {
          display: none;
        }

        @media (max-width: 1040px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mobile-drawer {
            display: block;
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background-color: rgba(25, 30, 38, 0.98);
            backdrop-filter: blur(20px);
            max-height: 0;
            overflow: hidden;
            transition: max-height var(--transition-normal) ease-in-out;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          .mobile-drawer.open {
            max-height: 85vh;
            overflow-y: auto;
          }
          .mobile-drawer-content {
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          .mobile-nav {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }
          .mobile-nav-link {
            color: #e2e8f0;
            font-size: 1.125rem;
            font-weight: 600;
            padding: 8px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          }
          .mobile-nav-link:hover {
            color: var(--color-accent);
          }
          .mobile-drawer-footer {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .w-full {
            width: 100%;
          }
        }
      `}</style>
    </header>
  );
};
