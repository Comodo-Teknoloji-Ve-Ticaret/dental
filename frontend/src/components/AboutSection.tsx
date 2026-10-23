import React from 'react';
import { Sparkles, CheckCircle2, Award, Users, HeartHandshake, Shield } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="hakkimizda" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visuals & Experience Pill */}
          <div className="about-visuals">
            <div className="about-image-stack">
              <img 
                src="./images/clinic_hero.jpg" 
                alt="Comodo Dental Centre Antalya Klinik" 
                className="about-img-main" 
              />
              <img 
                src="./images/smile_after.jpg" 
                alt="Doğal Gülüş Estetiği" 
                className="about-img-sub animate-float" 
              />

              {/* Floating Experience Badge */}
              <div className="about-stat-badge">
                <span className="badge-years">10+</span>
                <span className="badge-text">Yıllık Klinik Deneyimi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="about-text-content">
            <div className="badge-tag gold">
              <Sparkles size={14} />
              <span>HAKKIMIZDA</span>
            </div>
            <h2 className="section-title">
              Gülüşünüzü Birlikte <br />
              <span className="highlight-gold">Tasarlıyoruz</span>
            </h2>

            <p className="about-lead">
              Gülüşünüzün sadece sağlıklı değil, estetik olarak da ışıldaması için buradayız. Comodo Dental Centre olarak, protetik diş hekimliği uzmanlığımız ve gelişmiş dijital altyapımızla en iyi halinize ulaşmanıza rehberlik ediyoruz.
            </p>
            <p className="about-paragraph">
              Antalya Konyaaltı'ndaki modern kliniğimizde; her hastamızı kendi ailemizden biri gibi karşılıyor, diş hekimi korkusunu ortadan kaldıran şeffaf, samimi ve ağrısız tedavi protokolleri uyguluyoruz.
            </p>

            {/* Checklist */}
            <div className="about-checklist">
              <div className="about-check">
                <CheckCircle2 size={18} className="about-check-icon" />
                <span>Kişiye Özel Dijital Gülüş Tasarımı</span>
              </div>
              <div className="about-check">
                <CheckCircle2 size={18} className="about-check-icon" />
                <span>3D Çene Tomografisi & Dikişsiz İmplant</span>
              </div>
              <div className="about-check">
                <CheckCircle2 size={18} className="about-check-icon" />
                <span>Uluslararası Sağlık Turizmi Standartları</span>
              </div>
            </div>

            {/* Numerical Stats Grid */}
            <div className="about-stats-grid">
              <div className="about-stat-box">
                <div className="stat-icon-wrap">
                  <Award size={20} />
                </div>
                <span className="stat-number">%98</span>
                <span className="stat-title">Başarılı Tedavi</span>
                <span className="stat-desc">Klinik vaka oranı</span>
              </div>

              <div className="about-stat-box">
                <div className="stat-icon-wrap">
                  <HeartHandshake size={20} />
                </div>
                <span className="stat-number">%99</span>
                <span className="stat-title">Hasta Memnuniyeti</span>
                <span className="stat-desc">Google & Trustpilot</span>
              </div>

              <div className="about-stat-box">
                <div className="stat-icon-wrap">
                  <Users size={20} />
                </div>
                <span className="stat-number">15.000+</span>
                <span className="stat-title">Gülüş Dönüşümü</span>
                <span className="stat-desc">Yurt içi ve dışı</span>
              </div>

              <div className="about-stat-box">
                <div className="stat-icon-wrap">
                  <Shield size={20} />
                </div>
                <span className="stat-number">5 Yıl</span>
                <span className="stat-title">Resmi Garanti</span>
                <span className="stat-desc">Protez ve lamineler</span>
              </div>
            </div>

            {/* Founder Quote Card */}
            <div className="founder-quote-card">
              <img 
                src="./images/doctor_asim.jpg" 
                alt="Uzm. Dt. Asım Özün" 
                className="founder-avatar" 
              />
              <div className="founder-info">
                <p className="founder-quote">
                  "Bizim için diş hekimliği sadece bir tedavi değil; kişinin özgüvenini ve hayata bakışını değiştiren bir sanattır."
                </p>
                <div className="founder-signature">
                  <strong>Uzm. Dt. Asım Özün</strong>
                  <span>Kurucu & Diş Protez Uzmanı</span>
                </div>
                <button onClick={onOpenBooking} className="btn btn-accent btn-sm mt-3">
                  <span>Hekimimizden Randevu Al</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: #f8fafc;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 60px;
          align-items: center;
        }
        .about-visuals {
          position: relative;
        }
        .about-image-stack {
          position: relative;
          padding-bottom: 40px;
        }
        .about-img-main {
          width: 88%;
          height: 480px;
          object-fit: cover;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          border: 4px solid #ffffff;
        }
        .about-img-sub {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 220px;
          height: 220px;
          object-fit: cover;
          border-radius: var(--radius-lg);
          border: 6px solid #ffffff;
          box-shadow: var(--shadow-xl);
        }
        .about-stat-badge {
          position: absolute;
          top: 24px;
          left: -20px;
          background: var(--color-primary);
          color: #ffffff;
          padding: 16px 22px;
          border-radius: var(--radius-md);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          border-left: 4px solid var(--color-accent);
        }
        .badge-years {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-accent);
          line-height: 1;
        }
        .badge-text {
          font-size: 0.75rem;
          color: #cbd5e1;
          font-weight: 600;
          margin-top: 4px;
        }
        .about-lead {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--color-primary);
          line-height: 1.7;
          margin-bottom: 14px;
        }
        .about-paragraph {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }
        .about-checklist {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }
        .about-check {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-main);
        }
        .about-check-icon {
          color: var(--color-accent);
          flex-shrink: 0;
        }
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 36px;
        }
        .about-stat-box {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 18px 14px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
        }
        .stat-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background-color: var(--color-brand-light);
          color: var(--color-brand);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }
        .stat-number {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1.1;
        }
        .stat-title {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-top: 4px;
        }
        .stat-desc {
          font-size: 0.6875rem;
          color: var(--color-text-muted);
          margin-top: 2px;
        }
        .founder-quote-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: var(--shadow-md);
        }
        .founder-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--color-accent);
          flex-shrink: 0;
        }
        .founder-quote {
          font-size: 0.9375rem;
          font-style: italic;
          color: var(--color-text-main);
          line-height: 1.5;
          margin-bottom: 8px;
        }
        .founder-signature {
          display: flex;
          flex-direction: column;
        }
        .founder-signature strong {
          font-size: 0.9rem;
          color: var(--color-primary);
        }
        .founder-signature span {
          font-size: 0.75rem;
          color: var(--color-accent);
          font-weight: 600;
        }

        @media (max-width: 1040px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-visuals {
            max-width: 500px;
            margin: 0 auto;
          }
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .about-img-main {
            width: 100%;
            height: 340px;
          }
          .about-img-sub {
            width: 150px;
            height: 150px;
          }
          .founder-quote-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};
