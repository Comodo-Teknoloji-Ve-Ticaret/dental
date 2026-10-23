export interface Treatment {
  id: string;
  title: string;
  slug: string;
  category: 'estetik' | 'cerrahi' | 'genel' | 'acil';
  categoryLabel: string;
  badge: string;
  summary: string;
  description: string;
  benefits: string[];
  process: string[];
  duration: string;
  sessionCount: string;
  iconName: string;
  image: string;
  popular?: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialization: string;
  diploma: string;
  experienceYears: number;
  surgeriesCount: string;
  bio: string;
  image: string;
  workingDays: string[];
  featured?: boolean;
  socials?: {
    instagram?: string;
    linkedin?: string;
  };
}

export interface TimeSlot {
  time: string;
  available: boolean;
  period: 'sabah' | 'ogleden-sonra';
}

export interface Appointment {
  id: string;
  code: string;
  fullName: string;
  phone: string;
  email: string;
  treatmentId: string;
  treatmentTitle: string;
  doctorId: string;
  doctorName: string;
  date: string;
  timeSlot: string;
  notes?: string;
  preferredLanguage: 'TR' | 'EN' | 'DE' | 'RU';
  status: 'beklemede' | 'onaylandi' | 'tamamlandi' | 'iptal';
  createdAt: string;
}

export interface Review {
  id: string;
  patientName: string;
  patientCity: string;
  rating: number;
  date: string;
  source: 'google' | 'trustpilot';
  comment: string;
  treatmentName: string;
  verified: boolean;
  doctorAttended?: string;
}

export interface FAQItem {
  id: string;
  category: 'genel' | 'tedavi' | 'randevu' | 'fiyat';
  question: string;
  answer: string;
}

export interface ClinicStat {
  value: string;
  label: string;
  sublabel: string;
}
