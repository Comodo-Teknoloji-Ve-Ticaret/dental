import React from 'react';
import { Phone, Mail, MapPin, Clock, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="footer-dark">
      {/* Top CTA Strip */}
      <div className="footer-cta-strip">
        <div className="container footer-cta-inner">
          <div>
            <h3 className="cta-strip-title">Işıltılı Bir Gülüş İçin İlk Adımı Atın</h3>
            <p className="cta-strip-sub">Antalya Konyaaltı kliniğimizde ücretsiz ön muayene ve dijital analiz için randevunuzu hemen oluşturun.</p>
          </div>
          <button onClick={onOpenBooking} className="btn btn-accent btn-lg">
            <span>Online Randevu Al</span>
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container footer-main">
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div className="footer-col brand-col">
            <div className="footer-brand-logo">
              <div className="f-logo-icon">
                <Sparkles size={18} className="text-gold" />
              </div>
              <div className="f-brand-text">
                <span className="f-brand-name">COMODO DENTAL</span>
                <span className="f-brand-sub">CENTRE • KONYAALTI</span>
              </div>
            </div>

            <p className="footer-tagline">
              "Gülüşünüz Bizimle Bir Yıldıza Dönüşür!"
            </p>
            <p className="footer-about-text">
              En yeni teknoloji, dijital 3D tasarım ve Uzm. Dt. Asım Özün liderliğinde Antalya Konyaaltı’nda gülüşünüz için en yüksek standartlarda diş hizmeti veriyoruz.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Hızlı Menü</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Ana Sayfa</a></li>
              <li><a href="#hakkimizda">Hakkımızda</a></li>
              <li><a href="#hekimler">Hekimlerimiz</a></li>
              <li><a href="#oncesi-sonrasi">Öncesi ve Sonrası</a></li>
              <li><a href="#yorumlar">Hasta Yorumları</a></li>
              <li><a href="#sss">Sıkça Sorulan Sorular</a></li>
              <li><a href="#iletisim">İletişim</a></li>
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div className="footer-col">
            <h4 className="footer-col-title">Tedavilerimiz</h4>
            <ul className="footer-links-list">
              <li><a href="#tedaviler">Yaprak Lamine Diş</a></li>
              <li><a href="#tedaviler">Antalya Gülüş Tasarımı</a></li>
              <li><a href="#tedaviler">Zirkonyum Diş Kaplama</a></li>
              <li><a href="#tedaviler">Çene Cerrahisi & İmplant</a></li>
              <li><a href="#tedaviler">Modern Kanal Tedavisi</a></li>
              <li><a href="#tedaviler">Lazerle Diş Beyazlatma</a></li>
              <li><a href="#tedaviler">Şeffaf Plak (Invisalign)</a></li>
              <li><a href="#tedaviler">Nöbetçi Acil Diş Hekimi</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="footer-col">
            <h4 className="footer-col-title">İletişim & Adres</h4>
            <div className="footer-contact-items">
              <a href="tel:+905078505287" className="f-contact-item">
                <Phone size={16} className="f-icon" />
                <span>0507 8505 287</span>
              </a>
              <a href="mailto:iletisim@comododental.com" className="f-contact-item">
                <Mail size={16} className="f-icon" />
                <span>iletisim@comododental.com</span>
              </a>
              <div className="f-contact-item">
                <MapPin size={18} className="f-icon" />
                <span>Gürsu, Gazi Mustafa Kemal Blv. No:57/2, 07070 Konyaaltı / Antalya</span>
              </div>
              <div className="f-contact-item">
                <Clock size={16} className="f-icon" />
                <span>Pzt - Cmt: 10:00 - 19:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="footer-disclaimer">
          <p>
            ⚠️ <strong>Yasal Bilgilendirme:</strong> Bu web sitesindeki tüm içerikler, görseller ve açıklamalar yalnızca genel bilgilendirme amacıyla hazırlanmıştır. Sitede yer alan bilgiler hekim muayenesi ve teşhisi yerine geçemez. Sağlık sorunlarınız, tanı ve tedavi protokolleri için lütfen uzman diş hekiminize başvurunuz.
          </p>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="footer-bottom">
          <div className="copyright-text">
            © {new Date().getFullYear()} Comodo Dental Centre. Tüm hakları saklıdır.
          </div>
          <div className="deployment-note">
            <span>Powered with TypeScript & React • GitHub Pages Ready</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-dark {
          background-color: var(--color-primary-dark);
          color: #94a3b8;
          font-size: 0.9375rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 70px; /* Space for mobile bar */
        }
        .footer-cta-strip {
          background: linear-gradient(135deg, #191E26 0%, #202444 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 40px 0;
        }
        .footer-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .cta-strip-title {
          font-size: 1.6rem;
          color: #ffffff;
          margin-bottom: 6px;
        }
        .cta-strip-sub {
          color: #cbd5e1;
          font-size: 1rem;
        }
        .footer-main {
          padding-top: 60px;
          padding-bottom: 30px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr 1.3fr;
          gap: 40px;
          margin-bottom: 50px;
        }
        .footer-brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .f-logo-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: rgba(246, 180, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .f-brand-text {
          display: flex;
          flex-direction: column;
        }
        .f-brand-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.15rem;
          color: #ffffff;
        }
        .f-brand-sub {
          font-size: 0.6875rem;
          color: var(--color-accent);
          font-weight: 700;
          letter-spacing: 0.08em;
        }
        .footer-tagline {
          font-size: 1rem;
          color: var(--color-accent);
          font-weight: 700;
          margin-bottom: 12px;
        }
        .footer-about-text {
          font-size: 0.875rem;
          line-height: 1.7;
          color: #cbd5e1;
        }
        .footer-col-title {
          font-size: 1.1rem;
          color: #ffffff;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 10px;
        }
        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background-color: var(--color-accent);
        }
        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links-list li a {
          color: #cbd5e1;
          font-size: 0.875rem;
          transition: color var(--transition-fast), padding-left var(--transition-fast);
          display: inline-block;
        }
        .footer-links-list li a:hover {
          color: var(--color-accent);
          padding-left: 6px;
        }
        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .f-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #cbd5e1;
          font-size: 0.875rem;
          line-height: 1.5;
        }
        .f-icon {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 3px;
        }
        .footer-disclaimer {
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          margin-bottom: 30px;
          font-size: 0.75rem;
          line-height: 1.6;
          color: #94a3b8;
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.8125rem;
          color: #64748b;
        }
        .deployment-note {
          color: #94a3b8;
        }

        @media (max-width: 1040px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer-cta-inner {
            flex-direction: column;
            text-align: center;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
