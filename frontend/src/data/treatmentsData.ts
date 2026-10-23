import type { Treatment } from '../types';

export const TREATMENTS: Treatment[] = [
  {
    id: 'yaprak-lamine-dis',
    title: 'Yaprak Lamine Diş',
    slug: 'yaprak-lamine-dis',
    category: 'estetik',
    categoryLabel: 'Estetik Diş Hekimliği',
    badge: 'En Popüler',
    popular: true,
    summary: 'Diş dokusuna minimum müdahale ile mükemmel beyazlık, doğal ışık geçirgenliği ve estetik bir gülüş.',
    description: 'Yaprak lamine (porselen lamina), dişlerin ön yüzeyine yapıştırılan ultra ince porselen tabakalardır. Diş dokusuna minimum aşındırma yapılarak ya da bazı durumlarda hiç aşındırma yapılmadan (prepless) uygulanır. Doğal diş minesi görünümünü birebir taklit eder ve leke tutmaz.',
    benefits: [
      'Minimum diş dokusu kaybı ile maksimum estetik',
      'Doğal diş minesi parlaklığı ve ışık geçirgenliği',
      'Kahve, çay veya sigara kaynaklı lekelere karşı direnç',
      'Ağrısız ve konforlu uygulama süreci',
      'Ortalama 10-15 yıl dayanıklılık ömrü'
    ],
    process: [
      'Dijital gülüş analizi ve 3D tasarım provası',
      'Gerekiyorsa mikro düzeyde minimal hazırlık',
      'Hassas dijital ölçüm ve laboratuvarda özel üretim',
      'Mock-up ile estetik prova ve hasta onayı',
      'Özel kompozit rezin ile kalıcı yapıştırma'
    ],
    duration: '2 - 3 Seans',
    sessionCount: '4 - 7 Gün',
    iconName: 'Sparkles',
    image: './images/smile_after.jpg'
  },
  {
    id: 'antalya-gulus-tasarimi',
    title: 'Antalya Gülüş Tasarımı (Hollywood Smile)',
    slug: 'antalya-gulus-tasarimi',
    category: 'estetik',
    categoryLabel: 'Estetik Diş Hekimliği',
    badge: 'Yıldız Gülüş',
    popular: true,
    summary: 'Yüz hatlarınıza, dudak yapınıza ve ten renginize özel olarak tasarlanan altın oranlı, kusursuz bir gülüş.',
    description: 'Gülüş tasarımı; dişlerin formu, rengi, dizilimi, diş eti seviyesi ve dudak uyumunu birlikte ele alan multidisipliner bir yaklaşımdır. Comodo Dental Centre olarak dijital gülüş tasarım yazılımlarımızla tedaviye başlamadan önce yeni gülüşünüzü 3 boyutlu olarak görmenizi sağlıyoruz.',
    benefits: [
      'Kişiye özel altın oran (Golden Proportion) hesaplaması',
      'Diş eti estetiği (pembe estetik) ile simetrik görünüm',
      'Tedavi öncesi 3D dijital modelleme ile sonucu önceden görme',
      'Genç, dinamik ve özgüven dolu bir yüz ifadesi',
      'Uluslararası standartlarda yüksek biyouyumluluk'
    ],
    process: [
      'Yüksek çözünürlüklü dijital fotoğraf & video çekimi',
      'Bilgisayar destekli estetik gülüş mimarisi',
      'Gerekli diş eti şekillendirme (gingivoplasti)',
      'Lamine veya Zirkonyum restorasyonlarının uygulanması',
      'Son kapanış kontrolleri ve gülüş fotoğrafı'
    ],
    duration: '2 - 4 Seans',
    sessionCount: '5 - 8 Gün',
    iconName: 'Smile',
    image: './images/clinic_hero.jpg'
  },
  {
    id: 'zirkonyum-dis-kaplama',
    title: 'Zirkonyum Diş Kaplama',
    slug: 'zirkonyum-dis-kaplama',
    category: 'estetik',
    categoryLabel: 'Protez & Estetik',
    badge: 'Yüksek Dayanıklılık',
    popular: true,
    summary: 'Metal desteksiz, yüksek biyouyumluluk ve çiğneme direncine sahip estetik kaplama çözümü.',
    description: 'Zirkonyum kaplama, beyaz renkli zirkonyum oksit altyapı üzerine işlenen porselen restorasyonudur. Geleneksel metal destekli kaplamalara göre diş eti kenarında koyu renkli çizgi oluşturmaz ve alerji riski taşımaz. Hem ön hem de arka dişlerde güvenle uygulanır.',
    benefits: [
      'Metalsiz altyapı sayesinde diş eti morarması yapmaz',
      'Çiğneme kuvvetlerine karşı olağanüstü dayanıklılık',
      'Isı yalıtımı yüksek olduğu için sıcak-soğuk hassasiyeti minimumdur',
      'Doku dostu (biyouyumlu) yapı ile sağlıklı diş etleri',
      'Işık geçirgenliği ile doğal diş görünümü'
    ],
    process: [
      'Ağız içi muayene ve dişlerin minimal şekillendirilmesi',
      'Dijital ağız içi tarayıcı ile hassas ölçü alma',
      'Geçici dişlerin hemen aynı gün takılması',
      'Zirkonyum altyapı provası ve renk eşleştirme',
      'Kalıcı simantasyon ve pürüzsüz cila'
    ],
    duration: '2 - 3 Seans',
    sessionCount: '3 - 5 Gün',
    iconName: 'ShieldCheck',
    image: './images/smile_before.jpg'
  },
  {
    id: 'cene-cerrahisi-dental-implant',
    title: 'Çene Cerrahisi & Dental İmplant',
    slug: 'cene-cerrahisi-dental-implant',
    category: 'cerrahi',
    categoryLabel: 'Ağız & Çene Cerrahisi',
    badge: 'Ömür Boyu Garanti',
    popular: true,
    summary: 'Eksik dişlerinizi komşu dişlere dokunmadan doğal kök işlevi gören titanyum implantlarla tamamlayın.',
    description: 'Dental implant, çene kemiğine yerleştirilen ve gerçek diş kökünü taklit eden saf titanyum vidadır. Kliniğimizde 3D dental tomografi eşliğinde cerrahi rehber (navigasyonlu implant) teknolojisiyle ağrısız, şişliksiz ve milimetrik doğrulukla yerleştirilir.',
    benefits: [
      'Komşu sağlam dişler küçültülmez ve korunur',
      'Çene kemiği erimesini engelleyen kök stimülasyonu',
      'Kendi doğal dişiniz gibi güçlü çiğneme ve konuşma konforu',
      'Dünyaca kabul görmüş FDA ve CE onaylı implant markaları',
      'Tek diş eksikliğinden tam çene (All-on-4 / All-on-6) çözümlere kadar'
    ],
    process: [
      '3D CBCT Volümetrik Tomografi ile kemik kalitesi ölçümü',
      'Kişiye özel dijital cerrahi şablon hazırlanması',
      'Lokal anestezi altında 10-15 dakikada implant yerleşimi',
      'Osseointegrasyon (kemik kaynama) süreci',
      'Üst yapı (Zirkonyum/Porselen kron) montajı'
    ],
    duration: '1 Cerrahi Seans + Protez',
    sessionCount: 'Aynı Gün İmplant',
    iconName: 'Target',
    image: './images/doctor_selin.jpg'
  },
  {
    id: 'kanal-tedavisi',
    title: 'Modern Kanal Tedavisi (Endodonti)',
    slug: 'kanal-tedavisi',
    category: 'genel',
    categoryLabel: 'Koruyucu Diş Hekimliği',
    badge: 'Dişinizi Kurtarın',
    summary: 'Ağrılı ve enfekte dişlerinizi çekilmekten kurtaran mikroskop ve döner alet destekli konforlu tedavi.',
    description: 'Derin çürük veya travma nedeniyle dişin sinir-damar paketinin (pulpa) enfekte olduğu durumlarda uygulanır. Son teknoloji apex locator ve rotary nikel-titanyum eğelerle diş kök kanalları sterilize edilerek sızdırmaz şekilde doldurulur.',
    benefits: [
      'Doğal dişin ağızda kalmasını ve çekilmesini önler',
      'Ağrısız lokal anestezi ile konforlu işlem',
      'Tek seansta tamamlanabilen rotary sistemler',
      'Çene kemiğindeki apikal kist ve enfeksiyonların iyileşmesi'
    ],
    process: [
      'Dijital röntgen ile kök anatomisinin tespiti',
      'Ağrısız anestezi ve çürük dokunun temizlenmesi',
      'Kök kanallarının genişletilmesi ve dezenfeksiyonu',
      'Biyouyumlu güta-perka ile kanal dolgusu',
      'Üst restorasyon veya onlay dolgu ile dişi güçlendirme'
    ],
    duration: '1 - 2 Seans',
    sessionCount: '45 - 60 Dakika',
    iconName: 'HeartPulse',
    image: './images/doctor_asim.jpg'
  },
  {
    id: 'nobetci-acil-dis-hizmetleri',
    title: 'Nöbetçi & Acil Diş Hizmetleri',
    slug: 'nobetci-acil-dis-hizmetleri',
    category: 'acil',
    categoryLabel: 'Acil Diş Tedavisi',
    badge: 'Hızlı Müdahale',
    summary: 'Şiddetli diş ağrısı, kırık, travma ve düşen kaplamalar için Antalya Konyaaltı nöbetçi acil müdahale.',
    description: 'Beklenmedik anlarda gelişen diş ağrısı, kaza sonucu kırılan dişler, yerinden çıkan protezler veya apseler için Comodo Dental Centre acil protokolümüz devreye girer. Hızlı randevu ve öncelikli müdahale ile anında rahatlama sağlanır.',
    benefits: [
      'Aynı gün ve hızlı acil muayene kabulü',
      'Ağrıyı anında kesen acil sedasyon ve anestezi',
      'Kırılan diş parçalarının acil replantasyonu ve onarımı',
      'Acil WhatsApp ve telefon destek hattı'
    ],
    process: [
      'Acil durum tespiti ve hızlı dijital radyoloji',
      'Ağrıyı durdurmaya yönelik lokal müdahale',
      'Enfeksiyon varsa drenaj ve medikasyon',
      'Kalıcı tedavi için ayrıntılı planlama'
    ],
    duration: 'Anında Müdahale',
    sessionCount: 'Öncelikli Seans',
    iconName: 'AlertCircle',
    image: './images/clinic_hero.jpg'
  },
  {
    id: 'lazerle-dis-beyazlatma',
    title: 'Ofis Tipi Lazerle Diş Beyazlatma (Bleaching)',
    slug: 'lazerle-dis-beyazlatma',
    category: 'estetik',
    categoryLabel: 'Estetik Diş Hekimliği',
    badge: '3-8 Ton Açılma',
    summary: 'Klinik ortamında sadece 45 dakikada güvenli, diş minesi dostu ve göz alıcı parlak beyazlık.',
    description: 'Özel beyazlatıcı jellerin profesyonel LED/Lazer ışık kaynağıyla aktive edilmesiyle uygulanır. Diş minesine hiçbir zarar vermeden dişin derinliklerine işlemiş sigara, kahve, çay lekelerini kalıcı olarak nötralize eder.',
    benefits: [
      '45 dakikada 4 ila 8 ton renk açılması',
      'Diş hekimi gözetiminde güvenli ve kontrollü uygulama',
      'Diş minesinde aşınma yapmayan pH nötr formül',
      'Özel hassasiyet giderici jeller ile konforlu seans'
    ],
    process: [
      'Diş taşı temizliği ve polisaj ile yüzey hazırlığı',
      'Diş etlerini koruyucu özel bariyer uygulanması',
      'Beyazlatıcı jelin dişe sürülmesi ve lazer aktivasyonu (3x15 dk)',
      'Hassasiyet önleyici koruyucu cila uygulaması'
    ],
    duration: 'Tek Seans',
    sessionCount: '45 - 60 Dakika',
    iconName: 'Sun',
    image: './images/smile_after.jpg'
  },
  {
    id: 'seffaf-plak-ortodonti',
    title: 'Şeffaf Plak Tedavisi (Telsiz Ortodonti)',
    slug: 'seffaf-plak-ortodonti',
    category: 'genel',
    categoryLabel: 'Ortodonti',
    badge: 'Görünmez Tel',
    summary: 'Metal diş telleri olmadan, çıkarılabilir şeffaf plaklar ile çapraşık dişlerinizi kusursuz hizalayın.',
    description: 'Görünmez şeffaf hizalayıcılar (aligner), dışarıdan bakıldığında neredeyse hiç fark edilmeyen modern ortodontik çözümdür. Yemek yerken veya fırçalarken kolayca çıkartılabilir, sosyal hayatınızı kısıtlamaz.',
    benefits: [
      'Dışarıdan fark edilmeyen şeffaf ve estetik tasarım',
      'İstenildiğinde çıkartılabilir maksimum konfor',
      'Yemek yerken tel kısıtlaması yok',
      'Daha az klinik ziyareti ve dijital takip imkanı'
    ],
    process: [
      '3D ağız içi tarayıcı ile dijital diş kalıbı',
      'Tedavi sonunu simüle eden sanal video planlaması',
      'Kişiye özel seri plakların üretimi',
      'Plakların 7-10 günde bir sırayla değiştirilmesi'
    ],
    duration: '4 - 12 Ay',
    sessionCount: 'Aylık Kontrol',
    iconName: 'RotateCw',
    image: './images/doctor_asim.jpg'
  }
];
