import React from 'react';
import { DOCTORS } from '../data/doctorsData';
import type { Doctor } from '../types';
import { Sparkles, Calendar, GraduationCap, Award, ArrowUpRight } from 'lucide-react';

interface DoctorsSectionProps {
  onSelectDoctorForBooking: (doctor: Doctor) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onSelectDoctorForBooking }) => {
  return (
    <section id="hekimler" className="section doctors-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag gold">
            <Sparkles size={14} />
            <span>Uzman Kadromuz</span>
          </div>
          <h2 className="section-title">
            Konyaaltı Diş Hekimlerimizle <span className="highlight-gold">Tanışın</span>
          </h2>
          <p className="section-subtitle">
            Gülüşünüzü emanet edeceğiniz deneyimli ve güvenilir uzman kadromuz. Kurucumuz ve Diş Protez Uzmanı Uzm. Dt. Asım Özün liderliğinde her hastamıza kişiselleştirilmiş tedavi sunuyoruz.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="doctors-grid">
          {DOCTORS.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              {/* Doctor Photo Wrapper */}
              <div className="doctor-photo-wrap">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="doctor-photo" 
                  loading="lazy"
                />
                <div className="doctor-badge-overlay">
                  <span className="doc-experience">{doctor.experienceYears} Yıllık Deneyim</span>
                  <span className="doc-cases">{doctor.surgeriesCount} Vaka</span>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="doctor-content">
                <h3 className="doctor-name">{doctor.name}</h3>
                <span className="doctor-title">{doctor.title}</span>

                <div className="doctor-edu">
                  <GraduationCap size={16} className="edu-icon" />
                  <span>{doctor.diploma}</span>
                </div>

                <p className="doctor-bio">{doctor.bio}</p>

                {/* Specialties */}
                <div className="doctor-specialty-box">
                  <div className="spec-header">
                    <Award size={14} className="spec-icon" />
                    <strong>Uzmanlık Alanları:</strong>
                  </div>
                  <p className="spec-text">{doctor.specialization}</p>
                </div>

                {/* Working Days */}
                <div className="doctor-days">
                  <span className="days-label">Klinik Günleri:</span>
                  <div className="days-tags">
                    {doctor.workingDays.map((day, i) => (
                      <span key={i} className="day-tag">{day.slice(0, 3)}</span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="doctor-actions">
                  <button 
                    onClick={() => onSelectDoctorForBooking(doctor)}
                    className="btn btn-accent btn-sm w-full"
                  >
                    <Calendar size={15} />
                    <span>Hemen Randevu Al</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .doctors-section {
          background-color: #ffffff;
        }
        .doctors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .doctor-card {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          transition: all var(--transition-normal);
        }
        .doctor-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: #cbd5e1;
        }
        .doctor-photo-wrap {
          position: relative;
          height: 340px;
          overflow: hidden;
          background-color: #191e26;
        }
        .doctor-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.6s ease;
        }
        .doctor-card:hover .doctor-photo {
          transform: scale(1.05);
        }
        .doctor-badge-overlay {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          display: flex;
          justify-content: space-between;
          z-index: 10;
        }
        .doc-experience {
          background: rgba(25, 30, 38, 0.9);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .doc-cases {
          background: var(--color-accent);
          color: #191e26;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
        }
        .doctor-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .doctor-name {
          font-size: 1.4rem;
          color: var(--color-primary);
          margin-bottom: 4px;
        }
        .doctor-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-brand);
          margin-bottom: 12px;
        }
        .doctor-edu {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.8125rem;
          color: var(--color-text-secondary);
          margin-bottom: 14px;
          line-height: 1.4;
        }
        .edu-icon {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .doctor-bio {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--color-text-secondary);
          margin-bottom: 16px;
        }
        .doctor-specialty-box {
          background-color: var(--color-surface-subtle);
          padding: 12px 14px;
          border-radius: var(--radius-sm);
          margin-bottom: 14px;
          font-size: 0.8125rem;
        }
        .spec-header {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--color-primary);
          margin-bottom: 4px;
        }
        .spec-icon {
          color: var(--color-brand);
        }
        .spec-text {
          color: var(--color-text-secondary);
          line-height: 1.4;
        }
        .doctor-days {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: 20px;
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px solid var(--color-border-subtle);
        }
        .days-label {
          color: var(--color-text-muted);
          font-weight: 600;
        }
        .days-tags {
          display: flex;
          gap: 4px;
        }
        .day-tag {
          background: #e2e8f0;
          color: var(--color-text-main);
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 600;
        }
        .doctor-actions {
          margin-top: 8px;
        }
        .w-full {
          width: 100%;
        }

        @media (max-width: 1040px) {
          .doctors-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 680px) {
          .doctors-grid {
            grid-template-columns: 1fr;
          }
          .doctor-photo-wrap {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};
