import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickFeatures } from './components/QuickFeatures';
import { TreatmentsSection } from './components/TreatmentsSection';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { AboutSection } from './components/AboutSection';
import { DoctorsSection } from './components/DoctorsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { AppointmentModal } from './components/AppointmentModal';
import { MyAppointmentsModal } from './components/MyAppointmentsModal';
import type { Treatment, Doctor, Appointment } from './types';

export const App: React.FC = () => {
  // Appointment Modals State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMyAppointmentsOpen, setIsMyAppointmentsOpen] = useState(false);
  const [detailTreatment, setDetailTreatment] = useState<Treatment | null>(null);

  // Pre-selected parameters for booking
  const [preSelectedTreatment, setPreSelectedTreatment] = useState<Treatment | null>(null);
  const [preSelectedDoctor, setPreSelectedDoctor] = useState<Doctor | null>(null);

  // Language state
  const [currentLang, setCurrentLang] = useState<'TR' | 'EN'>('TR');

  // Appointments in localStorage
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('dental_appointments');
      if (stored) {
        setAppointments(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleOpenBooking = (treatment?: Treatment, doctor?: Doctor) => {
    setPreSelectedTreatment(treatment || null);
    setPreSelectedDoctor(doctor || null);
    setIsBookingOpen(true);
  };

  const handleAppointmentCreated = (newApp: Appointment) => {
    setAppointments(prev => [newApp, ...prev]);
  };

  const handleCancelAppointment = (id: string) => {
    const updated = appointments.filter(a => a.id !== id);
    setAppointments(updated);
    localStorage.setItem('dental_appointments', JSON.stringify(updated));
  };

  return (
    <div className="app-root">
      {/* 1. Announcement & Quick Contact Top Bar */}
      <TopBar 
        currentLang={currentLang}
        onLangChange={(lang) => setCurrentLang(lang)}
        onOpenAppointments={() => setIsMyAppointmentsOpen(true)}
        appointmentCount={appointments.length}
      />

      {/* 2. Sticky Glassmorphism Header */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()}
        onOpenAppointments={() => setIsMyAppointmentsOpen(true)}
        appointmentCount={appointments.length}
      />

      {/* 3. Hero Section with Gold Branding & Doctor Preview */}
      <Hero 
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 4. Quick Features Bar */}
      <QuickFeatures 
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 5. Comprehensive Treatments Section */}
      <TreatmentsSection 
        onSelectTreatmentForBooking={(treatment) => handleOpenBooking(treatment)}
        onOpenTreatmentDetail={(treatment) => setDetailTreatment(treatment)}
      />

      {/* 6. Interactive Smile Before & After Slider */}
      <BeforeAfterSlider 
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 7. About Clinic & Statistics Section */}
      <AboutSection 
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 8. Doctors & Team Section */}
      <DoctorsSection 
        onSelectDoctorForBooking={(doctor) => handleOpenBooking(undefined, doctor)}
      />

      {/* 9. Real Patient Testimonials & Google / Trustpilot Carousel */}
      <ReviewsSection />

      {/* 10. Frequently Asked Questions (FAQ) Accordion */}
      <FaqSection />

      {/* 11. Contact & Interactive Location Map Section */}
      <ContactSection />

      {/* 12. Full-featured Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 13. Floating Action Buttons (Desktop Stack & Mobile Sticky Bottom Bar) */}
      <FloatingActions 
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* MODALS */}
      {/* A. Comprehensive Multi-Step Appointment Booking Wizard */}
      <AppointmentModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedTreatment={preSelectedTreatment}
        preSelectedDoctor={preSelectedDoctor}
        onAppointmentCreated={handleAppointmentCreated}
      />

      {/* B. My Appointments Management Drawer */}
      <MyAppointmentsModal 
        isOpen={isMyAppointmentsOpen}
        onClose={() => setIsMyAppointmentsOpen(false)}
        appointments={appointments}
        onCancelAppointment={handleCancelAppointment}
        onNewBookingClick={() => {
          setIsMyAppointmentsOpen(false);
          handleOpenBooking();
        }}
      />

      {/* C. Treatment Deep Dive Detail Modal */}
      <TreatmentDetailModal 
        treatment={detailTreatment}
        onClose={() => setDetailTreatment(null)}
        onBookTreatment={(treatment) => {
          setDetailTreatment(null);
          handleOpenBooking(treatment);
        }}
      />
    </div>
  );
};

export default App;
