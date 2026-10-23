import React, { useState, useEffect } from 'react';
import type { Treatment, Doctor, Appointment } from '../types';
import { TREATMENTS } from '../data/treatmentsData';
import { DOCTORS } from '../data/doctorsData';
import { 
  X, Check, Calendar as CalendarIcon, Clock, User, Phone, Mail, 
  MessageSquare, CheckCircle2, ArrowRight, ArrowLeft,
  Share2, Printer, MapPin
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedTreatment?: Treatment | null;
  preSelectedDoctor?: Doctor | null;
  onAppointmentCreated: (appointment: Appointment) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preSelectedTreatment,
  preSelectedDoctor,
  onAppointmentCreated
}) => {
  // Wizard Steps: 1: Treatment, 2: Doctor, 3: Date & Slot, 4: Patient Info, 5: Confirmation
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Selected State
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');

  // Patient Info Form
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [language, setLanguage] = useState<'TR' | 'EN' | 'DE' | 'RU'>('TR');

  // Completed Appointment
  const [createdAppointment, setCreatedAppointment] = useState<Appointment | null>(null);

  // Error States
  const [errorMsg, setErrorMsg] = useState('');

  // Sync pre-selected props
  useEffect(() => {
    if (preSelectedTreatment) {
      setSelectedTreatment(preSelectedTreatment);
      setCurrentStep(2);
    } else {
      setSelectedTreatment(TREATMENTS[0]);
    }

    if (preSelectedDoctor) {
      setSelectedDoctor(preSelectedDoctor);
      setCurrentStep(3);
    } else {
      setSelectedDoctor(DOCTORS[0]);
    }

    // Default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setSelectedDate(dateStr);
    setSelectedTimeSlot('11:00');
  }, [preSelectedTreatment, preSelectedDoctor, isOpen]);

  if (!isOpen) return null;

  // Available Time Slots
  const morningSlots = ['10:00', '10:30', '11:00', '11:45', '12:30'];
  const afternoonSlots = ['14:00', '14:45', '15:30', '16:15', '17:00', '18:00'];

  const handleNextStep = () => {
    setErrorMsg('');
    if (currentStep === 1 && !selectedTreatment) {
      setErrorMsg('Lütfen bir tedavi seçiniz.');
      return;
    }
    if (currentStep === 2 && !selectedDoctor) {
      setErrorMsg('Lütfen randevu almak istediğiniz hekimi seçiniz.');
      return;
    }
    if (currentStep === 3) {
      if (!selectedDate) {
        setErrorMsg('Lütfen randevu tarihi seçiniz.');
        return;
      }
      if (!selectedTimeSlot) {
        setErrorMsg('Lütfen saat dilimi seçiniz.');
        return;
      }
    }
    if (currentStep === 4) {
      if (!fullName.trim() || fullName.trim().length < 3) {
        setErrorMsg('Lütfen adınızı ve soyadınızı eksiksiz giriniz.');
        return;
      }
      if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
        setErrorMsg('Lütfen geçerli bir telefon numarası giriniz (Örn: 0507 8505 287).');
        return;
      }

      // Generate Appointment
      const randomCode = `ADC-${Math.floor(1000 + Math.random() * 9000)}`;
      const newApp: Appointment = {
        id: 'app_' + Date.now(),
        code: randomCode,
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        treatmentId: selectedTreatment?.id || '',
        treatmentTitle: selectedTreatment?.title || 'Genel Diş Muayenesi',
        doctorId: selectedDoctor?.id || '',
        doctorName: selectedDoctor?.name || 'Uzm. Dt. Asım Özün',
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        notes: notes.trim(),
        preferredLanguage: language,
        status: 'onaylandi',
        createdAt: new Date().toISOString()
      };

      // Save to localStorage
      const existing = JSON.parse(localStorage.getItem('dental_appointments') || '[]');
      existing.unshift(newApp);
      localStorage.setItem('dental_appointments', JSON.stringify(existing));

      setCreatedAppointment(newApp);
      onAppointmentCreated(newApp);
      setCurrentStep(5);
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setErrorMsg('');
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const handleReset = () => {
    setCurrentStep(1);
    setCreatedAppointment(null);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleReset}>
      <div className="modal-container appointment-wizard" onClick={(e) => e.stopPropagation()}>
        {/* Wizard Top Bar */}
        <div className="wizard-header">
          <div className="wizard-title-group">
            <span className="badge-tag gold">ONLINE RANDEVU SİSTEMİ</span>
            <h2 className="wizard-title">
              {currentStep === 5 ? 'Randevunuz Başarıyla Oluşturuldu!' : 'Comodo Dental Centre Randevu Sihirbazı'}
            </h2>
          </div>
          <button className="modal-close-btn" onClick={handleReset} aria-label="Kapat">
            <X size={20} />
          </button>
        </div>

        {/* Step Progress Bar (Hidden on confirmation step 5) */}
        {currentStep < 5 && (
          <div className="wizard-progress">
            <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
              <div className="step-circle">{currentStep > 1 ? <Check size={14} /> : '1'}</div>
              <span>Tedavi</span>
            </div>
            <div className={`progress-line ${currentStep >= 2 ? 'active' : ''}`}></div>
            <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
              <div className="step-circle">{currentStep > 2 ? <Check size={14} /> : '2'}</div>
              <span>Hekim</span>
            </div>
            <div className={`progress-line ${currentStep >= 3 ? 'active' : ''}`}></div>
            <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
              <div className="step-circle">{currentStep > 3 ? <Check size={14} /> : '3'}</div>
              <span>Tarih & Saat</span>
            </div>
            <div className={`progress-line ${currentStep >= 4 ? 'active' : ''}`}></div>
            <div className={`progress-step ${currentStep >= 4 ? 'active' : ''}`}>
              <div className="step-circle">4</div>
              <span>Hasta Bilgisi</span>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && (
          <div className="wizard-error-banner">
            <span>⚠️ {errorMsg}</span>
          </div>
        )}

        {/* Wizard Body Steps */}
        <div className="wizard-body">
          {/* STEP 1: Treatment Selection */}
          {currentStep === 1 && (
            <div className="step-content">
              <h3 className="step-heading">Hangi Tedavi İçin Randevu Almak İstiyorsunuz?</h3>
              <p className="step-subheading">Aşağıdaki seçeneklerden birini işaretleyiniz:</p>
              
              <div className="treatments-selection-grid">
                {TREATMENTS.map((treatment) => (
                  <div 
                    key={treatment.id}
                    className={`treatment-select-card ${selectedTreatment?.id === treatment.id ? 'selected' : ''}`}
                    onClick={() => setSelectedTreatment(treatment)}
                  >
                    <div className="select-card-radio">
                      <div className="radio-dot"></div>
                    </div>
                    <div className="select-card-info">
                      <span className="select-card-badge">{treatment.categoryLabel}</span>
                      <h4 className="select-card-title">{treatment.title}</h4>
                      <p className="select-card-desc">{treatment.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Doctor Selection */}
          {currentStep === 2 && (
            <div className="step-content">
              <h3 className="step-heading">Muayene Olmak İstediğiniz Hekimi Seçiniz</h3>
              <p className="step-subheading">Uzman hekim kadromuzdan dilediğinizi tercih edebilirsiniz:</p>

              <div className="doctors-selection-grid">
                {DOCTORS.map((doctor) => (
                  <div 
                    key={doctor.id}
                    className={`doctor-select-card ${selectedDoctor?.id === doctor.id ? 'selected' : ''}`}
                    onClick={() => setSelectedDoctor(doctor)}
                  >
                    <img src={doctor.image} alt={doctor.name} className="doctor-select-avatar" />
                    <div className="doctor-select-details">
                      <h4 className="doctor-select-name">{doctor.name}</h4>
                      <span className="doctor-select-role">{doctor.title}</span>
                      <span className="doctor-select-exp">🏆 {doctor.experienceYears} Yıl Deneyim • {doctor.surgeriesCount} Vaka</span>
                      <div className="doctor-select-days">
                        {doctor.workingDays.slice(0, 4).join(', ')}...
                      </div>
                    </div>
                    <div className="select-card-check">
                      {selectedDoctor?.id === doctor.id && <CheckCircle2 size={24} className="text-gold" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Date & Slot Selection */}
          {currentStep === 3 && (
            <div className="step-content">
              <h3 className="step-heading">Tarih ve Saat Dilimi Belirleyin</h3>
              <p className="step-subheading">Kliniğimiz Pazartesi - Cumartesi 10:00 - 19:00 saatleri arasında açıktır.</p>

              <div className="datetime-picker-grid">
                {/* Date Input */}
                <div className="date-picker-box">
                  <label className="input-label">
                    <CalendarIcon size={16} />
                    <span>Randevu Tarihi:</span>
                  </label>
                  <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="date-input-field" 
                  />
                  <div className="date-hint">
                    Seçilen Hekim: <strong>{selectedDoctor?.name}</strong>
                  </div>
                </div>

                {/* Time Slot Picker */}
                <div className="slots-picker-box">
                  <label className="input-label">
                    <Clock size={16} />
                    <span>Uygun Saat Dilimleri:</span>
                  </label>

                  {/* Morning Slots */}
                  <div className="slots-period-group">
                    <span className="period-title">Sabah Seansları</span>
                    <div className="slots-grid">
                      {morningSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={`slot-chip ${selectedTimeSlot === slot ? 'selected' : ''}`}
                          onClick={() => setSelectedTimeSlot(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Afternoon Slots */}
                  <div className="slots-period-group">
                    <span className="period-title">Öğleden Sonra Seansları</span>
                    <div className="slots-grid">
                      {afternoonSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={`slot-chip ${selectedTimeSlot === slot ? 'selected' : ''}`}
                          onClick={() => setSelectedTimeSlot(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Patient Info */}
          {currentStep === 4 && (
            <div className="step-content">
              <h3 className="step-heading">İletişim & Hasta Bilgilerinizi Giriniz</h3>
              <p className="step-subheading">Randevu onayınız ve hatırlatma mesajınız için bu bilgiler gereklidir.</p>

              <div className="patient-form-grid">
                <div className="form-field">
                  <label className="form-label">Adınız ve Soyadınız *</label>
                  <div className="input-with-icon">
                    <User size={18} className="field-icon" />
                    <input 
                      type="text" 
                      placeholder="Örn: Ayşe Yılmaz" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="form-input" 
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label">Telefon Numaranız *</label>
                  <div className="input-with-icon">
                    <Phone size={18} className="field-icon" />
                    <input 
                      type="tel" 
                      placeholder="05XX XXX XX XX" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-input" 
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label">E-Posta Adresiniz (İsteğe Bağlı)</label>
                  <div className="input-with-icon">
                    <Mail size={18} className="field-icon" />
                    <input 
                      type="email" 
                      placeholder="ornek@mail.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input" 
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label">Dil Tercihiniz</label>
                  <div className="lang-options">
                    {(['TR', 'EN', 'DE', 'RU'] as const).map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        className={`lang-option-chip ${language === lang ? 'active' : ''}`}
                        onClick={() => setLanguage(lang)}
                      >
                        {lang === 'TR' ? '🇹🇷 Türkçe' : lang === 'EN' ? '🇬🇧 English' : lang === 'DE' ? '🇩🇪 Deutsch' : '🇷🇺 Русский'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-field full-width">
                  <label className="form-label">Şikayetiniz veya Belirtmek İstediğiniz Not</label>
                  <div className="input-with-icon">
                    <MessageSquare size={18} className="field-icon textarea-icon" />
                    <textarea 
                      rows={3}
                      placeholder="Varsa diş ağrınız, önceki tedavileriniz veya sormak istedikleriniz..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="form-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Summary Preview Box */}
              <div className="appointment-summary-preview">
                <div className="preview-item">
                  <span className="p-label">Seçilen Tedavi:</span>
                  <strong>{selectedTreatment?.title}</strong>
                </div>
                <div className="preview-item">
                  <span className="p-label">Seçilen Hekim:</span>
                  <strong>{selectedDoctor?.name}</strong>
                </div>
                <div className="preview-item">
                  <span className="p-label">Tarih & Saat:</span>
                  <strong>{selectedDate} - Saat {selectedTimeSlot}</strong>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Confirmation Ticket Card */}
          {currentStep === 5 && createdAppointment && (
            <div className="step-content confirmation-content">
              <div className="success-badge-anim">
                <CheckCircle2 size={56} className="text-success" />
              </div>

              <h3 className="confirm-title">Randevunuz Onaylandı!</h3>
              <p className="confirm-sub">
                Sayın <strong>{createdAppointment.fullName}</strong>, Comodo Dental Centre randevu kaydınız başarıyla oluşturulmuştur.
              </p>

              {/* Appointment Boarding Pass / Ticket */}
              <div className="appointment-ticket" id="appointment-ticket-card">
                <div className="ticket-top">
                  <div className="ticket-brand">
                    <span className="t-brand-main">COMODO DENTAL CENTRE</span>
                    <span className="t-brand-sub">ANTALYA KONYAALTI DİŞ KLİNİĞİ</span>
                  </div>
                  <div className="ticket-code-badge">
                    <span className="code-label">Randevu Kodu:</span>
                    <span className="code-value">{createdAppointment.code}</span>
                  </div>
                </div>

                <div className="ticket-body">
                  <div className="ticket-detail">
                    <span className="td-label">Hasta:</span>
                    <span className="td-val">{createdAppointment.fullName}</span>
                  </div>
                  <div className="ticket-detail">
                    <span className="td-label">Telefon:</span>
                    <span className="td-val">{createdAppointment.phone}</span>
                  </div>
                  <div className="ticket-detail">
                    <span className="td-label">Tedavi:</span>
                    <span className="td-val highlight">{createdAppointment.treatmentTitle}</span>
                  </div>
                  <div className="ticket-detail">
                    <span className="td-label">Hekim:</span>
                    <span className="td-val">{createdAppointment.doctorName}</span>
                  </div>
                  <div className="ticket-detail">
                    <span className="td-label">Tarih:</span>
                    <span className="td-val highlight">{createdAppointment.date}</span>
                  </div>
                  <div className="ticket-detail">
                    <span className="td-label">Saat:</span>
                    <span className="td-val highlight">{createdAppointment.timeSlot}</span>
                  </div>
                  <div className="ticket-detail full">
                    <span className="td-label">Klinik Adresi:</span>
                    <span className="td-val">
                      <MapPin size={13} className="text-gold" /> Gürsu, Gazi Mustafa Kemal Blv. No:57/2, Konyaaltı / Antalya
                    </span>
                  </div>
                </div>

                <div className="ticket-footer">
                  <span>ℹ️ Lütfen randevu saatinizden 10 dakika önce kliniğimizde olunuz.</span>
                </div>
              </div>

              {/* Action Buttons for Confirmation */}
              <div className="confirmation-actions">
                <a
                  href={`https://wa.me/905078505287?text=Merhaba,%20${createdAppointment.code}%20kodlu%20randevumu%20${createdAppointment.date}%20tarihi%20ve%20saat%20${createdAppointment.timeSlot}%20için%20onaylatmak%20istiyorum.%20Adım:%20${encodeURIComponent(createdAppointment.fullName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <Share2 size={16} />
                  <span>WhatsApp ile Onay Bildirimi Gönder</span>
                </a>

                <button 
                  onClick={() => window.print()}
                  className="btn btn-outline"
                >
                  <Printer size={16} />
                  <span>Randevu Kartını Yazdır / Kaydet</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Wizard Footer Navigation */}
        <div className="wizard-footer">
          {currentStep > 1 && currentStep < 5 && (
            <button onClick={handlePrevStep} className="btn btn-outline">
              <ArrowLeft size={16} />
              <span>Geri</span>
            </button>
          )}

          {currentStep < 4 && (
            <button onClick={handleNextStep} className="btn btn-primary ml-auto">
              <span>İleri</span>
              <ArrowRight size={16} />
            </button>
          )}

          {currentStep === 4 && (
            <button onClick={handleNextStep} className="btn btn-accent btn-lg ml-auto">
              <CheckCircle2 size={18} />
              <span>Randevuyu Onayla & Tamamla</span>
            </button>
          )}

          {currentStep === 5 && (
            <button onClick={handleReset} className="btn btn-primary btn-lg w-full">
              <span>Tamamla & Kapat</span>
            </button>
          )}
        </div>
      </div>

      <style>{`
        .appointment-wizard {
          max-width: 780px;
          width: 100%;
        }
        .wizard-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 24px 28px;
          border-bottom: 1px solid var(--color-border);
          background: #f8fafc;
        }
        .wizard-title {
          font-size: 1.5rem;
          color: var(--color-primary);
          margin-top: 4px;
        }
        .wizard-progress {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 28px;
          background: #ffffff;
          border-bottom: 1px solid var(--color-border);
        }
        .progress-step {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
        }
        .progress-step.active {
          color: var(--color-brand);
        }
        .step-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #e2e8f0;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8125rem;
          font-weight: 700;
          transition: all var(--transition-fast);
        }
        .progress-step.active .step-circle {
          background: var(--color-brand);
          color: #ffffff;
        }
        .progress-line {
          flex: 1;
          height: 2px;
          background: #e2e8f0;
          margin: 0 12px;
        }
        .progress-line.active {
          background: var(--color-brand);
        }
        .wizard-error-banner {
          background-color: #fef2f2;
          color: #b91c1c;
          padding: 12px 28px;
          font-size: 0.875rem;
          font-weight: 600;
          border-bottom: 1px solid #fecaca;
        }
        .wizard-body {
          padding: 28px;
          max-height: 60vh;
          overflow-y: auto;
        }
        .step-heading {
          font-size: 1.25rem;
          color: var(--color-primary);
          margin-bottom: 6px;
        }
        .step-subheading {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          margin-bottom: 22px;
        }
        
        /* Step 1 Styles */
        .treatments-selection-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .treatment-select-card {
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 14px 16px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          cursor: pointer;
          transition: all var(--transition-fast);
          background-color: #ffffff;
        }
        .treatment-select-card:hover {
          border-color: #94a3b8;
          background-color: #f8fafc;
        }
        .treatment-select-card.selected {
          border-color: var(--color-accent);
          background-color: var(--color-accent-light);
          box-shadow: 0 4px 14px rgba(246, 180, 0, 0.2);
        }
        .select-card-radio {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .treatment-select-card.selected .select-card-radio {
          border-color: #925800;
        }
        .radio-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: transparent;
        }
        .treatment-select-card.selected .radio-dot {
          background: #925800;
        }
        .select-card-badge {
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--color-brand);
          text-transform: uppercase;
        }
        .select-card-title {
          font-size: 0.95rem;
          color: var(--color-primary);
          margin: 2px 0;
        }
        .select-card-desc {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
          line-height: 1.4;
        }

        /* Step 2 Doctors */
        .doctors-selection-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .doctor-select-card {
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          transition: all var(--transition-fast);
          background-color: #ffffff;
        }
        .doctor-select-card:hover {
          border-color: #94a3b8;
          background-color: #f8fafc;
        }
        .doctor-select-card.selected {
          border-color: var(--color-accent);
          background-color: var(--color-accent-light);
          box-shadow: 0 4px 14px rgba(246, 180, 0, 0.2);
        }
        .doctor-select-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--color-accent);
          flex-shrink: 0;
        }
        .doctor-select-details {
          flex-grow: 1;
        }
        .doctor-select-name {
          font-size: 1.05rem;
          color: var(--color-primary);
        }
        .doctor-select-role {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-brand);
          display: block;
        }
        .doctor-select-exp {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
          display: block;
          margin-top: 2px;
        }
        .doctor-select-days {
          font-size: 0.6875rem;
          color: var(--color-text-muted);
          margin-top: 2px;
        }

        /* Step 3 DateTime */
        .datetime-picker-grid {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 24px;
        }
        .input-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 8px;
        }
        .date-input-field {
          width: 100%;
          padding: 12px 14px;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-sm);
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
        }
        .date-input-field:focus {
          border-color: var(--color-brand);
        }
        .date-hint {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin-top: 10px;
        }
        .slots-period-group {
          margin-bottom: 16px;
        }
        .period-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }
        .slots-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
        }
        .slot-chip {
          padding: 10px 8px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          background-color: #ffffff;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-primary);
          text-align: center;
          transition: all var(--transition-fast);
        }
        .slot-chip:hover {
          border-color: var(--color-brand);
          background-color: var(--color-brand-light);
        }
        .slot-chip.selected {
          background-color: var(--color-brand);
          color: #ffffff;
          border-color: var(--color-brand);
          box-shadow: 0 4px 10px rgba(93, 95, 239, 0.3);
        }

        /* Step 4 Form */
        .patient-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
        }
        .form-field.full-width {
          grid-column: 1 / -1;
        }
        .form-label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-main);
          margin-bottom: 6px;
        }
        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }
        .field-icon {
          position: absolute;
          left: 14px;
          color: var(--color-text-muted);
        }
        .field-icon.textarea-icon {
          top: 12px;
        }
        .form-input {
          width: 100%;
          padding: 12px 14px 12px 42px;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-sm);
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
          transition: border-color var(--transition-fast);
        }
        .form-input:focus {
          border-color: var(--color-brand);
        }
        .form-textarea {
          width: 100%;
          padding: 12px 14px 12px 42px;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-sm);
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
          resize: vertical;
        }
        .form-textarea:focus {
          border-color: var(--color-brand);
        }
        .lang-options {
          display: flex;
          gap: 6px;
        }
        .lang-option-chip {
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          font-size: 0.75rem;
          font-weight: 600;
          background-color: #ffffff;
        }
        .lang-option-chip.active {
          background-color: var(--color-brand-light);
          border-color: var(--color-brand);
          color: var(--color-brand);
        }
        .appointment-summary-preview {
          margin-top: 20px;
          padding: 16px;
          background-color: #f1f5f9;
          border-radius: var(--radius-md);
          display: flex;
          justify-content: space-between;
          font-size: 0.8125rem;
        }
        .preview-item {
          display: flex;
          flex-direction: column;
        }
        .p-label {
          color: var(--color-text-muted);
          font-size: 0.7rem;
        }

        /* Step 5 Confirmation */
        .confirmation-content {
          text-align: center;
          padding: 10px 0;
        }
        .success-badge-anim {
          margin-bottom: 12px;
        }
        .text-success {
          color: var(--color-success);
        }
        .confirm-title {
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: 6px;
        }
        .confirm-sub {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }
        .appointment-ticket {
          background: #ffffff;
          border: 2px dashed #cbd5e1;
          border-radius: var(--radius-lg);
          padding: 24px;
          box-shadow: var(--shadow-md);
          text-align: left;
          margin-bottom: 24px;
        }
        .ticket-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 16px;
          margin-bottom: 16px;
        }
        .ticket-brand {
          display: flex;
          flex-direction: column;
        }
        .t-brand-main {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--color-primary);
        }
        .t-brand-sub {
          font-size: 0.6875rem;
          color: var(--color-accent);
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .ticket-code-badge {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .code-label {
          font-size: 0.7rem;
          color: var(--color-text-muted);
        }
        .code-value {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-brand);
          letter-spacing: 0.05em;
        }
        .ticket-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 16px;
        }
        .ticket-detail {
          display: flex;
          flex-direction: column;
        }
        .ticket-detail.full {
          grid-column: 1 / -1;
        }
        .td-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }
        .td-val {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .td-val.highlight {
          color: var(--color-brand);
          font-weight: 700;
        }
        .ticket-footer {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
          background-color: var(--color-surface-subtle);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
        }
        .confirmation-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
        }

        /* Wizard Footer */
        .wizard-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 28px;
          border-top: 1px solid var(--color-border);
          background-color: #f8fafc;
        }
        .ml-auto {
          margin-left: auto;
        }

        @media (max-width: 768px) {
          .treatments-selection-grid,
          .datetime-picker-grid,
          .patient-form-grid,
          .ticket-body {
            grid-template-columns: 1fr;
          }
          .slots-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .confirmation-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};
