import type { Doctor } from '../types';

export const DOCTORS: Doctor[] = [
  {
    id: 'uzm-dt-asim-ozun',
    name: 'Uzm. Dt. Asım Özün',
    title: 'Kurucu & Diş Protez Uzmanı (Prosthodontist)',
    specialization: 'Gülüş Tasarımı, Yaprak Lamine, Zirkonyum & Tam Çene İmplant Üstü Protezler',
    diploma: 'Ege Üniversitesi Diş Hekimliği Fakültesi (Lisans) & Protetik Diş Tedavisi Uzmanlığı',
    experienceYears: 12,
    surgeriesCount: '6.500+',
    bio: 'Comodo Dental Centre\'ın kurucusu olan Uzm. Dt. Asım Özün, protetik diş hekimliği ve estetik gülüş mimarisi alanında 12 yılı aşkın tecrübeye sahiptir. Yurt içi ve yurt dışından binlerce hastaya estetik ve fonksiyonel çözümler sunmuş; dijital diş hekimliği ve minimal invaziv lamine tekniklerinde öncü çalışmalara imza atmıştır.',
    image: './images/doctor_asim.jpg',
    workingDays: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    featured: true,
    socials: {
      instagram: 'https://instagram.com/comododental',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'uzm-dt-selin-demir',
    name: 'Uzm. Dt. Selin Demir',
    title: 'Ağız, Diş ve Çene Cerrahisi Uzmanı',
    specialization: 'Navigasyonlu Dental İmplant, All-on-4 / All-on-6, Gömülü 20\'lik Diş, Kemik Grefti',
    diploma: 'Hacettepe Üniversitesi Diş Hekimliği Fakültesi & Ağız, Diş ve Çene Cerrahisi Anabilim Dalı',
    experienceYears: 10,
    surgeriesCount: '4.800+',
    bio: 'Çene cerrahisi ve ileri implantoloji alanında uzmanlaşmış olan Uzm. Dt. Selin Demir; kemik yetersizliği olan vakalarda sinüs lifting, kemik tozu uygulamaları ve navigasyonlu dikişsiz implant cerrahilerini başarıyla yönetmektedir.',
    image: './images/doctor_selin.jpg',
    workingDays: ['Pazartesi', 'Salı', 'Çarşamba', 'Cuma', 'Cumartesi'],
    featured: true,
    socials: {
      instagram: 'https://instagram.com/comododental'
    }
  },
  {
    id: 'dt-kerem-yildiz',
    name: 'Dt. Kerem Yıldız',
    title: 'Estetik Diş Hekimi & Endodonti',
    specialization: 'Kanal Tedavisi, Estetik Kompozit Bonding, Lazerle Diş Beyazlatma, Şeffaf Plak',
    diploma: 'İstanbul Üniversitesi Diş Hekimliği Fakültesi',
    experienceYears: 8,
    surgeriesCount: '3.900+',
    bio: 'Koruyucu diş hekimliği, mikroskobik kanal tedavisi ve estetik kompozit bonding uygulamalarında uzman olan Dt. Kerem Yıldız, ağrısız ve konforlu hasta deneyimini her zaman en ön planda tutmaktadır.',
    image: './images/doctor_asim.jpg',
    workingDays: ['Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    featured: false,
    socials: {
      instagram: 'https://instagram.com/comododental'
    }
  }
];
