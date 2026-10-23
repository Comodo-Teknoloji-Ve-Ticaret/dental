import type { Review } from '../types';

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    patientName: 'Güneş Özkan',
    patientCity: 'Antalya',
    rating: 5,
    date: '12 Ekim 2026',
    source: 'google',
    treatmentName: 'Antalya Gülüş Tasarımı',
    verified: true,
    doctorAttended: 'Uzm. Dt. Asım Özün',
    comment: 'Comodo Dental Centre\'a geldiğimden beri çocukluğumdan kalan diş hekimi korkum tamamen bitti! Ekip o kadar ilgili, güler yüzlü ve anlayışlı ki kendimi evimde gibi hissettim. Yapılan lamine dişlerimin doğallığına herkes hayran kaldı. Artık özgürce gülebiliyorum!'
  },
  {
    id: 'rev-2',
    patientName: 'Tuğba Bulut',
    patientCity: 'İstanbul / Antalya',
    rating: 5,
    date: '28 Eylül 2026',
    source: 'google',
    treatmentName: 'Yaprak Lamine Diş',
    verified: true,
    doctorAttended: 'Uzm. Dt. Asım Özün',
    comment: 'Dişlerimdeki renklenme ve hafif çapraşıklık yüzünden fotoğraf çektirirken gülümsemekten çekiniyordum. Bir arkadaşımın tavsiyesiyle Asım Bey ile tanıştım ve iyi ki gelmişim. Gülüşüm gerçekten bir yıldıza dönüştü! Konyaaltı\'ndaki klinik ortamı da son derece steril ve lüks.'
  },
  {
    id: 'rev-3',
    patientName: 'Gönül Çelik',
    patientCity: 'Antalya',
    rating: 5,
    date: '15 Ağustos 2026',
    source: 'trustpilot',
    treatmentName: 'Dental İmplant & Zirkonyum',
    verified: true,
    doctorAttended: 'Uzm. Dt. Selin Demir',
    comment: 'Dr. Asım Özün ve Dr. Selin Hanım\'ın profesyonelliği ve samimiyeti beni çok etkiledi. İmplant sürecimde hiç acı hissetmedim, her adımı detaylıca anlattılar. Çiğneme konforuma ve estetik görünüme yeniden kavuştum. Sonsuz teşekkürler.'
  },
  {
    id: 'rev-4',
    patientName: 'Bahar Öztürk',
    patientCity: 'İzmir',
    rating: 5,
    date: '04 Temmuz 2026',
    source: 'google',
    treatmentName: 'Ofis Tipi Diş Beyazlatma',
    verified: true,
    doctorAttended: 'Dt. Kerem Yıldız',
    comment: 'Comodo Dental Centre\'ın hizmet kalitesi ve hasta yaklaşımı gerçekten takdire şayan. 1 saat gibi kısa bir sürede yapılan beyazlatma ile dişlerim inanılmaz bir ışıltı kazandı. Hiçbir hassasiyet yaşamadım. Kesinlikle doğru adres!'
  },
  {
    id: 'rev-5',
    patientName: 'David Miller',
    patientCity: 'Londra, İngiltere',
    rating: 5,
    date: '19 Haziran 2026',
    source: 'trustpilot',
    treatmentName: 'Full Mouth Hollywood Smile',
    verified: true,
    doctorAttended: 'Uzm. Dt. Asım Özün',
    comment: 'Traveled from the UK to Antalya specifically for Comodo Dental Centre after extensive research. The precision, digital 3D scans, and Dr. Asım Özün\'s artistry surpassed London high-street clinics at a fraction of the cost. Extraordinary hospitality and seamless organization!'
  },
  {
    id: 'rev-6',
    patientName: 'Mehmet Karaca',
    patientCity: 'Antalya Konyaaltı',
    rating: 5,
    date: '02 Mayıs 2026',
    source: 'google',
    treatmentName: 'Nöbetçi Acil Diş Tedavisi',
    verified: true,
    doctorAttended: 'Dt. Kerem Yıldız',
    comment: 'Pazar akşamı aniden başlayan şiddetli diş ağrım için ulaştım. Hemen kabul ettiler ve kanal tedavisi ile ağrımı dakikalar içinde kestiler. Nöbetçi acil hizmetleri gerçekten hayat kurtarıyor.'
  }
];
