import React, { useState } from 'react';
import { Sparkles, Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="iletisim" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag gold">
            <Sparkles size={14} />
            <span>İLETİŞİM & LOKASYON</span>
          </div>
          <h2 className="section-title">
            Bize Ulaşın, Gülüşünüze <span className="highlight-gold">Yıldız Katalım</span>
          </h2>
          <p className="section-subtitle">
            Merak ettiklerinizi sormak, ücretsiz ön görüşme planlamak veya kliniğimizi ziyaret etmek için bize dilediğiniz zaman ulaşabilirsiniz.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Info Cards & Map */}
          <div className="contact-info-col">
            <div className="info-cards-stack">
              <a href="tel:+905078505287" className="contact-info-card" title="Hemen Arayın">
                <div className="c-icon-wrap">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="c-label">Telefon & Acil Hat</span>
                  <strong className="c-val">0507 8505 287</strong>
                </div>
              </a>

              <a 
                href="https://wa.me/905078505287?text=Merhaba,%20kliniğinizle%20iletişime%20geçmek%20istiyorum." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-info-card whatsapp-card"
              >
                <div className="c-icon-wrap wp">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <span className="c-label">WhatsApp Canlı Destek</span>
                  <strong className="c-val">0507 8505 287</strong>
                </div>
              </a>

              <a href="mailto:iletisim@comododental.com" className="contact-info-card">
                <div className="c-icon-wrap">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="c-label">E-Posta</span>
                  <strong className="c-val">iletisim@comododental.com</strong>
                </div>
              </a>

              <div className="contact-info-card">
                <div className="c-icon-wrap">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="c-label">Klinik Adresi</span>
                  <strong className="c-val">Gürsu, Gazi Mustafa Kemal Blv. No:57/2, 07070 Konyaaltı / Antalya</strong>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="c-icon-wrap">
                  <Clock size={22} />
                </div>
                <div>
                  <span className="c-label">Çalışma Saatleri</span>
                  <strong className="c-val">Pzt - Cmt: 10:00 - 19:00 (Pazar: Acil Nöbet)</strong>
                </div>
              </div>
            </div>

            {/* Interactive Map Card */}
            <div className="clinic-map-card">
              <div className="map-header">
                <MapPin size={16} className="text-gold" />
                <span>Antalya Konyaaltı Kliniğimiz</span>
                <a 
                  href="https://maps.google.com/?q=Gürsu,Gazi+Mustafa+Kemal+Blv.+No:57/2,07070+Konyaaltı/Antalya" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="map-directions-link"
                >
                  Yol Tarifi Al ↗
                </a>
              </div>
              <iframe 
                title="Comodo Dental Centre Harita Konumu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.0776767667445!2d30.6387064!3d36.8643884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39178ad3a0c5b%3A0x7d6f5f9e8a8e3124!2sG%C3%BCrsu%2C%20Gazi%20Mustafa%20Kemal%20Blv.%20No%3A57%2F2%2C%2007070%20Konyaalt%C4%B1%2FAntalya!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%" 
                height="220" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-wrapper">
            <h3 className="form-card-title">İletişim Formu</h3>
            <p className="form-card-subtitle">
              Aşağıdaki formu doldurarak bize kolayca ulaşabilir, tedavi hakkında uzman görüşü talep edebilirsiniz.
            </p>

            {submitted ? (
              <div className="contact-success-box">
                <CheckCircle2 size={48} className="text-success" />
                <h4>Mesajınız Alındı!</h4>
                <p>En kısa sürede uzman hasta danışmanımız sizinle iletişime geçecektir.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="actual-contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Ad - Soyad *</label>
                    <input 
                      type="text" 
                      placeholder="Adınız Soyadınız"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Telefon Numarası *</label>
                    <input 
                      type="tel" 
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>E-posta Adresi</label>
                    <input 
                      type="email" 
                      placeholder="ornek@mail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Konu</label>
                    <input 
                      type="text" 
                      placeholder="Örn: Gülüş Tasarımı Fiyat Bilgisi"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Mesajınız</label>
                  <textarea 
                    rows={5}
                    placeholder="Tedavi talebinizi veya sormak istediklerinizi yazınız..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full">
                  <Send size={18} />
                  <span>Mesajı Gönder</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: #f1f5f9;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 40px;
        }
        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .info-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .contact-info-card {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: var(--shadow-sm);
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        .contact-info-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: #cbd5e1;
        }
        .contact-info-card.whatsapp-card {
          background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
          border-color: rgba(37, 211, 102, 0.3);
        }
        .c-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background-color: var(--color-brand-light);
          color: var(--color-brand);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .c-icon-wrap.wp {
          background-color: #dcfce7;
          color: #16a34a;
        }
        .c-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          font-weight: 700;
          display: block;
        }
        .c-val {
          font-size: 0.95rem;
          color: var(--color-primary);
        }
        .clinic-map-card {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        .map-header {
          padding: 14px 18px;
          background-color: #191e26;
          color: #ffffff;
          font-size: 0.8125rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .map-directions-link {
          color: var(--color-accent);
          text-decoration: underline;
        }
        .map-iframe {
          display: block;
        }

        /* Right Column Form */
        .contact-form-wrapper {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 40px;
          box-shadow: var(--shadow-lg);
        }
        .form-card-title {
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: 8px;
        }
        .form-card-subtitle {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          margin-bottom: 28px;
        }
        .actual-contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .form-group label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-main);
          margin-bottom: 6px;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-sm);
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
          transition: border-color var(--transition-fast);
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--color-brand);
        }
        .contact-success-box {
          text-align: center;
          padding: 60px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }
        .contact-success-box h4 {
          font-size: 1.5rem;
          color: var(--color-primary);
        }

        @media (max-width: 1040px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-form-wrapper {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  );
};
