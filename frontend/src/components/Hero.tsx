import React from 'react';
import { Calendar, Star, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Content */}
          <div className="hero-content">
            <div className="badge-tag dark hero-badge">
              <Sparkles size={15} className="text-gold" />
              <span>Antalya Konyaaltı Özel Diş Kliniği</span>
            </div>

            <h1 className="hero-headline">
              Gülüşünüz Bizimle <br />
              <span className="highlight-star">
                Bir Yıldıza
                <svg className="star-svg-decoration" viewBox="0 0 24 24" width="28" height="28" fill="#F6B400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </span> Dönüşür!
            </h1>

            <p className="hero-description">
              En yeni 3D dijital teknoloji ve <strong>Uzm. Dt. Asım Özün</strong> liderliğindeki uzman kadromuzla; estetik gülüş tasarımı, yaprak lamine, zirkonyum ve dikişsiz implant tedavilerinde dünya standartlarında hizmet veriyoruz.
            </p>

            <div className="hero-check-list">
              <div className="check-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Ağrısız & Konforlu Tedavi</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>3D Dijital Gülüş Tasarımı</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Ücretsiz Ön Değerlendirme</span>
              </div>
            </div>

            <div className="hero-actions">
              <button onClick={onOpenBooking} className="btn btn-accent btn-lg hero-cta-primary">
                <Calendar size={20} />
                <span>Online Randevu Al</span>
              </button>

              <a 
                href="https://wa.me/905078505287?text=Merhaba,%20Comodo%20Dental%20Centre%20tedavileri%20ve%20randevu%20hakkında%20bilgi%20almak%20istiyorum." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={20} />
                <span>WhatsApp İle Sor</span>
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="hero-social-proof">
              <div className="rating-card">
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F6B400" color="#F6B400" />
                  ))}
                  <span className="rating-score">4.7 / 5</span>
                </div>
                <div className="rating-info">
                  <strong>Google & Trustpilot</strong> üzerinden 30+ doğrulanmış hasta yorumu
                </div>
              </div>

              <div className="experience-badge">
                <span className="exp-number">12+</span>
                <span className="exp-label">Yıllık Uzman Deneyimi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="hero-visual">
            <div className="hero-image-frame">
              <img 
                src="./images/clinic_hero.jpg" 
                alt="Comodo Dental Centre Modern Klinik" 
                className="hero-main-img" 
              />
              <div className="hero-img-gradient"></div>

              {/* Floating Doctor Badge */}
              <div className="floating-card doctor-card animate-float">
                <img 
                  src="./images/doctor_asim.jpg" 
                  alt="Uzm. Dt. Asım Özün" 
                  className="doctor-thumb" 
                />
                <div className="doctor-info">
                  <span className="doc-name">Uzm. Dt. Asım Özün</span>
                  <span className="doc-role">Diş Protez Uzmanı & Kurucu</span>
                  <span className="doc-stat">6.500+ Başarılı Tedavi</span>
                </div>
              </div>

              {/* Floating Technology Badge */}
              <div className="floating-card tech-card">
                <div className="tech-icon-wrap">
                  <Sparkles size={22} className="text-gold" />
                </div>
                <div className="tech-info">
                  <span className="tech-title">3D Dijital Tarayıcı</span>
                  <span className="tech-desc">Ölçü kaşığı yok, 2 dakikada dijital model</span>
                </div>
              </div>

              {/* Emergency Care Badge */}
              <div className="floating-card emergency-card">
                <div className="em-dot"></div>
                <div>
                  <div className="em-title">Konyaaltı Nöbetçi Diş</div>
                  <div className="em-desc">Acil Çağrı: 0507 8505 287</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 90vh;
          background-color: var(--color-primary-dark);
          color: #ffffff;
          display: flex;
          align-items: center;
          padding: 80px 0 100px 0;
          overflow: hidden;
        }
        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 80% 20%, rgba(93, 95, 239, 0.18) 0%, transparent 60%),
                      radial-gradient(circle at 10% 80%, rgba(246, 180, 0, 0.12) 0%, transparent 50%),
                      linear-gradient(180deg, rgba(15, 19, 26, 0.95) 0%, #191E26 100%);
          pointer-events: none;
        }
        .hero-container {
          position: relative;
          z-index: 10;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
        }
        .hero-badge {
          margin-bottom: 24px;
        }
        .text-gold {
          color: var(--color-accent);
        }
        .hero-headline {
          font-size: 3.5rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 22px;
        }
        .highlight-star {
          color: var(--color-accent);
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .star-svg-decoration {
          animation: pulseGlow 2s infinite ease-in-out;
        }
        .hero-description {
          font-size: 1.15rem;
          line-height: 1.75;
          color: #cbd5e1;
          margin-bottom: 28px;
          max-width: 640px;
        }
        .hero-description strong {
          color: #ffffff;
        }
        .hero-check-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 36px;
        }
        .check-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9375rem;
          color: #e2e8f0;
          font-weight: 500;
        }
        .check-icon {
          color: var(--color-accent);
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 48px;
        }
        .hero-cta-primary {
          box-shadow: 0 10px 30px rgba(246, 180, 0, 0.4);
        }
        .btn-whatsapp {
          background-color: #25D366;
          color: #ffffff;
          font-weight: 600;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3);
        }
        .btn-whatsapp:hover {
          background-color: #20bd5a;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(37, 211, 102, 0.4);
        }
        .hero-social-proof {
          display: flex;
          align-items: center;
          gap: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .rating-stars {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 4px;
        }
        .rating-score {
          font-weight: 700;
          margin-left: 6px;
          color: #ffffff;
          font-size: 0.9375rem;
        }
        .rating-info {
          font-size: 0.8125rem;
          color: #94a3b8;
        }
        .rating-info strong {
          color: #cbd5e1;
        }
        .experience-badge {
          display: flex;
          flex-direction: column;
          padding-left: 32px;
          border-left: 1px solid rgba(255, 255, 255, 0.12);
        }
        .exp-number {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-accent);
          line-height: 1;
        }
        .exp-label {
          font-size: 0.75rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 4px;
        }

        /* Right visual container */
        .hero-visual {
          position: relative;
        }
        .hero-image-frame {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: visible;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
        }
        .hero-main-img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: block;
        }
        .hero-img-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(15, 19, 26, 0.85) 100%);
          border-radius: var(--radius-xl);
          pointer-events: none;
        }

        /* Floating Cards */
        .floating-card {
          position: absolute;
          background: rgba(30, 36, 48, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-md);
          padding: 14px 18px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
          display: flex;
          align-items: center;
          gap: 14px;
          z-index: 20;
        }
        .doctor-card {
          top: -24px;
          right: -24px;
        }
        .doctor-thumb {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--color-accent);
        }
        .doctor-info {
          display: flex;
          flex-direction: column;
        }
        .doc-name {
          font-weight: 700;
          font-size: 0.9375rem;
          color: #ffffff;
        }
        .doc-role {
          font-size: 0.75rem;
          color: var(--color-accent);
          font-weight: 600;
        }
        .doc-stat {
          font-size: 0.6875rem;
          color: #94a3b8;
          margin-top: 2px;
        }
        .tech-card {
          bottom: 24px;
          left: -28px;
        }
        .tech-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: rgba(246, 180, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tech-info {
          display: flex;
          flex-direction: column;
        }
        .tech-title {
          font-weight: 700;
          font-size: 0.875rem;
          color: #ffffff;
        }
        .tech-desc {
          font-size: 0.75rem;
          color: #94a3b8;
        }
        .emergency-card {
          bottom: -24px;
          right: 24px;
          background: rgba(20, 24, 32, 0.95);
          border-color: rgba(239, 68, 68, 0.4);
        }
        .em-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #ef4444;
          box-shadow: 0 0 10px #ef4444;
          animation: pulseGlow 1.5s infinite;
        }
        .em-title {
          font-weight: 700;
          font-size: 0.8125rem;
          color: #ef4444;
        }
        .em-desc {
          font-size: 0.75rem;
          color: #e2e8f0;
          font-weight: 600;
        }

        @media (max-width: 1100px) {
          .hero-headline {
            font-size: 2.85rem;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .hero-visual {
            max-width: 580px;
            margin: 0 auto;
            width: 100%;
          }
        }
        @media (max-width: 768px) {
          .hero-headline {
            font-size: 2.25rem;
          }
          .hero-section {
            padding: 50px 0 80px 0;
          }
          .hero-social-proof {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .experience-badge {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 12px;
            width: 100%;
          }
          .floating-card {
            position: static;
            margin-top: 12px;
          }
          .hero-main-img {
            height: 380px;
          }
        }
      `}</style>
    </section>
  );
};
