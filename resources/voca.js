var words = [
  {
    "arabic": "تَفَضَّلْ",
    "french": "je t'en prie",
    "phonetics": "tafaddal",
    "lesson": 31,
    "type": "expression"
  },
  {
    "arabic": "تَفَضَّلُوا",
    "french": "je vous (pluriel) en prie",
    "phonetics": "tafaddalou",
    "lesson": 31,
    "type": "expression"
  },
  {
    "arabic": "مَقْهًى",
    "french": "café (lieu)",
    "phonetics": "maqhan",
    "lesson": 29,
    "type": "nom"
  },
  {
    "arabic": "حَلْوَانِيٌّ",
    "french": "confiseur, pâtissier",
    "phonetics": "halwaniyyoun",
    "lesson": 29,
    "type": "nom"
  },
  {
    "arabic": "عَطْشَانُ",
    "french": "assoifé",
    "phonetics": "atchanou",
    "lesson": 29,
    "type": "adjectif"
  },
  {
    "arabic": "لاَبَأْسَ",
    "french": "pas de mal ! ça va !",
    "phonetics": "la ba'sa",
    "lesson": 29,
    "type": "expression"
  },
  {
    "arabic": "لَسْتُ",
    "french": "je ne suis pas",
    "phonetics": "lastou",
    "lesson": 29,
    "type": "verbe"
  },
  {
    "arabic": "أَبَدًا",
    "french": "pas du tout, jamais",
    "phonetics": "abadan",
    "lesson": 29,
    "type": "adverbe"
  },
  {
    "arabic": "مُتْعَبٌ",
    "french": "fatigué",
    "phonetics": "mout(c)aboun",
    "lesson": 29,
    "type": "adjectif"
  },
  {
    "arabic": "فَهِمْتُ",
    "french": "j'ai compris",
    "phonetics": "fahimtou",
    "lesson": 29,
    "type": "verbe"
  },
  {
    "arabic": "قُلْتُ",
    "french": "j'ai dit",
    "phonetics": "qoultou",
    "lesson": 29,
    "type": "verbe"
  },
  {
    "arabic": "قُلْتَ",
    "french": "tu as dit",
    "phonetics": "qoulta",
    "lesson": 29,
    "type": "verbe"
  },
  {
    "arabic": "بَيْنَ",
    "french": "entre (adv.)",
    "phonetics": "bayna",
    "lesson": 29,
    "type": "adverbe"
  },
  {
    "arabic": "شَقِيلُ ٱلسَّمْعِ",
    "french": "dur d'oreille",
    "phonetics": "thaqilous-sam(c)i",
    "lesson": 29,
    "type": "adjectif"
  },
  {
    "arabic": "صَوْتٌ",
    "french": "voix",
    "phonetics": "saoutoun",
    "lesson": 29,
    "type": "nom"
  },
  {
    "arabic": "كَتَبَ",
    "french": "il a écrit",
    "phonetics": "kataba",
    "lesson": 1,
    "type": "verbe"
  },
  {
    "arabic": "أَلْكَاتِبُ",
    "french": "l'écrivain",
    "phonetics": "al-kàtibou",
    "lesson": 1,
    "type": "nom"
  },
  {
    "arabic": "جَلَسَ",
    "french": "il s'est assis",
    "phonetics": "jalasa",
    "lesson": 2,
    "type": "verbe"
  },
  {
    "arabic": "وَ",
    "french": "et",
    "phonetics": "wa",
    "lesson": 2,
    "type": "conjonction"
  },
  {
    "arabic": "دَخَلَ",
    "french": "il est entré",
    "phonetics": "dakhala",
    "lesson": 3,
    "type": "verbe"
  },
  {
    "arabic": "أَلْوَلَدُ",
    "french": "l'enfant",
    "phonetics": "al-waladou",
    "lesson": 3,
    "type": "nom"
  },
  {
    "arabic": "دَرَسَ",
    "french": "il a étudié",
    "phonetics": "darasa",
    "lesson": 3,
    "type": "verbe"
  },
  {
    "arabic": "مَا ؟",
    "french": "quoi ? qu'est-ce que ?",
    "phonetics": "mà",
    "lesson": 4,
    "type": ""
  },
  {
    "arabic": "أَلرَّجُلُ",
    "french": "l'homme",
    "phonetics": "ar-rajoulou",
    "lesson": 4,
    "type": "nom"
  },
  {
    "arabic": "أَلْكِتَابُ",
    "french": "le livre",
    "phonetics": "al-kitàbou",
    "lesson": 4,
    "type": "nom"
  },
  {
    "arabic": "فِي",
    "french": "dans",
    "phonetics": "fi",
    "lesson": 5,
    "type": ""
  },
  {
    "arabic": "أَلْبَيْتُ",
    "french": "la maison",
    "phonetics": "al-baytou",
    "lesson": 5,
    "type": "nom"
  },
  {
    "arabic": "أَلْوَالِدُ",
    "french": "le père",
    "phonetics": "al-wàlidou",
    "lesson": 6,
    "type": "nom"
  },
  {
    "arabic": "وَجَدَ",
    "french": "il a trouvé",
    "phonetics": "wajada",
    "lesson": 6,
    "type": "verbe"
  },
  {
    "arabic": "أَلْبِنْتُ",
    "french": "la fille",
    "phonetics": "al-bintou",
    "lesson": 8,
    "type": "nom"
  },
  {
    "arabic": "مَنْ ؟",
    "french": "qui ?",
    "phonetics": "man",
    "lesson": 8,
    "type": ""
  },
  {
    "arabic": "أَلْمَكْتَبُ",
    "french": "le bureau",
    "phonetics": "al-maktabou",
    "lesson": 8,
    "type": "nom"
  },
  {
    "arabic": "خَرَجَتْ",
    "french": "elle est sortie",
    "phonetics": "kharajat",
    "lesson": 8,
    "type": "verbe"
  },
  {
    "arabic": "خَرَجَ",
    "french": "il est sorti",
    "phonetics": "kharaja",
    "lesson": 8,
    "type": "verbe"
  },
  {
    "arabic": "أَلْقَلَمُ",
    "french": "le stylo",
    "phonetics": "al-qalamou",
    "lesson": 9,
    "type": "nom"
  },
  {
    "arabic": "قَالَ",
    "french": "il a dit",
    "phonetics": "qàla",
    "lesson": 9,
    "type": "verbe"
  },
  {
    "arabic": "أَنَا",
    "french": "moi",
    "phonetics": "anà",
    "lesson": 9,
    "type": "pronom"
  },
  {
    "arabic": "دَرَسْتُ",
    "french": "j'ai étudié",
    "phonetics": "darastou",
    "lesson": 9,
    "type": "verbe"
  },
  {
    "arabic": "كَتَبْتُ",
    "french": "j'ai écrit",
    "phonetics": "katabtou",
    "lesson": 9,
    "type": "verbe"
  },
  {
    "arabic": "بِـــ",
    "french": "avec",
    "phonetics": "bi",
    "lesson": 9,
    "type": ""
  },
  {
    "arabic": "ــكِ",
    "french": "ton / ta / tes (feminin)",
    "phonetics": "ki",
    "lesson": 9,
    "type": ""
  },
  {
    "arabic": "أَلْأُسْتَاذُ",
    "french": "le maître",
    "phonetics": "al-oustadhou",
    "lesson": 10,
    "type": "nom"
  },
  {
    "arabic": "لِـــ",
    "french": "à, pour",
    "phonetics": "li",
    "lesson": 10,
    "type": ""
  },
  {
    "arabic": "أَنْتَ",
    "french": "toi",
    "phonetics": "anta",
    "lesson": 10,
    "type": ""
  },
  {
    "arabic": "أَخَذَ",
    "french": "il a pris",
    "phonetics": "akhadha",
    "lesson": 10,
    "type": "verbe"
  },
  {
    "arabic": "أَخَذْتَ",
    "french": "tu as pris (masc.)",
    "phonetics": "akhadhta",
    "lesson": 10,
    "type": "verbe"
  },
  {
    "arabic": "أَلسُّوقُ",
    "french": "le marché",
    "phonetics": "as-souqou",
    "lesson": 11,
    "type": "nom"
  },
  {
    "arabic": "ذَهَبَ",
    "french": "il est allé",
    "phonetics": "dhahaba",
    "lesson": 11,
    "type": "verbe"
  },
  {
    "arabic": "إِلَى",
    "french": "à, vers",
    "phonetics": "ilà",
    "lesson": 11,
    "type": ""
  },
  {
    "arabic": "أَلْجَدُّ",
    "french": "le grand-père",
    "phonetics": "al-jaddou",
    "lesson": 11,
    "type": "nom"
  },
  {
    "arabic": "أَيْنَ",
    "french": "où ?",
    "phonetics": "ayna",
    "lesson": 11,
    "type": ""
  },
  {
    "arabic": "ـــكَ",
    "french": "ton / ta / tes (masc.)",
    "phonetics": "ka",
    "lesson": 11,
    "type": ""
  },
  {
    "arabic": "هُوَ",
    "french": "lui",
    "phonetics": "houwa",
    "lesson": 11,
    "type": "pronom"
  },
  {
    "arabic": "أَلْجَدِيدُ",
    "french": "le nouveau",
    "phonetics": "al-jadidou",
    "lesson": 11,
    "type": "nom"
  },
  {
    "arabic": "أَلتِلمِيذُ",
    "french": "l'élève",
    "phonetics": "at-tilmidhou",
    "lesson": 12,
    "type": "nom"
  },
  {
    "arabic": "مِا",
    "french": "ne pas",
    "phonetics": "mà",
    "lesson": 12,
    "type": ""
  },
  {
    "arabic": "أَلدَّرْسُ",
    "french": "la leçon",
    "phonetics": "ad-darsou",
    "lesson": 12,
    "type": "nom"
  },
  {
    "arabic": "ـــهُ",
    "french": "son / sa / ses (masc.)",
    "phonetics": "-hou",
    "lesson": 12,
    "type": ""
  },
  {
    "arabic": "مِنْ",
    "french": "de (provenance)",
    "phonetics": "min",
    "lesson": 12,
    "type": ""
  },
  {
    "arabic": "أَلْقِطُّ",
    "french": "le chat",
    "phonetics": "al-qittou",
    "lesson": 13,
    "type": "nom"
  },
  {
    "arabic": "أَنْتِ",
    "french": "toi (fem.)",
    "phonetics": "anti",
    "lesson": 13,
    "type": "pronom"
  },
  {
    "arabic": "هَلْ ؟",
    "french": "est-ce que ?",
    "phonetics": "hal",
    "lesson": 13,
    "type": ""
  },
  {
    "arabic": "وَجَدْتِ",
    "french": "tu as trouvé (fem.)",
    "phonetics": "wajadti",
    "lesson": 13,
    "type": "verbe"
  },
  {
    "arabic": "لاَ",
    "french": "non",
    "phonetics": "là",
    "lesson": 13,
    "type": ""
  },
  {
    "arabic": "أَلْجَمِيلُ",
    "french": "le beau",
    "phonetics": "al-jamilou",
    "lesson": 13,
    "type": ""
  },
  {
    "arabic": "أَلْوَسَطُ",
    "french": "le milieu, le centre",
    "phonetics": "al-wasatou",
    "lesson": 13,
    "type": "nom"
  },
  {
    "arabic": "أَلْبُسْتَانُ",
    "french": "le jardin",
    "phonetics": "al-boustànou",
    "lesson": 13,
    "type": "nom"
  },
  {
    "arabic": "ـــيِ",
    "french": "mon / ma / mes",
    "phonetics": "i",
    "lesson": 13,
    "type": ""
  },
  {
    "arabic": "أَلْكَلْبُ",
    "french": "le chien",
    "phonetics": "al-kalbou",
    "lesson": 15,
    "type": "nom"
  },
  {
    "arabic": "مَكَثَ",
    "french": "rester",
    "phonetics": "makatha",
    "lesson": 15,
    "type": "verbe"
  },
  {
    "arabic": "ثُمَّ",
    "french": "puis",
    "phonetics": "thoumma",
    "lesson": 15,
    "type": ""
  },
  {
    "arabic": "أَلْجَارُ",
    "french": "le voisin",
    "phonetics": "al-jàrou",
    "lesson": 15,
    "type": "nom"
  },
  {
    "arabic": "ـــهَا",
    "french": "son / sa / ses (fem.)",
    "phonetics": "hà",
    "lesson": 15,
    "type": ""
  },
  {
    "arabic": "أَلْإِسْمُ",
    "french": "le nom",
    "phonetics": "al-simou",
    "lesson": 16,
    "type": ""
  },
  {
    "arabic": "مَرْحَبًا",
    "french": "bienvenue, bonjour",
    "phonetics": "marhaban",
    "lesson": 16,
    "type": ""
  },
  {
    "arabic": "قَدِيمٌ",
    "french": "un ancien, un vieux",
    "phonetics": "qadimoun",
    "lesson": 16,
    "type": "nom"
  },
  {
    "arabic": "أَلْمَدِينَةُ",
    "french": "la ville",
    "phonetics": "al-madinatou",
    "lesson": 16,
    "type": "nom"
  },
  {
    "arabic": "جَمِيلَةٌ",
    "french": "jolie",
    "phonetics": "jamilatoun",
    "lesson": 16,
    "type": "adjectif"
  },
  {
    "arabic": "كَيْفَ",
    "french": "comment",
    "phonetics": "kayfa",
    "lesson": 17,
    "type": ""
  },
  {
    "arabic": "أَلْحَالُ",
    "french": "l'état, la condition",
    "phonetics": "al-hàlou",
    "lesson": 17,
    "type": "nom"
  },
  {
    "arabic": "يَا",
    "french": "oh, éh",
    "phonetics": "ya",
    "lesson": 17,
    "type": ""
  },
  {
    "arabic": "هُنَا",
    "french": "ici",
    "phonetics": "hounà",
    "lesson": 17,
    "type": ""
  },
  {
    "arabic": "أَلْقَدِيمَةُ",
    "french": "la veille",
    "phonetics": "al-qadimatou",
    "lesson": 17,
    "type": "nom"
  },
  {
    "arabic": "تَاجِرٌ",
    "french": "un marchand",
    "phonetics": "tàjiroun",
    "lesson": 17,
    "type": "nom"
  },
  {
    "arabic": "مَشْهُورٌ",
    "french": "réputé",
    "phonetics": "machhouroun",
    "lesson": 17,
    "type": "adjectif"
  },
  {
    "arabic": "شُكْرًا",
    "french": "merci",
    "phonetics": "choukran",
    "lesson": 17,
    "type": ""
  },
  {
    "arabic": "أَخٌ",
    "french": "frère, ami",
    "phonetics": "akhoun",
    "lesson": 17,
    "type": "nom"
  },
  {
    "arabic": "وَالِدَةٌ",
    "french": "une mère",
    "phonetics": "wàlidatoun",
    "lesson": 17,
    "type": "nom"
  },
  {
    "arabic": "يَوْمَ أَمْسِ",
    "french": "hier",
    "phonetics": "yaouma amsi",
    "lesson": 18,
    "type": ""
  },
  {
    "arabic": "يَوْمٌ",
    "french": "jour",
    "phonetics": "youmoun",
    "lesson": 18,
    "type": ""
  },
  {
    "arabic": "أَلْيَوْمَ",
    "french": "aujourd'hui",
    "phonetics": "al yaouma",
    "lesson": 18,
    "type": ""
  },
  {
    "arabic": "دُكَّانٌ",
    "french": "boutique",
    "phonetics": "doukkànoun",
    "lesson": 18,
    "type": "nom"
  },
  {
    "arabic": "مَعَ",
    "french": "avec",
    "phonetics": "ma(c)a",
    "lesson": 18,
    "type": ""
  },
  {
    "arabic": "نَعَمْ",
    "french": "oui",
    "phonetics": "na(c)am",
    "lesson": 18,
    "type": ""
  },
  {
    "arabic": "هِيَ",
    "french": "elle",
    "phonetics": "hiya",
    "lesson": 18,
    "type": ""
  },
  {
    "arabic": "خَبِيرٌ",
    "french": "expert",
    "phonetics": "khabiroun",
    "lesson": 18,
    "type": ""
  },
  {
    "arabic": "جِدًّا",
    "french": "très",
    "phonetics": "jiddan",
    "lesson": 18,
    "type": ""
  },
  {
    "arabic": "تَسَوُّقٌ",
    "french": "shopping",
    "phonetics": "tasawwouquoun",
    "lesson": 18,
    "type": "nom"
  },
  {
    "arabic": "رِسَالَةٌ",
    "french": "une lettre",
    "phonetics": "risàlatoun",
    "lesson": 19,
    "type": "nom"
  },
  {
    "arabic": "يَدٌ",
    "french": "une main",
    "phonetics": "yadoun",
    "lesson": 19,
    "type": "nom"
  },
  {
    "arabic": "وَصَلَ",
    "french": "il est arrivé",
    "phonetics": "wasala",
    "lesson": 19,
    "type": "verbe"
  },
  {
    "arabic": "مِصْر",
    "french": "Egypte",
    "phonetics": "misr",
    "lesson": 19,
    "type": "nom propre"
  },
  {
    "arabic": "مِصْرٌ",
    "french": "métropole",
    "phonetics": "misroun",
    "lesson": 19,
    "type": "nom"
  },
  {
    "arabic": "عَلَى",
    "french": "sur",
    "phonetics": "(c)alà",
    "lesson": 19,
    "type": ""
  },
  {
    "arabic": "مَائِدَةٌ",
    "french": "table",
    "phonetics": "mà'idatoun",
    "lesson": 19,
    "type": "nom"
  },
  {
    "arabic": "صَبَاحَ ٱلْيَوْمِ",
    "french": "ce matin",
    "phonetics": "sabàha-l-yaoumi",
    "lesson": 19,
    "type": ""
  },
  {
    "arabic": "مَرَّ بِـــ",
    "french": "passer par",
    "phonetics": "marra bi",
    "lesson": 19,
    "type": "verbe"
  },
  {
    "arabic": "خَادِمٌ",
    "french": "un serviteur",
    "phonetics": "khàdimoun",
    "lesson": 19,
    "type": "nom"
  },
  {
    "arabic": "بَرِيدٌ",
    "french": "courrier, poste",
    "phonetics": "baridoun",
    "lesson": 19,
    "type": "nom"
  },
  {
    "arabic": "سَلاَمٌ",
    "french": "paix",
    "phonetics": "salàmoun",
    "lesson": 20,
    "type": "nom"
  },
  {
    "arabic": "رَجَعَ",
    "french": "il est revenu",
    "phonetics": "raja(c)a",
    "lesson": 20,
    "type": "verbe"
  },
  {
    "arabic": "صَدِيقٌ",
    "french": "ami",
    "phonetics": "sadiqoun",
    "lesson": 20,
    "type": "nom"
  },
  {
    "arabic": "عَاصِمَةٌ",
    "french": "capitale",
    "phonetics": "(c)àsimatoun",
    "lesson": 20,
    "type": "nom"
  },
  {
    "arabic": "رَجَعْنَ",
    "french": "nous sommes revenus",
    "phonetics": "raja(c)na",
    "lesson": 20,
    "type": "verbe"
  },
  {
    "arabic": "لَهُ",
    "french": "pour lui",
    "phonetics": "lahou",
    "lesson": 20,
    "type": ""
  },
  {
    "arabic": "سَيَّارَةٌ",
    "french": "voiture",
    "phonetics": "sayyaratoun",
    "lesson": 20,
    "type": "nom"
  },
  {
    "arabic": "أَمَّا ... فَ",
    "french": "quant à ... + verbe",
    "phonetics": "ammà ... fa",
    "lesson": 20,
    "type": ""
  },
  {
    "arabic": "نَفِيسٌ",
    "french": "précieux",
    "phonetics": "nafisoun",
    "lesson": 20,
    "type": "adjectif"
  },
  {
    "arabic": "كَبِيرُ",
    "french": "grand",
    "phonetics": "kabiroun",
    "lesson": 22,
    "type": "adjectif"
  },
  {
    "arabic": "شَيْءٌ",
    "french": "chose",
    "phonetics": "chay'oun",
    "lesson": 22,
    "type": "nom"
  },
  {
    "arabic": "إِنَّ",
    "french": "certes",
    "phonetics": "inna",
    "lesson": 22,
    "type": ""
  },
  {
    "arabic": "سِوَارٌ",
    "french": "bracelet",
    "phonetics": "siwàroun",
    "lesson": 22,
    "type": "nom"
  },
  {
    "arabic": "ذَهَبٌ",
    "french": "or (métal)",
    "phonetics": "dhahaboun",
    "lesson": 22,
    "type": "nom"
  },
  {
    "arabic": "فَرِحَ",
    "french": "se réjouir",
    "phonetics": "fariha",
    "lesson": 22,
    "type": "verbe"
  },
  {
    "arabic": "كَثِيرًا",
    "french": "beaucoup",
    "phonetics": "kathiran",
    "lesson": 22,
    "type": ""
  },
  {
    "arabic": "ذَلِكَ",
    "french": "cela",
    "phonetics": "dhalika",
    "lesson": 22,
    "type": ""
  },
  {
    "arabic": "نَحْنُ",
    "french": "nous",
    "phonetics": "nahnou",
    "lesson": 22,
    "type": ""
  },
  {
    "arabic": "مَرْكَزٌ",
    "french": "centre",
    "phonetics": "markazoun",
    "lesson": 22,
    "type": "nom"
  },
  {
    "arabic": "زِيَارَةٌ",
    "french": "visite",
    "phonetics": "ziyàratoun",
    "lesson": 22,
    "type": "nom"
  },
  {
    "arabic": "مَسْجِدٌ",
    "french": "mosquée",
    "phonetics": "masjidoun",
    "lesson": 22,
    "type": "nom"
  },
  {
    "arabic": "فُنْدُقٌ",
    "french": "hotel",
    "phonetics": "foundouqoun",
    "lesson": 23,
    "type": "nom"
  },
  {
    "arabic": "رَخِيصٌ",
    "french": "bon marché",
    "phonetics": "rakhisoun",
    "lesson": 23,
    "type": "adjectif"
  },
  {
    "arabic": "ــكُمْ",
    "french": "votre (pronom affixe)",
    "phonetics": "-koum",
    "lesson": 23,
    "type": ""
  },
  {
    "arabic": "خَيْرٌ",
    "french": "bien",
    "phonetics": "khayroun",
    "lesson": 23,
    "type": ""
  },
  {
    "arabic": "نَزَلَ",
    "french": "descendre",
    "phonetics": "nazala",
    "lesson": 23,
    "type": "verbe"
  },
  {
    "arabic": "أَنْتُمْ",
    "french": "vous",
    "phonetics": "antoum",
    "lesson": 23,
    "type": ""
  },
  {
    "arabic": "جَيٌدٌ",
    "french": "bon",
    "phonetics": "jayyidoun",
    "lesson": 23,
    "type": ""
  },
  {
    "arabic": "وَلَكِنَّ",
    "french": "mais",
    "phonetics": "walakinna",
    "lesson": 23,
    "type": ""
  },
  {
    "arabic": "مُكْلِفٌ",
    "french": "cher",
    "phonetics": "mouklifoun",
    "lesson": 23,
    "type": "adjectif"
  },
  {
    "arabic": "قَلِيلًا",
    "french": "un peu",
    "phonetics": "qalilan",
    "lesson": 23,
    "type": ""
  },
  {
    "arabic": "هُنَاكَ",
    "french": "ici",
    "phonetics": "hounàka",
    "lesson": 23,
    "type": ""
  },
  {
    "arabic": "هَل هُنَاكَ ؟",
    "french": "Y a-t-il ?",
    "phonetics": "hal hounàka",
    "lesson": 23,
    "type": ""
  },
  {
    "arabic": "لِمَاذَا",
    "french": "pourquoi",
    "phonetics": "limàdhà",
    "lesson": 23,
    "type": ""
  },
  {
    "arabic": "عِنْدَ",
    "french": "chez, auprès de, selon, au moment où",
    "phonetics": "(c)inda",
    "lesson": 23,
    "type": ""
  },
  {
    "arabic": "نُقُودٌ",
    "french": "argent (liquide)",
    "phonetics": "nouqoudoun",
    "lesson": 23,
    "type": "nom"
  },
  {
    "arabic": "إِجْتِمَاعٌ",
    "french": "réunion",
    "phonetics": "ijtimà(c)oun",
    "lesson": 24,
    "type": "nom"
  },
  {
    "arabic": "مِتِى ؟",
    "french": "quand ?",
    "phonetics": "matà",
    "lesson": 24,
    "type": ""
  },
  {
    "arabic": "يَوْمِ ٱلْخَمِيسِ",
    "french": "jeudi",
    "phonetics": "yaouma al-khamisi",
    "lesson": 24,
    "type": ""
  },
  {
    "arabic": "سَاعَةٌ",
    "french": "montre, heure",
    "phonetics": "sà(c)atoun",
    "lesson": 24,
    "type": "nom"
  },
  {
    "arabic": "سَادِسٌ",
    "french": "sixième",
    "phonetics": "sàdisoun",
    "lesson": 24,
    "type": ""
  },
  {
    "arabic": "بَعْدَ",
    "french": "après",
    "phonetics": "ba(c)da",
    "lesson": 24,
    "type": ""
  },
  {
    "arabic": "ظُهْرٌ",
    "french": "midi",
    "phonetics": "zouhroun",
    "lesson": 24,
    "type": ""
  },
  {
    "arabic": "بَعْدَ ٱلظُّهْرِ",
    "french": "après-midi",
    "phonetics": "ba(c)da z-zouhri",
    "lesson": 24,
    "type": ""
  },
  {
    "arabic": "هَذَا",
    "french": "ce, ceci",
    "phonetics": "hadhà",
    "lesson": 24,
    "type": ""
  },
  {
    "arabic": "كَانَ",
    "french": "il était",
    "phonetics": "kàna",
    "lesson": 24,
    "type": "verbe"
  },
  {
    "arabic": "مُمْتَازٌ",
    "french": "parfait",
    "phonetics": "moumtàzoun",
    "lesson": 24,
    "type": "adjectif"
  },
  {
    "arabic": "مَسْرُورٌ",
    "french": "heureux",
    "phonetics": "masrouroun",
    "lesson": 24,
    "type": "adjectif"
  },
  {
    "arabic": "مَرِيضٌ",
    "french": "malade",
    "phonetics": "maridoun",
    "lesson": 25,
    "type": "adjectif"
  },
  {
    "arabic": "يَوْمُ ٱلسَّبْتَ",
    "french": "samedi",
    "phonetics": "yaoumou (a)s-sabti",
    "lesson": 25,
    "type": ""
  },
  {
    "arabic": "مَرِضَ",
    "french": "tomber malade, être malade",
    "phonetics": "marida",
    "lesson": 25,
    "type": "verbe"
  },
  {
    "arabic": "فَوْرًا",
    "french": "immédiatement",
    "phonetics": "faouran",
    "lesson": 25,
    "type": ""
  },
  {
    "arabic": "سَبَبٌ",
    "french": "cause, raison",
    "phonetics": "sababoun",
    "lesson": 25,
    "type": "nom"
  },
  {
    "arabic": "بِسَبَبِ",
    "french": "à cause de",
    "phonetics": "bisababi",
    "lesson": 25,
    "type": ""
  },
  {
    "arabic": "أَيْضًا",
    "french": "aussi",
    "phonetics": "aydan",
    "lesson": 25,
    "type": ""
  },
  {
    "arabic": "مُسَافِرٌ",
    "french": "voyageur",
    "phonetics": "mousàfiroun",
    "lesson": 26,
    "type": "nom"
  },
  {
    "arabic": "حَمَّامٌ",
    "french": "bain, salle de bain, toilettes",
    "phonetics": "hammàmoun",
    "lesson": 26,
    "type": "nom"
  },
  {
    "arabic": "عَامٌّ",
    "french": "public, général",
    "phonetics": "(c)àmmoun",
    "lesson": 26,
    "type": "adjectif"
  },
  {
    "arabic": "قَرِيبًا مِنْ",
    "french": "près de",
    "phonetics": "qariban min",
    "lesson": 26,
    "type": ""
  },
  {
    "arabic": "غَسَلَ",
    "french": "laver",
    "phonetics": "ghasala",
    "lesson": 26,
    "type": "verbe"
  },
  {
    "arabic": "أَلْمَلاَبِسُ",
    "french": "les vêtements",
    "phonetics": "al-malàbisou",
    "lesson": 26,
    "type": "nom"
  },
  {
    "arabic": "لِأَنَّ",
    "french": "parce que",
    "phonetics": "li'anna",
    "lesson": 26,
    "type": ""
  },
  {
    "arabic": "سَفَرٌ",
    "french": "voyage",
    "phonetics": "safaroun",
    "lesson": 26,
    "type": "nom"
  },
  {
    "arabic": "مُتْعِبٌ",
    "french": "fatiguant",
    "phonetics": "mout(i)boun",
    "lesson": 26,
    "type": ""
  },
  {
    "arabic": "قَادِمٌ",
    "french": "venant",
    "phonetics": "qàdimoun",
    "lesson": 26,
    "type": ""
  },
  {
    "arabic": "مِنْطَقَةٌ",
    "french": "région",
    "phonetics": "mintaqatoun",
    "lesson": 26,
    "type": "nom"
  },
  {
    "arabic": "غُبَارٌ",
    "french": "poussière",
    "phonetics": "ghoubàroun",
    "lesson": 26,
    "type": "nom"
  },
  {
    "arabic": "كَثَيرٌ",
    "french": "abondant, nombreux",
    "phonetics": "kathiroun",
    "lesson": 26,
    "type": ""
  },
  {
    "arabic": "رُجُوعُ",
    "french": "retour",
    "phonetics": "roujou(c)oun",
    "lesson": 27,
    "type": "nom"
  },
  {
    "arabic": "يَوْمِ ٱلْغَدِ",
    "french": "le lendemain",
    "phonetics": "yaouma-l-ghadi",
    "lesson": 27,
    "type": ""
  },
  {
    "arabic": "حَيٌّ",
    "french": "quartier",
    "phonetics": "hayyoun",
    "lesson": 27,
    "type": "nom"
  },
  {
    "arabic": "أَلْمَكِانُ",
    "french": "l'endroit",
    "phonetics": "makaànou",
    "lesson": 27,
    "type": "nom"
  },
  {
    "arabic": "أَلْأَمَاكِنُ",
    "french": "les endroits",
    "phonetics": "alamàkinou",
    "lesson": 27,
    "type": "nom"
  },
  {
    "arabic": "أُسْبُوعٌ",
    "french": "semaine",
    "phonetics": "ousbou(c)oun",
    "lesson": 27,
    "type": "nom"
  },
  {
    "arabic": "بُيُوتٌ",
    "french": "maisons",
    "phonetics": "bouyoutoun",
    "lesson": 27,
    "type": "nom"
  },
  {
    "arabic": "سَفْرَةٌ",
    "french": "trajet",
    "phonetics": "safratoun",
    "lesson": 27,
    "type": "nom"
  },
  {
    "arabic": "هَذِهِ",
    "french": "cette, celle-ci",
    "phonetics": "hadhihi",
    "lesson": 27,
    "type": ""
  },
  {
    "arabic": "مَطْعَمٌ",
    "french": "restaurant",
    "phonetics": "mat(c)amoun",
    "lesson": 30,
    "type": "nom"
  },
  {
    "arabic": "غَرِيبٌ",
    "french": "étrange",
    "phonetics": "ghariboun",
    "lesson": 30,
    "type": "adjectif"
  },
  {
    "arabic": "زَبُونٌ",
    "french": "client",
    "phonetics": "zabounoun",
    "lesson": 30,
    "type": "nom"
  },
  {
    "arabic": "سَيِّدِي",
    "french": "monsieur",
    "phonetics": "sayyidi",
    "lesson": 30,
    "type": "nom"
  },
  {
    "arabic": "سَيِّدَتِي",
    "french": "madame",
    "phonetics": "sayyidati",
    "lesson": 30,
    "type": "nom"
  },
  {
    "arabic": "طَاجِنٌ",
    "french": "tajine",
    "phonetics": "tàjinoun",
    "lesson": 30,
    "type": "nom"
  },
  {
    "arabic": "دَجَاجٌ",
    "french": "poulet",
    "phonetics": "dajàjoun",
    "lesson": 30,
    "type": "nom"
  },
  {
    "arabic": "كَبَابٌ",
    "french": "brochette",
    "phonetics": "kabàboun",
    "lesson": 30,
    "type": "nom"
  },
  {
    "arabic": "لَحْمٌ",
    "french": "viande",
    "phonetics": "lahmoun",
    "lesson": 30,
    "type": "nom"
  },
  {
    "arabic": "يَدْخُلُ",
    "french": "il entre",
    "phonetics": "yadkhoulou",
    "lesson": 30,
    "type": "verbe"
  },
  {
    "arabic": "يَكْتُبُ",
    "french": "il écrit",
    "phonetics": "yaktoubou",
    "lesson": 30,
    "type": "verbe"
  },
  {
    "arabic": "يَذْهَبُ",
    "french": "il va",
    "phonetics": "yadhhabou",
    "lesson": 30,
    "type": "verbe"
  },
  {
    "arabic": "خُبْزًا",
    "french": "pain",
    "phonetics": "khoubzan",
    "lesson": 30,
    "type": "nom"
  },
  {
    "arabic": "فَقَطْ",
    "french": "seulement",
    "phonetics": "faqat",
    "lesson": 30,
    "type": ""
  },
  {
    "arabic": "يَوْمَ ٱلْأَحَدِ",
    "french": "dimanche",
    "phonetics": "yaouma-l-ahadi",
    "lesson": 30,
    "type": ""
  },
  {
    "arabic": "جَوْعَانُ",
    "french": "affamé",
    "phonetics": "jaou(c)anou",
    "lesson": 31,
    "type": "adjectif"
  },
  {
    "arabic": "عرَفَ",
    "french": "savoir",
    "phonetics": "(c)arafa",
    "lesson": 31,
    "type": "verbe"
  },
  {
    "arabic": "شَارِعٌ",
    "french": "rue",
    "phonetics": "chàri(c)oun",
    "lesson": 31,
    "type": "nom"
  },
  {
    "arabic": "يَعرِفُ",
    "french": "il connaît",
    "phonetics": "ya(c)rifou",
    "lesson": 31,
    "type": "verbe"
  },
  {
    "arabic": "أَكَلَ",
    "french": "manger",
    "phonetics": "akala",
    "lesson": 31,
    "type": "verbe"
  },
  {
    "arabic": "يَأْكُلُ",
    "french": "il mange",
    "phonetics": "ya'koulou",
    "lesson": 31,
    "type": "verbe"
  },
  {
    "arabic": "مَاضٍ",
    "french": "passé",
    "phonetics": "màdin",
    "lesson": 31,
    "type": ""
  },
  {
    "arabic": "طَعَامٌ",
    "french": "nourriture",
    "phonetics": "ta(c)àmoun",
    "lesson": 31,
    "type": "nom"
  },
  {
    "arabic": "لَذِيذٌ",
    "french": "délicieux",
    "phonetics": "ladhidhoun",
    "lesson": 31,
    "type": "adjectif"
  },
  {
    "arabic": "أَصْدِقَاءُ",
    "french": "amis",
    "phonetics": "asdiqà'ou",
    "lesson": 31,
    "type": "nom"
  },
  {
    "arabic": "غَرْسُونٌ",
    "french": "serveur",
    "phonetics": "gharsounoun",
    "lesson": 31,
    "type": "nom"
  },
  {
    "arabic": "أَهْلاً بِــ..",
    "french": "bienvenue à",
    "phonetics": "ahlan bi...",
    "lesson": 31,
    "type": ""
  },
  {
    "arabic": "كَمْ ؟",
    "french": "combien de",
    "phonetics": "kam",
    "lesson": 31,
    "type": ""
  },
  {
    "arabic": "سِتَّةٌ",
    "french": "six",
    "phonetics": "sittatoun",
    "lesson": 31,
    "type": ""
  },
  {
    "arabic": "شَخْصٌ",
    "french": "personne",
    "phonetics": "chakhsoun",
    "lesson": 31,
    "type": "nom"
  },
  {
    "arabic": "أَشْخَاصٌ",
    "french": "personnes",
    "phonetics": "achkhàsoun",
    "lesson": 31,
    "type": "nom"
  },
  {
    "arabic": "شَرِبَ",
    "french": "boire",
    "phonetics": "chariba",
    "lesson": 31,
    "type": "verbe"
  },
  {
    "arabic": "يَشْرَبُ",
    "french": "il boit",
    "phonetics": "yachrabou",
    "lesson": 31,
    "type": "verbe"
  },
  {
    "arabic": "نَظَرَ (إِلَ)",
    "french": "regarder",
    "phonetics": "nazara (ila)",
    "lesson": 32,
    "type": "verbe"
  },
  {
    "arabic": "يَنْظُرُ",
    "french": "il regarde",
    "phonetics": "yanzourou",
    "lesson": 32,
    "type": "verbe"
  },
  {
    "arabic": "نَظَرَ (فِي)",
    "french": "examiner",
    "phonetics": "nazara (fi)",
    "lesson": 32,
    "type": "verbe"
  },
  {
    "arabic": "شَابٌّ",
    "french": "un jeune homme",
    "phonetics": "chàbboun",
    "lesson": 32,
    "type": "nom"
  },
  {
    "arabic": "شُبَّانٌ",
    "french": "des jeunes gens",
    "phonetics": "choubbànoun",
    "lesson": 32,
    "type": "nom"
  },
  {
    "arabic": "جَمِيعٌ",
    "french": "ensemble, totalité",
    "phonetics": "jami(c)oun",
    "lesson": 32,
    "type": "nom"
  },
  {
    "arabic": "مَاذَا ؟",
    "french": "quoi ?",
    "phonetics": "màdhà",
    "lesson": 32,
    "type": ""
  },
  {
    "arabic": "قَبْلَ",
    "french": "avant",
    "phonetics": "qabla",
    "lesson": 32,
    "type": ""
  },
  {
    "arabic": "سَلَطَةٌ",
    "french": "salade",
    "phonetics": "salatatoun",
    "lesson": 32,
    "type": "nom"
  },
  {
    "arabic": "كَــ",
    "french": "comme (+ nom)",
    "phonetics": "ka",
    "lesson": 32,
    "type": ""
  },
  {
    "arabic": "مِثْلَ",
    "french": "comme (+ pronom)",
    "phonetics": "mithla",
    "lesson": 32,
    "type": ""
  },
  {
    "arabic": "طَلَبَ",
    "french": "demander",
    "phonetics": "talaba",
    "lesson": 32,
    "type": "verbe"
  },
  {
    "arabic": "يَطْلُبُ",
    "french": "il demande",
    "phonetics": "yatloubou",
    "lesson": 32,
    "type": "verbe"
  },
  {
    "arabic": "دَفَعَ",
    "french": "payer",
    "phonetics": "dafa(c)a",
    "lesson": 32,
    "type": "verbe"
  },
  {
    "arabic": "يَدْفَعُ",
    "french": "il paye",
    "phonetics": "yadfa(c)ou",
    "lesson": 32,
    "type": "verbe"
  },
  {
    "arabic": "سَوْفَ",
    "french": "marque du futur",
    "phonetics": "saoufa",
    "lesson": 32,
    "type": ""
  },
  {
    "arabic": "أَكْلٌ",
    "french": "fait de manger",
    "phonetics": "akloun",
    "lesson": 32,
    "type": ""
  },
  {
    "arabic": "حِسَابٌ",
    "french": "addition",
    "phonetics": "hisàboun",
    "lesson": 32,
    "type": "nom"
  },
  {
    "arabic": "نِهَايَةٌ",
    "french": "fin",
    "phonetics": "nihàyyatoun",
    "lesson": 32,
    "type": "nom"
  },
  {
    "arabic": "مَحَطَّةٌ",
    "french": "station",
    "phonetics": "mahattatoun",
    "lesson": 33,
    "type": ""
  },
  {
    "arabic": "قِطَارٌ",
    "french": "train",
    "phonetics": "qitàroun",
    "lesson": 33,
    "type": ""
  },
  {
    "arabic": "مَحَطَّةُ ٱلْقِطَارِ",
    "french": "gare ferroviaire",
    "phonetics": "mahattatou (a)l-qitàri",
    "lesson": 33,
    "type": ""
  },
  {
    "arabic": "عَمِلَ",
    "french": "faire, travailler",
    "phonetics": "(c)amila",
    "lesson": 33,
    "type": ""
  },
  {
    "arabic": "يَعْمَلُ",
    "french": "il travaille",
    "phonetics": "ya(c)malou",
    "lesson": 33,
    "type": ""
  },
  {
    "arabic": "بِمُنَاسَبَةِ",
    "french": "à l'occasion de",
    "phonetics": "bi-mounàsabati",
    "lesson": 33,
    "type": ""
  },
  {
    "arabic": "زَوَاجٌ",
    "french": "mariage",
    "phonetics": "zawajoun",
    "lesson": 33,
    "type": ""
  },
  {
    "arabic": "أُخْتٌ",
    "french": "soeur",
    "phonetics": "oukhtoun",
    "lesson": 33,
    "type": ""
  },
  {
    "arabic": "عَرِيسٌ",
    "french": "jeune marié",
    "phonetics": "(c)arisoun",
    "lesson": 33,
    "type": ""
  },
  {
    "arabic": "عَرُوسٌ",
    "french": "jeune mariée",
    "phonetics": "(c)arousoun",
    "lesson": 33,
    "type": ""
  },
  {
    "arabic": "دَرَّسَ",
    "french": "enseigner",
    "phonetics": "darrasa",
    "lesson": 33,
    "type": ""
  },
  {
    "arabic": "جَامِعَةٌ",
    "french": "université",
    "phonetics": "jàmi(c)atoun",
    "lesson": 33,
    "type": ""
  },
  {
    "arabic": "قَرْيَةٌ",
    "french": "village",
    "phonetics": "qaryatoun",
    "lesson": 33,
    "type": ""
  },
  {
    "arabic": "شَهْرٌ",
    "french": "mois",
    "phonetics": "chahroun",
    "lesson": 33,
    "type": ""
  },
  {
    "arabic": "أَهْلٌ",
    "french": "famille",
    "phonetics": "ahloun",
    "lesson": 33,
    "type": ""
  },
  {
    "arabic": "حَاجَةٌ",
    "french": "besoin",
    "phonetics": "hàjatoun",
    "lesson": 33,
    "type": ""
  },
  {
    "arabic": "طَوِيلٌ",
    "french": "long",
    "phonetics": "tawiloun",
    "lesson": 34,
    "type": ""
  },
  {
    "arabic": "صَغِيرٌ",
    "french": "petit",
    "phonetics": "saghiroun",
    "lesson": 34,
    "type": ""
  },
  {
    "arabic": "إِنْتِظَارٌ",
    "french": "attente",
    "phonetics": "intizàroun",
    "lesson": 34,
    "type": ""
  },
  {
    "arabic": "فَرَحٌ",
    "french": "joie",
    "phonetics": "farahoun",
    "lesson": 34,
    "type": ""
  },
  {
    "arabic": "قَلْبٌ",
    "french": "coeur",
    "phonetics": "qalboun",
    "lesson": 34,
    "type": ""
  },
  {
    "arabic": "رَكِبَ",
    "french": "monter (dans un train, avion, bus)",
    "phonetics": "rakiba",
    "lesson": 34,
    "type": ""
  },
  {
    "arabic": "بَاصٌ",
    "french": "bus",
    "phonetics": "bàsoun",
    "lesson": 34,
    "type": ""
  },
  {
    "arabic": "حَافِلٌ بِــ",
    "french": "plein de",
    "phonetics": "hàfiloun bi",
    "lesson": 34,
    "type": ""
  },
  {
    "arabic": "فَلاَّحٌ",
    "french": "agriculteur",
    "phonetics": "fallàhoun",
    "lesson": 34,
    "type": ""
  },
  {
    "arabic": "أُمٌّ",
    "french": "mère",
    "phonetics": "oummoun",
    "lesson": 34,
    "type": ""
  },
  {
    "arabic": "أَكْلَةٌ",
    "french": "repas, plat",
    "phonetics": "aklatoun",
    "lesson": 34,
    "type": ""
  },
  {
    "arabic": "مُفَضَّلٌ",
    "french": "préféré",
    "phonetics": "moufaddaloun",
    "lesson": 34,
    "type": ""
  },
  {
    "arabic": "بَنَاتٌ",
    "french": "filles",
    "phonetics": "banàtoun",
    "lesson": 36,
    "type": ""
  },
  {
    "arabic": "عَمٌّ",
    "french": "oncle",
    "phonetics": "(c)ammoun",
    "lesson": 36,
    "type": ""
  },
  {
    "arabic": "زَارَ",
    "french": "rendre visite",
    "phonetics": "zàra",
    "lesson": 36,
    "type": ""
  },
  {
    "arabic": "رَأَى",
    "french": "voir",
    "phonetics": "ra'à",
    "lesson": 36,
    "type": ""
  },
  {
    "arabic": "بَحْثًا عَنْ",
    "french": "à la recherche de",
    "phonetics": "bahthan (c)an",
    "lesson": 36,
    "type": ""
  },
  {
    "arabic": "ثِمَارٌ",
    "french": "fruits",
    "phonetics": "thimàroun",
    "lesson": 36,
    "type": ""
  },
  {
    "arabic": "أَزْهَارٌ",
    "french": "fleurs",
    "phonetics": "azhàroun",
    "lesson": 36,
    "type": ""
  },
  {
    "arabic": "يُعْطِي",
    "french": "donner",
    "phonetics": "you(c)ti",
    "lesson": 36,
    "type": ""
  },
  {
    "arabic": "هَدِيَّةً",
    "french": "cadeau",
    "phonetics": "hadiyyatan",
    "lesson": 36,
    "type": ""
  },
  {
    "arabic": "أُنُوفٌ",
    "french": "nez (pluriel)",
    "phonetics": "ounoufoun",
    "lesson": 37,
    "type": ""
  },
  {
    "arabic": "أَمِيرٌ",
    "french": "prince",
    "phonetics": "amiroun",
    "lesson": 37,
    "type": ""
  },
  {
    "arabic": "أَنْفٌ",
    "french": "nez",
    "phonetics": "anfoun",
    "lesson": 37,
    "type": ""
  },
  {
    "arabic": "رَدَّ",
    "french": "répondre",
    "phonetics": "radda",
    "lesson": 37,
    "type": ""
  },
  {
    "arabic": "ضَخْمٌ",
    "french": "énorme",
    "phonetics": "dakhmoun",
    "lesson": 37,
    "type": ""
  },
  {
    "arabic": "شَاعِرٌ",
    "french": "poète",
    "phonetics": "chà(c)iroun",
    "lesson": 37,
    "type": ""
  },
  {
    "arabic": "قَصْرٌ",
    "french": "palais",
    "phonetics": "qasroun",
    "lesson": 37,
    "type": ""
  },
  {
    "arabic": "مَلِكٌ",
    "french": "roi",
    "phonetics": "malikoun",
    "lesson": 37,
    "type": ""
  },
  {
    "arabic": "رَأَيْتُ",
    "french": "j'ai vu",
    "phonetics": "ra'aytou",
    "lesson": 37,
    "type": ""
  },
  {
    "arabic": "فَمٌ",
    "french": "bouche",
    "phonetics": "famoun",
    "lesson": 37,
    "type": ""
  }
]
