import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Calendar, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

interface BeforeAfterSliderProps {
  onOpenBooking: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenBooking }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // Only if mouse button is pressed
      handleMove(e.clientX);
    }
  };

  return (
    <section id="oncesi-sonrasi" className="section section-dark before-after-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag dark">
            <Sparkles size={14} className="text-gold" />
            <span>Gülüş Dönüşümleri</span>
          </div>
          <h2 className="section-title">
            Öncesi ve Sonrası: <span className="highlight-gold">Yıldızlaşan Gülüşler</span>
          </h2>
          <p className="section-subtitle">
            Uzm. Dt. Asım Özün ve uzman ekibimizin gerçekleştirdiği estetik porselen lamine ve gülüş tasarımı vakasını interaktif olarak kaydırarak keşfedin.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="slider-wrapper-card">
          <div className="slider-main-grid">
            {/* The Draggable Slider Box */}
            <div 
              className="ba-viewer-container"
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Full background) */}
              <img 
                src="./images/smile_after.jpg" 
                alt="Tedavi Sonrası Estetik Gülüş" 
                className="ba-img ba-after-img" 
                draggable={false}
              />
              <span className="ba-label ba-label-after">SONRASI (Hollywood Smile)</span>

              {/* Before Image (Clipped by slider percentage) */}
              <div 
                className="ba-before-wrap"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src="./images/smile_before.jpg" 
                  alt="Tedavi Öncesi Doğal Gülüş" 
                  className="ba-img ba-before-img" 
                  draggable={false}
                />
                <span className="ba-label ba-label-before">ÖNCESİ</span>
              </div>

              {/* Slider Divider Handle Line */}
              <div 
                className="ba-divider-line"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="ba-handle-circle">
                  <ArrowLeftRight size={18} />
                </div>
              </div>

              {/* Range Input for accessibility & mobile */}
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderPosition} 
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="ba-range-input"
                aria-label="Öncesi ve sonrası görsel karşılaştırma kaydırıcısı"
              />
            </div>

            {/* Case Details Card */}
            <div className="case-details-card">
              <span className="case-badge">Vaka İncelemesi #ADC-104</span>
              <h3 className="case-title">Porselen Lamine & Dijital Pembe Estetik</h3>
              <p className="case-desc">
                Hastamız ön dişlerindeki renk tonu farklılıkları ve aşınma şikayeti ile kliniğimize başvurdu. Dijital gülüş analizi sonrası 6 üye E-max yaprak lamine ve diş eti seviyeleme uygulandı.
              </p>

              <div className="case-highlights">
                <div className="case-point">
                  <CheckCircle2 size={18} className="text-gold" />
                  <div>
                    <strong>Tedavi Süresi:</strong>
                    <span> Sadece 5 gün (2 klinik seans)</span>
                  </div>
                </div>
                <div className="case-point">
                  <CheckCircle2 size={18} className="text-gold" />
                  <div>
                    <strong>Kullanılan Materyal:</strong>
                    <span> %100 Biyouyumlu E-max Porselen</span>
                  </div>
                </div>
                <div className="case-point">
                  <CheckCircle2 size={18} className="text-gold" />
                  <div>
                    <strong>Hekim:</strong>
                    <span> Uzm. Dt. Asım Özün (Protez Uzmanı)</span>
                  </div>
                </div>
                <div className="case-point">
                  <CheckCircle2 size={18} className="text-gold" />
                  <div>
                    <strong>Anestezi & Ağrı:</strong>
                    <span> İğnesiz lokal anestezi, sıfır ağrı</span>
                  </div>
                </div>
              </div>

              <div className="case-cta-wrap">
                <button onClick={onOpenBooking} className="btn btn-accent btn-lg w-full">
                  <Calendar size={18} />
                  <span>Siz de Yeni Bir Gülüşe Adım Atın</span>
                </button>
                <span className="case-guarantee-note">
                  🔒 Kliniğimizde uygulanan tüm lamineler 5 yıl resmi garanti kapsamındadır.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .before-after-section {
          background-color: #141820;
          position: relative;
        }
        .slider-wrapper-card {
          background: rgba(25, 30, 38, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-xl);
          padding: 36px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
        }
        .slider-main-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
        }
        .ba-viewer-container {
          position: relative;
          width: 100%;
          height: 440px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.15);
          user-select: none;
          touch-action: none;
        }
        .ba-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }
        .ba-before-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .ba-divider-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background-color: #ffffff;
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
          pointer-events: none;
          z-index: 15;
          transform: translateX(-50%);
        }
        .ba-handle-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--color-accent);
          color: #191e26;
          box-shadow: 0 0 20px rgba(246, 180, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        .ba-label {
          position: absolute;
          bottom: 18px;
          padding: 6px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          z-index: 10;
          backdrop-filter: blur(8px);
        }
        .ba-label-before {
          left: 18px;
          background: rgba(15, 23, 42, 0.85);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .ba-label-after {
          right: 18px;
          background: rgba(246, 180, 0, 0.95);
          color: #191e26;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        .ba-range-input {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: ew-resize;
          z-index: 20;
        }
        .case-details-card {
          display: flex;
          flex-direction: column;
        }
        .case-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .case-title {
          font-size: 1.8rem;
          color: #ffffff;
          margin-bottom: 16px;
          line-height: 1.25;
        }
        .case-desc {
          color: #cbd5e1;
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .case-highlights {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          margin-bottom: 28px;
        }
        .case-point {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.9375rem;
          color: #e2e8f0;
        }
        .case-point strong {
          color: #ffffff;
        }
        .case-cta-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .case-guarantee-note {
          font-size: 0.75rem;
          color: #94a3b8;
          text-align: center;
        }
        .w-full {
          width: 100%;
        }

        @media (max-width: 1040px) {
          .slider-main-grid {
            grid-template-columns: 1fr;
          }
          .ba-viewer-container {
            height: 360px;
          }
        }
        @media (max-width: 640px) {
          .slider-wrapper-card {
            padding: 20px;
          }
          .ba-viewer-container {
            height: 280px;
          }
        }
      `}</style>
    </section>
  );
};
