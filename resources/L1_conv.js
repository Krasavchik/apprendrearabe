var words = [
  {
    "arabic": "أنا",
    "french": "je suis",
    "phonetics": "ana"
  },
  {
    "arabic": "أنت",
    "french": "toi (m)",
    "phonetics": "anta"
  },
  {
    "arabic": "أنت",
    "french": "toi (f)",
    "phonetics": "anti"
  },
  {
    "arabic": "هو",
    "french": "lui",
    "phonetics": "houwa"
  },
  {
    "arabic": "هي",
    "french": "elle",
    "phonetics": "hiya"
  },
  {
    "arabic": "نحن",
    "french": "nous",
    "phonetics": "nahnou"
  },
  {
    "arabic": "أنتم",
    "french": "vous",
    "phonetics": "antum"
  },
  {
    "arabic": "أنتما",
    "french": "vous (f)",
    "phonetics": "antunna"
  },
  {
    "arabic": "هم",
    "french": "eux",
    "phonetics": "houm"
  },
  {
    "arabic": "هن",
    "french": "elles",
    "phonetics": "hounna"
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
  },
  {
    "arabic": "هل",
    "french": "est-ce que",
    "phonetics": "hal"
  },
  {
    "arabic": "أنا فرنسي",
    "french": "je suis français",
    "phonetics": "ana faransi"
  },
  {
    "arabic": "أنت فرنسي",
    "french": "tu (m) es français",
    "phonetics": "anta faransi"
  },
  {
    "arabic": "أنت فرنسي",
    "french": "tu (f) es français",
    "phonetics": "anti faransi"
  },
  {
    "arabic": "هو فرنسي",
    "french": "il est français",
    "phonetics": "houwa faransi"
  },
  {
    "arabic": "هي فرنسي",
    "french": "elle est français",
    "phonetics": "hiya faransi"
  },
  {
    "arabic": "نحن فرنسي",
    "french": "nous sommes français",
    "phonetics": "nahnou faransi"
  },
  {
    "arabic": "أنتم فرنسي",
    "french": "vous (m) êtes français",
    "phonetics": "antum faransi"
  },
  {
    "arabic": "أنتما فرنسي",
    "french": "vous (f) êtes français",
    "phonetics": "antunna faransi"
  },
  {
    "arabic": "هم فرنسي",
    "french": "ils sont français",
    "phonetics": "houm faransi"
  },
  {
    "arabic": "هن فرنسي",
    "french": "elles sont français",
    "phonetics": "hounna faransi"
  },
  {
    "arabic": "أنا سعيد",
    "french": "je suis heureux",
    "phonetics": "ana saeid"
  },
  {
    "arabic": "أنت سعيد",
    "french": "tu (m) es heureux",
    "phonetics": "anta saeid"
  },
  {
    "arabic": "أنت سعيد",
    "french": "tu (f) es heureux",
    "phonetics": "anti saeid"
  },
  {
    "arabic": "هو سعيد",
    "french": "il est heureux",
    "phonetics": "houwa saeid"
  },
  {
    "arabic": "هي سعيد",
    "french": "elle est heureux",
    "phonetics": "hiya saeid"
  },
  {
    "arabic": "نحن سعيد",
    "french": "nous sommes heureux",
    "phonetics": "nahnou saeid"
  },
  {
    "arabic": "أنتم سعيد",
    "french": "vous (m) êtes heureux",
    "phonetics": "antum saeid"
  },
  {
    "arabic": "أنتما سعيد",
    "french": "vous (f) êtes heureux",
    "phonetics": "antunna saeid"
  },
  {
    "arabic": "هم سعيد",
    "french": "ils sont heureux",
    "phonetics": "houm saeid"
  },
  {
    "arabic": "هن سعيد",
    "french": "elles sont heureux",
    "phonetics": "hounna saeid"
  },
  {
    "arabic": "أنا مسرور",
    "french": "je suis content",
    "phonetics": "ana masrur"
  },
  {
    "arabic": "أنت مسرور",
    "french": "tu (m) es content",
    "phonetics": "anta masrur"
  },
  {
    "arabic": "أنت مسرور",
    "french": "tu (f) es content",
    "phonetics": "anti masrur"
  },
  {
    "arabic": "هو مسرور",
    "french": "il est content",
    "phonetics": "houwa masrur"
  },
  {
    "arabic": "هي مسرور",
    "french": "elle est content",
    "phonetics": "hiya masrur"
  },
  {
    "arabic": "نحن مسرور",
    "french": "nous sommes content",
    "phonetics": "nahnou masrur"
  },
  {
    "arabic": "أنتم مسرور",
    "french": "vous (m) êtes content",
    "phonetics": "antum masrur"
  },
  {
    "arabic": "أنتما مسرور",
    "french": "vous (f) êtes content",
    "phonetics": "antunna masrur"
  },
  {
    "arabic": "هم مسرور",
    "french": "ils sont content",
    "phonetics": "houm masrur"
  },
  {
    "arabic": "هن مسرور",
    "french": "elles sont content",
    "phonetics": "hounna masrur"
  },
  {
    "arabic": "أنا تعبان",
    "french": "je suis fatigué",
    "phonetics": "ana teban"
  },
  {
    "arabic": "أنت تعبان",
    "french": "tu (m) es fatigué",
    "phonetics": "anta teban"
  },
  {
    "arabic": "أنت تعبان",
    "french": "tu (f) es fatigué",
    "phonetics": "anti teban"
  },
  {
    "arabic": "هو تعبان",
    "french": "il est fatigué",
    "phonetics": "houwa teban"
  },
  {
    "arabic": "هي تعبان",
    "french": "elle est fatigué",
    "phonetics": "hiya teban"
  },
  {
    "arabic": "نحن تعبان",
    "french": "nous sommes fatigué",
    "phonetics": "nahnou teban"
  },
  {
    "arabic": "أنتم تعبان",
    "french": "vous (m) êtes fatigué",
    "phonetics": "antum teban"
  },
  {
    "arabic": "أنتما تعبان",
    "french": "vous (f) êtes fatigué",
    "phonetics": "antunna teban"
  },
  {
    "arabic": "هم تعبان",
    "french": "ils sont fatigué",
    "phonetics": "houm teban"
  },
  {
    "arabic": "هن تعبان",
    "french": "elles sont fatigué",
    "phonetics": "hounna teban"
  },
  {
    "arabic": "أنا اسف",
    "french": "je suis désolé",
    "phonetics": "ana asif"
  },
  {
    "arabic": "أنت اسف",
    "french": "tu (m) es désolé",
    "phonetics": "anta asif"
  },
  {
    "arabic": "أنت اسف",
    "french": "tu (f) es désolé",
    "phonetics": "anti asif"
  },
  {
    "arabic": "هو اسف",
    "french": "il est désolé",
    "phonetics": "houwa asif"
  },
  {
    "arabic": "هي اسف",
    "french": "elle est désolé",
    "phonetics": "hiya asif"
  },
  {
    "arabic": "نحن اسف",
    "french": "nous sommes désolé",
    "phonetics": "nahnou asif"
  },
  {
    "arabic": "أنتم اسف",
    "french": "vous (m) êtes désolé",
    "phonetics": "antum asif"
  },
  {
    "arabic": "أنتما اسف",
    "french": "vous (f) êtes désolé",
    "phonetics": "antunna asif"
  },
  {
    "arabic": "هم اسف",
    "french": "ils sont désolé",
    "phonetics": "houm asif"
  },
  {
    "arabic": "هن اسف",
    "french": "elles sont désolé",
    "phonetics": "hounna asif"
  },
  {
    "arabic": "أنا متعجب",
    "french": "je suis étonné",
    "phonetics": "ana mutaeajjib"
  },
  {
    "arabic": "أنت متعجب",
    "french": "tu (m) es étonné",
    "phonetics": "anta mutaeajjib"
  },
  {
    "arabic": "أنت متعجب",
    "french": "tu (f) es étonné",
    "phonetics": "anti mutaeajjib"
  },
  {
    "arabic": "هو متعجب",
    "french": "il est étonné",
    "phonetics": "houwa mutaeajjib"
  },
  {
    "arabic": "هي متعجب",
    "french": "elle est étonné",
    "phonetics": "hiya mutaeajjib"
  },
  {
    "arabic": "نحن متعجب",
    "french": "nous sommes étonné",
    "phonetics": "nahnou mutaeajjib"
  },
  {
    "arabic": "أنتم متعجب",
    "french": "vous (m) êtes étonné",
    "phonetics": "antum mutaeajjib"
  },
  {
    "arabic": "أنتما متعجب",
    "french": "vous (f) êtes étonné",
    "phonetics": "antunna mutaeajjib"
  },
  {
    "arabic": "هم متعجب",
    "french": "ils sont étonné",
    "phonetics": "houm mutaeajjib"
  },
  {
    "arabic": "هن متعجب",
    "french": "elles sont étonné",
    "phonetics": "hounna mutaeajjib"
  },
  {
    "arabic": "أنا جوعان",
    "french": "j'ai faim",
    "phonetics": "ana jawean"
  },
  {
    "arabic": "أنت جوعان",
    "french": "tu (m) as faim",
    "phonetics": "anta jawean"
  },
  {
    "arabic": "أنت جوعان",
    "french": "tu (f) as faim",
    "phonetics": "anti jawean"
  },
  {
    "arabic": "هو جوعان",
    "french": "il a faim",
    "phonetics": "houwa jawean"
  },
  {
    "arabic": "هي جوعان",
    "french": "elle a faim",
    "phonetics": "hiya jawean"
  },
  {
    "arabic": "نحن جوعان",
    "french": "nous avons faim",
    "phonetics": "nahnou jawean"
  },
  {
    "arabic": "أنتم جوعان",
    "french": "vous (m) avez faim",
    "phonetics": "antum jawean"
  },
  {
    "arabic": "أنتما جوعان",
    "french": "vous (f) avez faim",
    "phonetics": "antunna jawean"
  },
  {
    "arabic": "هم جوعان",
    "french": "ils ont faim",
    "phonetics": "houm jawean"
  },
  {
    "arabic": "هن جوعان",
    "french": "elles ont faim",
    "phonetics": "hounna jawean"
  },
  {
    "arabic": "أنا عطشان",
    "french": "j'ai soif",
    "phonetics": "ana eutshan"
  },
  {
    "arabic": "أنت عطشان",
    "french": "tu (m) as soif",
    "phonetics": "anta eutshan"
  },
  {
    "arabic": "أنت عطشان",
    "french": "tu (f) as soif",
    "phonetics": "anti eutshan"
  },
  {
    "arabic": "هو عطشان",
    "french": "il a soif",
    "phonetics": "houwa eutshan"
  },
  {
    "arabic": "هي عطشان",
    "french": "elle a soif",
    "phonetics": "hiya eutshan"
  },
  {
    "arabic": "نحن عطشان",
    "french": "nous avons soif",
    "phonetics": "nahnou eutshan"
  },
  {
    "arabic": "أنتم عطشان",
    "french": "vous (m) avez soif",
    "phonetics": "antum eutshan"
  },
  {
    "arabic": "أنتما عطشان",
    "french": "vous (f) avez soif",
    "phonetics": "antunna eutshan"
  },
  {
    "arabic": "هم عطشان",
    "french": "ils ont soif",
    "phonetics": "houm eutshan"
  },
  {
    "arabic": "هن عطشان",
    "french": "elles ont soif",
    "phonetics": "hounna eutshan"
  },
  {
    "arabic": "أنا خائف",
    "french": "j'ai peur",
    "phonetics": "ana khayif"
  },
  {
    "arabic": "أنت خائف",
    "french": "tu (m) as peur",
    "phonetics": "anta khayif"
  },
  {
    "arabic": "أنت خائف",
    "french": "tu (f) as peur",
    "phonetics": "anti khayif"
  },
  {
    "arabic": "هو خائف",
    "french": "il a peur",
    "phonetics": "houwa khayif"
  },
  {
    "arabic": "هي خائف",
    "french": "elle a peur",
    "phonetics": "hiya khayif"
  },
  {
    "arabic": "نحن خائف",
    "french": "nous avons peur",
    "phonetics": "nahnou khayif"
  },
  {
    "arabic": "أنتم خائف",
    "french": "vous (m) avez peur",
    "phonetics": "antum khayif"
  },
  {
    "arabic": "أنتما خائف",
    "french": "vous (f) avez peur",
    "phonetics": "antunna khayif"
  },
  {
    "arabic": "هم خائف",
    "french": "ils ont peur",
    "phonetics": "houm khayif"
  },
  {
    "arabic": "هن خائف",
    "french": "elles ont peur",
    "phonetics": "hounna khayif"
  },
  {
    "arabic": "أنا بردان",
    "french": "j'ai froid",
    "phonetics": "ana bardan"
  },
  {
    "arabic": "أنت بردان",
    "french": "tu (m) as froid",
    "phonetics": "anta bardan"
  },
  {
    "arabic": "أنت بردان",
    "french": "tu (f) as froid",
    "phonetics": "anti bardan"
  },
  {
    "arabic": "هو بردان",
    "french": "il a froid",
    "phonetics": "houwa bardan"
  },
  {
    "arabic": "هي بردان",
    "french": "elle a froid",
    "phonetics": "hiya bardan"
  },
  {
    "arabic": "نحن بردان",
    "french": "nous avons froid",
    "phonetics": "nahnou bardan"
  },
  {
    "arabic": "أنتم بردان",
    "french": "vous (m) avez froid",
    "phonetics": "antum bardan"
  },
  {
    "arabic": "أنتما بردان",
    "french": "vous (f) avez froid",
    "phonetics": "antunna bardan"
  },
  {
    "arabic": "هم بردان",
    "french": "ils ont froid",
    "phonetics": "houm bardan"
  },
  {
    "arabic": "هن بردان",
    "french": "elles ont froid",
    "phonetics": "hounna bardan"
  },
  {
    "arabic": "أنا نعسان",
    "french": "j'ai sommeil",
    "phonetics": "ana naesan"
  },
  {
    "arabic": "أنت نعسان",
    "french": "tu (m) as sommeil",
    "phonetics": "anta naesan"
  },
  {
    "arabic": "أنت نعسان",
    "french": "tu (f) as sommeil",
    "phonetics": "anti naesan"
  },
  {
    "arabic": "هو نعسان",
    "french": "il a sommeil",
    "phonetics": "houwa naesan"
  },
  {
    "arabic": "هي نعسان",
    "french": "elle a sommeil",
    "phonetics": "hiya naesan"
  },
  {
    "arabic": "نحن نعسان",
    "french": "nous avons sommeil",
    "phonetics": "nahnou naesan"
  },
  {
    "arabic": "أنتم نعسان",
    "french": "vous (m) avez sommeil",
    "phonetics": "antum naesan"
  },
  {
    "arabic": "أنتما نعسان",
    "french": "vous (f) avez sommeil",
    "phonetics": "antunna naesan"
  },
  {
    "arabic": "هم نعسان",
    "french": "ils ont sommeil",
    "phonetics": "houm naesan"
  },
  {
    "arabic": "هن نعسان",
    "french": "elles ont sommeil",
    "phonetics": "hounna naesan"
  }
];
