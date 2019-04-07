var words = [
    {
    "arabic": "أنا",
    "french": "je suis",
    "phonetics": "ana"
  },
  {
    "arabic": "أنا فرنسي",
    "french": "je suis français",
    "phonetics": "ana faransi"
  },
  {
    "arabic": "أنا سعيد",
    "french": "je suis heureux",
    "phonetics": "ana saeid"
  },
  {
    "arabic": "أنا مسرور",
    "french": "je suis content",
    "phonetics": "ana masrur"
  },
  {
    "arabic": "أنا تعبان",
    "french": "je suis fatigué",
    "phonetics": "ana teban"
  },
  {
    "arabic": "أنا اسف",
    "french": "je suis désolé",
    "phonetics": "ana asif"
  },
  {
    "arabic": "أنا متعجب",
    "french": "je suis étonné",
    "phonetics": "ana mutaeajjib"
  },
  {
    "arabic": "أنا أعزب",
    "french": "je suis célibataire",
    "phonetics": "ana 'aezib"
  },
  {
    "arabic": "أنا",
    "french": "j'ai",
    "phonetics": "ana"
  },
  {
    "arabic": "أنا جوعان",
    "french": "j'ai faim",
    "phonetics": "ana jawean"
  },
  {
    "arabic": "أنا عطشان",
    "french": "j'ai soif",
    "phonetics": "ana eutshan"
  },
  {
    "arabic": "أنا خائف",
    "french": "j'ai peur",
    "phonetics": "ana khayif"
  },
  {
    "arabic": "أنا بردان",
    "french": "j'ai froid",
    "phonetics": "ana bardan"
  },
  {
    "arabic": "أنا نعسان",
    "french": "j'ai sommeil",
    "phonetics": "ana naesan"
  }
    /*
    {
    "arabic": "نعم",
    "french": "oui",
    "phonetics": "nem"
  },
  {
    "arabic": "لا",
    "french": "non",
    "phonetics": "la"
  },
  {
    "arabic": "شكرا",
    "french": "merci",
    "phonetics": "shukraan"
  },
  {
    "arabic": "صباح الخير",
    "french": "bonjour (matin)",
    "phonetics": "sabah alkhyr"
  },
  {
    "arabic": "مساء الخير.",
    "french": "bonjour (soir)",
    "phonetics": "masa' alkhir"
  },
  {
    "arabic": "مع السلامة",
    "french": "aurevoir",
    "phonetics": "mae alssalama"
  },
  {
    "arabic": "الى اللقاء",
    "french": "aurevoir",
    "phonetics": "iilaa allliqa'"
  },
  {
    "arabic": "كيف حالك؟",
    "french": "comment vas-tu ?",
    "phonetics": "kayf halik?"
  },
  {
    "arabic": "أنا بخير",
    "french": "je vais bien",
    "phonetics": "ana bikhayr"
  },
  {
    "arabic": "و أنت ؟",
    "french": "et toi ?",
    "phonetics": "w 'ant ?"
  },
  {
    "arabic": "كم عمرك؟",
    "french": "Quel âge as tu ?",
    "phonetics": "kam eamiruk?"
  },
  {
    "arabic": "ما اسمك",
    "french": "Quel est ton nom ?",
    "phonetics": "ma aismak"
  },
  {
    "arabic": "اسمي نبيل",
    "french": "Je m'appelle Nabil",
    "phonetics": "aismi nabil"
  },
  {
    "arabic": "ما هذا ؟",
    "french": "qu'est-ce que c'est ?",
    "phonetics": "ma hdha ?"
  },
  {
    "arabic": "لا أعرف",
    "french": "je ne sais pas",
    "phonetics": "la 'aerif"
  },
  /*
  {
    "arabic": "أب",
    "phonetics": "ab",
    "french": "père"
  },
  {
    "arabic": "أبيض",
    "phonetics": "abyad",
    "french": "blanc"
  },
  {
    "arabic": "أحد",
    "phonetics": "ahad",
    "french": "dimanche"
  },
  {
    "arabic": "أحمر",
    "phonetics": "ahmar",
    "french": "rouge"
  },
  {
    "arabic": "أخ",
    "phonetics": "akh",
    "french": "frère"
  },
  {
    "arabic": "أخضر",
    "phonetics": "akhdar",
    "french": "vert"
  },
  {
    "arabic": "الالمانية",
    "phonetics": "alalmania",
    "french": "allemand"
  },
  {
    "arabic": "ألم معدة",
    "phonetics": "alam maeda",
    "french": "mal de ventre"
  },
  {
    "arabic": "الأن",
    "phonetics": "alan",
    "french": "maintenant"
  },
  {
    "arabic": "العربية",
    "phonetics": "alarabia",
    "french": "arabe"
  },
  {
    "arabic": "البارحة",
    "phonetics": "albareha",
    "french": "hier"
  },
  {
    "arabic": "البرتغالية",
    "phonetics": "alburtughalia",
    "french": "portugais"
  },
  {
    "arabic": "الإسبانية",
    "phonetics": "alespania",
    "french": "espagnol"
  },
  {
    "arabic": "الفرنسية",
    "phonetics": "alfaransia",
    "french": "français"
  },
  {
    "arabic": "الهندية",
    "phonetics": "alhindia",
    "french": "hindi"
  },
  {
    "arabic": "الإنجليزية",
    "phonetics": "alinjlizia",
    "french": "anglais"
  },
  {
    "arabic": "الإيطالية",
    "phonetics": "alitalia",
    "french": "italien"
  },
  {
    "arabic": "الليلة",
    "phonetics": "allaila",
    "french": "ce soir"
  },
  {
    "arabic": "اليابانية",
    "phonetics": "alyabania",
    "french": "japonais"
  },
  {
    "arabic": "اليوم",
    "phonetics": "alyawm",
    "french": "aujourd'hui"
  },
  {
    "arabic": "اليونانية",
    "phonetics": "alyunania",
    "french": "grec"
  },
  {
    "arabic": "أنف",
    "phonetics": "anf",
    "french": "nez"
  },
  {
    "arabic": "أقدام",
    "phonetics": "aqdaam",
    "french": "pieds"
  },
  {
    "arabic": "أربعة",
    "phonetics": "arbaa",
    "french": "quatre"
  },
  {
    "arabic": "أربعاء",
    "phonetics": "arbeaa",
    "french": "mercredi"
  },
  {
    "arabic": "الروسية",
    "phonetics": "arusia",
    "french": "russe"
  },
  {
    "arabic": "عاصف",
    "phonetics": "asef",
    "french": "venteux"
  },
  {
    "arabic": "عشاء",
    "phonetics": "ashaa",
    "french": "dîner"
  },
  {
    "arabic": "عشرة",
    "phonetics": "ashara",
    "french": "dix"
  },
  {
    "arabic": "الصينية",
    "phonetics": "assenia",
    "french": "chinois"
  },
  {
    "arabic": "أسود",
    "phonetics": "aswad",
    "french": "noir"
  },
  {
    "arabic": "أول",
    "phonetics": "awal",
    "french": "premier"
  },
  {
    "arabic": "عين",
    "phonetics": "ayn",
    "french": "œil"
  },
  {
    "arabic": "أزرق",
    "phonetics": "azrak",
    "french": "bleu"
  },
  {
    "arabic": "بقرة",
    "phonetics": "baqara",
    "french": "vache"
  },
  {
    "arabic": "بارد",
    "phonetics": "bared",
    "french": "froid"
  },
  {
    "arabic": "بصل",
    "phonetics": "basal",
    "french": "oignons"
  },
  {
    "arabic": "بطاطس",
    "phonetics": "batates",
    "french": "pommes de terre"
  },
  {
    "arabic": "بنت",
    "phonetics": "bent",
    "french": "jeune fille"
  },
  {
    "arabic": "إبن",
    "phonetics": "ebn",
    "french": "fils"
  },
  {
    "arabic": "إبنة",
    "phonetics": "ebna",
    "french": "fille"
  },
  {
    "arabic": "إمرأة",
    "phonetics": "emraa",
    "french": "femme"
  },
  {
    "arabic": "إثنين",
    "phonetics": "ethnain",
    "french": "lundi"
  },
  {
    "arabic": "إثنان",
    "phonetics": "ethnan",
    "french": "deux"
  },
  {
    "arabic": "فأر",
    "phonetics": "faar",
    "french": "souris"
  },
  {
    "arabic": "فم",
    "phonetics": "fam",
    "french": "bouche"
  },
  {
    "arabic": "فواكه",
    "phonetics": "fawakeh",
    "french": "fruits"
  },
  {
    "arabic": "فطور",
    "phonetics": "futur",
    "french": "petit déjeuner"
  },
  {
    "arabic": "غداء",
    "phonetics": "ghadaa",
    "french": "déjeuner"
  },
  {
    "arabic": "غدا",
    "phonetics": "ghadan",
    "french": "demain"
  },
  {
    "arabic": "غرفة",
    "phonetics": "ghurfa",
    "french": "chambre"
  },
  {
    "arabic": "غرفة نوم",
    "phonetics": "ghurfat nawm",
    "french": "chambre à coucher"
  },
  {
    "arabic": "أوتوبيس",
    "phonetics": "hafila",
    "french": "bus"
  },
  {
    "arabic": "حجز",
    "phonetics": "hajz",
    "french": "réservation"
  },
  {
    "arabic": "حليب",
    "phonetics": "haleeb",
    "french": "lait"
  },
  {
    "arabic": "حار",
    "phonetics": "har",
    "french": "chaud"
  },
  {
    "arabic": "حذاء",
    "phonetics": "hedaa",
    "french": "chaussures"
  },
  {
    "arabic": "حصان",
    "phonetics": "hesan",
    "french": "cheval"
  },
  {
    "arabic": "جد",
    "phonetics": "jad",
    "french": "grand-père"
  },
  {
    "arabic": "جدة",
    "phonetics": "jadda",
    "french": "grand-mère"
  },
  {
    "arabic": "جوارب",
    "phonetics": "jawareb",
    "french": "chaussettes"
  },
  {
    "arabic": "جواز سفر",
    "phonetics": "jawaz safar",
    "french": "passeport"
  },
  {
    "arabic": "جمعة",
    "phonetics": "jumua",
    "french": "vendredi"
  },
  {
    "arabic": "كلب",
    "phonetics": "kalb",
    "french": "chien"
  },
  {
    "arabic": "خميس",
    "phonetics": "khamees",
    "french": "jeudi"
  },
  {
    "arabic": "خمسة",
    "phonetics": "khamsa",
    "french": "cinq"
  },
  {
    "arabic": "خبر",
    "phonetics": "khubz",
    "french": "pain"
  },
  {
    "arabic": "كتب",
    "phonetics": "kutub",
    "french": "livres"
  },
  {
    "arabic": "معطف",
    "phonetics": "maataf",
    "french": "manteau"
  },
  {
    "arabic": "منزل",
    "phonetics": "manzel",
    "french": "maison"
  },
  {
    "arabic": "مطار",
    "phonetics": "matar",
    "french": "aéroport"
  },
  {
    "arabic": "مطبخ",
    "phonetics": "matbath",
    "french": "cuisine"
  },
  {
    "arabic": "موز",
    "phonetics": "mawz",
    "french": "bananes"
  },
  {
    "arabic": "مرحاض",
    "phonetics": "merhad",
    "french": "toilettes"
  },
  {
    "arabic": "معجم",
    "phonetics": "mujam",
    "french": "dictionnaire"
  },
  {
    "arabic": "ممطر",
    "phonetics": "mumter",
    "french": "pluvieux"
  },
  {
    "arabic": "مشمس",
    "phonetics": "mushmes",
    "french": "ensoleillé"
  },
  {
    "arabic": "مستشفى",
    "phonetics": "mustashfa",
    "french": "hôpital"
  },
  {
    "arabic": "مثلج",
    "phonetics": "muthlej",
    "french": "enneigé"
  },
  {
    "arabic": "اوتيل",
    "phonetics": "otel",
    "french": "hôtel"
  },
  {
    "arabic": "قهوة",
    "phonetics": "qahwa",
    "french": "café"
  },
  {
    "arabic": "قلم",
    "phonetics": "qalam",
    "french": "stylo"
  },
  {
    "arabic": "قميص صوفي",
    "phonetics": "qamees sufi",
    "french": "chandail"
  },
  {
    "arabic": "قميص",
    "phonetics": "qamees",
    "french": "chemise"
  },
  {
    "arabic": "قط",
    "phonetics": "qet",
    "french": "chat"
  },
  {
    "arabic": "رجل",
    "phonetics": "rajul",
    "french": "homme"
  },
  {
    "arabic": "رمادي",
    "phonetics": "ramadi",
    "french": "gris"
  },
  {
    "arabic": "سبعة",
    "phonetics": "sabaa",
    "french": "sept"
  },
  {
    "arabic": "سبت",
    "phonetics": "sabt",
    "french": "samedi"
  },
  {
    "arabic": "صفحة",
    "phonetics": "safha",
    "french": "page"
  },
  {
    "arabic": "سيارة إسعاف",
    "phonetics": "sayarat esaaf",
    "french": "ambulance"
  },
  {
    "arabic": "صيدلية",
    "phonetics": "saydalia",
    "french": "pharmacie"
  },
  {
    "arabic": "سروال",
    "phonetics": "serwal",
    "french": "pantalon"
  },
  {
    "arabic": "ستة",
    "phonetics": "setta",
    "french": "six"
  },
  {
    "arabic": "شعر",
    "phonetics": "shaar",
    "french": "cheveux"
  },
  {
    "arabic": "شرطة",
    "phonetics": "shurta",
    "french": "police"
  },
  {
    "arabic": "طبيب",
    "phonetics": "tabeeb",
    "french": "médecin"
  },
  {
    "arabic": "طائر",
    "phonetics": "tair",
    "french": "oiseau"
  },
  {
    "arabic": "طالب",
    "phonetics": "taleb",
    "french": "étudiant"
  },
  {
    "arabic": "طماطم",
    "phonetics": "tamatem",
    "french": "tomates"
  },
  {
    "arabic": "طاولة",
    "phonetics": "tawela",
    "french": "table"
  },
  {
    "arabic": "طاكسي",
    "phonetics": "taxi",
    "french": "taxi"
  },
  {
    "arabic": "تسعة",
    "phonetics": "tesaa",
    "french": "neuf"
  },
  {
    "arabic": "ثلاتة",
    "phonetics": "thalatha",
    "french": "trois"
  },
  {
    "arabic": "ثمانية",
    "phonetics": "thamania",
    "french": "huit"
  },
  {
    "arabic": "ثاني",
    "phonetics": "thani",
    "french": "deuxième"
  },
  {
    "arabic": "ثلاثاء",
    "phonetics": "thulathaa",
    "french": "mardi"
  },
  {
    "arabic": "تفاح",
    "phonetics": "tuffah",
    "french": "pommes"
  },
  {
    "arabic": "أخت",
    "phonetics": "ukht",
    "french": "sœur"
  },
  {
    "arabic": "أم",
    "phonetics": "um",
    "french": "mère"
  },
  {
    "arabic": "أستاذ",
    "phonetics": "ustath",
    "french": "professeur"
  },
  {
    "arabic": "واحد",
    "phonetics": "wahed",
    "french": "un"
  },
  {
    "arabic": "ولد",
    "phonetics": "walad",
    "french": "garçon"
  },
  {
    "arabic": "يد",
    "phonetics": "yad",
    "french": "main"
  }*/
];
