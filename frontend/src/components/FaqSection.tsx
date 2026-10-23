import React, { useState } from 'react';
import { FAQS } from '../data/faqData';
import { Sparkles, Plus, Minus, Search, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="sss" className="section faq-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag gold">
            <Sparkles size={14} />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="section-title">
            Sık Sorulan <span className="highlight-gold">Sorular</span>
          </h2>
          <p className="section-subtitle">
            Antalya Konyaaltı kliniğimizdeki tedavi süreçleri, randevu alma ve gülüş tasarımı ile ilgili en çok merak edilen soruların yanıtları.
          </p>

          {/* Search Bar */}
          <div className="faq-search-wrapper">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Sorunuzu arayın (Örn: İmplant acıtır mı, Lamine ne kadar sürer?)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {filteredFaqs.length === 0 ? (
            <div className="faq-empty-state">
              <HelpCircle size={36} className="text-muted" />
              <p>Aramanızla eşleşen soru bulunamadı.</p>
              <a 
                href="https://wa.me/905078505287?text=Merhaba,%20kliniğinize%20bir%20soru%20sormak%20istiyorum." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-sm btn-whatsapp mt-2"
              >
                <MessageCircle size={15} />
                <span>Bize Doğrudan WhatsApp'tan Sorun</span>
              </a>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className={`faq-card ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="faq-question-btn" 
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <div className="faq-icon-pill">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  <div className={`faq-answer-container ${isOpen ? 'show' : ''}`}>
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <style>{`
        .faq-section {
          background-color: #ffffff;
        }
        .faq-search-wrapper {
          position: relative;
          max-width: 580px;
          margin: 28px auto 0 auto;
        }
        .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-muted);
        }
        .faq-search-input {
          width: 100%;
          padding: 14px 18px 14px 48px;
          border-radius: var(--radius-full);
          border: 1.5px solid var(--color-border);
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
          box-shadow: var(--shadow-sm);
          transition: border-color var(--transition-fast);
        }
        .faq-search-input:focus {
          border-color: var(--color-brand);
          box-shadow: 0 0 0 3px rgba(93, 95, 239, 0.15);
        }
        .faq-accordion-list {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .faq-card {
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          background-color: #ffffff;
          overflow: hidden;
          transition: all var(--transition-normal);
        }
        .faq-card:hover {
          border-color: #cbd5e1;
          box-shadow: var(--shadow-md);
        }
        .faq-card.open {
          border-color: var(--color-brand);
          box-shadow: 0 8px 24px rgba(93, 95, 239, 0.1);
        }
        .faq-question-btn {
          width: 100%;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          background: transparent;
        }
        .faq-question-text {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-primary);
          padding-right: 16px;
        }
        .faq-card.open .faq-question-text {
          color: var(--color-brand);
        }
        .faq-icon-pill {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-surface-subtle);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all var(--transition-fast);
        }
        .faq-card.open .faq-icon-pill {
          background: var(--color-brand);
          color: #ffffff;
        }
        .faq-answer-container {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease-out;
        }
        .faq-answer-container.show {
          max-height: 350px;
        }
        .faq-answer-inner {
          padding: 0 24px 22px 24px;
          font-size: 0.95rem;
          line-height: 1.75;
          color: var(--color-text-secondary);
          border-top: 1px solid var(--color-border-subtle);
          padding-top: 16px;
        }
        .faq-empty-state {
          text-align: center;
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .mt-2 {
          margin-top: 8px;
        }
      `}</style>
    </section>
  );
};
