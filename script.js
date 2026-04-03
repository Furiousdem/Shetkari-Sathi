// ─── State ─────────────────────────────────────────────────────────────
let currentRegion = "Vidarbha";
let currentLang   = "mr";

// ─── Language strings ───────────────────────────────────────────────────
const UI = {
  mr: {
    welcome: "नमस्कार शेतकरी! मी शेतकरी साथी AI आहे. तुमच्या शेतीसाठी मी येथे आहे. वरील टॅब वापरून माती विश्लेषण, बाजार भाव, नुकसान भरपाई, आणि हवामान माहिती मिळवा. किंवा खाली थेट प्रश्न विचारा! 🌱",
    placeholder: "प्रश्न टाइप करा...",
    you: "YOU",
    quick: ["🌾 पीक सल्ला", "🐛 कीड नियंत्रण", "💰 बाजार भाव", "🏔️ जमीन सुधारणा", "🌦️ हवामान सल्ला"],
    quickQ: [
      "माझ्या प्रदेशासाठी सर्वोत्तम पीक कोणते?",
      "सेंद्रिय कीड नियंत्रण कसे करावे?",
      "आत्ता कांदा आणि टोमॅटोचा बाजारभाव काय आहे?",
      "माझी जमीन सुधारण्यासाठी काय करावे?",
      "या आठवड्यात शेतीसाठी हवामान कसे असेल?"
    ],
    tabs: ["💬 चॅट", "🪱 माती विश्लेषण", "💰 बाजार & नफा-तोटा", "🆘 नुकसान & योजना", "🌦️ हवामान"]
  },
  hi: {
    welcome: "नमस्ते किसान! मैं शेतकरी साथी AI हूँ। आपकी खेती के लिए मैं यहाँ हूँ। ऊपर के टैब से मिट्टी विश्लेषण, बाजार भाव, आपदा सहायता और मौसम जानकारी पाएं। या नीचे सीधे सवाल पूछें! 🌱",
    placeholder: "अपना सवाल टाइप करें...",
    you: "YOU",
    quick: ["🌾 फसल सलाह", "🐛 कीट नियंत्रण", "💰 बाजार भाव", "🏔️ मिट्टी सुधार", "🌦️ मौसम सलाह"],
    quickQ: [
      "मेरे क्षेत्र के लिए सबसे अच्छी फसल कौन सी है?",
      "जैविक कीट नियंत्रण कैसे करें?",
      "अभी प्याज और टमाटर का बाजार भाव क्या है?",
      "मेरी मिट्टी सुधारने के लिए क्या करूँ?",
      "इस हफ्ते खेती के लिए मौसम कैसा रहेगा?"
    ],
    tabs: ["💬 चैट", "🪱 मिट्टी विश्लेषण", "💰 बाजार & लाभ-हानि", "🆘 नुकसान & योजना", "🌦️ मौसम"]
  },
  en: {
    welcome: "Hello Farmer! I'm Shetkari Saathi AI, here to help with your farming needs. Use the tabs above for soil analysis, market prices, disaster relief & weather. Or ask a question below! 🌱",
    placeholder: "Type your question here...",
    you: "YOU",
    quick: ["🌾 Crop Advice", "🐛 Pest Control", "💰 Market Prices", "🏔️ Soil Health", "🌦️ Weather Tips"],
    quickQ: [
      "What are the best crops for my region?",
      "How to control pests organically?",
      "What are current market prices for onion and tomato?",
      "How can I improve my soil quality?",
      "What will the weather be like for farming this week?"
    ],
    tabs: ["💬 Chat", "🪱 Soil Analysis", "💰 Market & P&L", "🆘 Disaster & Schemes", "🌦️ Weather"]
  }
};

// ─── Chat Responses ──────────────────────────────────────────────────────────
const RESPONSES = {
  crop: {
    mr: {
      Vidarbha: "विदर्भात या हंगामात **कापूस, सोयाबीन, तूर** हे प्रमुख पीक आहेत. ऑक्टोबर-नोव्हेंबरमध्ये रब्बी हंगामासाठी **हरभरा आणि गहू** देखील घेता येतो. मृद परीक्षण करून खत व्यवस्थापन करा.",
      Marathwada: "मराठवाड्यात **सोयाबीन, कापूस, तूर** प्रमुख पीक आहेत. कमी पाण्यात येणाऱ्या **बाजरी आणि ज्वारी** चांगल्या आहेत. ठिबक सिंचनाचा वापर करा.",
      Konkan: "कोकणात **भात, नारळ, आंबा, काजू** हे मुख्य पीक आहेत. डोंगराळ भागात **वेलची, जायफळ** देखील येते.",
      "Western Maharashtra": "पश्चिम महाराष्ट्रात **ऊस, द्राक्षे, डाळिंब, कांदा** प्रमुख आहेत. सध्या **टोमॅटो आणि मिरची** ची मागणी जास्त आहे.",
      Nashik: "नाशिकमध्ये **द्राक्षे, कांदा, टोमॅटो, स्ट्रॉबेरी** प्रसिद्ध आहेत. निर्यातक्षम द्राक्षांसाठी **थॉम्पसन सीडलेस** जात निवडा.",
      Khandesh: "खान्देशात **केळी, कापूस, ज्वारी, मका** हे प्रमुख पीक आहेत. केळी लागवडीसाठी **ग्रँड नाईन** जात उत्तम आहे."
    },
    hi: {
      Vidarbha: "विदर्भ में इस मौसम में **कपास, सोयाबीन, अरहर** प्रमुख फसलें हैं। रबी सीजन में **चना और गेहूं** भी ले सकते हैं।",
      Marathwada: "मराठवाड़ा में **सोयाबीन, कपास, अरहर** मुख्य फसलें हैं। कम पानी में **बाजरा और ज्वार** अच्छी होती हैं।",
      Konkan: "कोंकण में **धान, नारियल, आम, काजू** प्रमुख फसलें हैं। पहाड़ी इलाकों में **इलायची और जायफल** भी होती है।",
      "Western Maharashtra": "पश्चिम महाराष्ट्र में **गन्ना, अंगूर, अनार, प्याज** प्रमुख हैं। अभी **टमाटर और मिर्च** की मांग ज्यादा है।",
      Nashik: "नासिक में **अंगूर, प्याज, टमाटर, स्ट्रॉबेरी** प्रसिद्ध हैं। निर्यात के लिए **थॉम्पसन सीडलेस** किस्म चुनें।",
      Khandesh: "खानदेश में **केला, कपास, ज्वार, मक्का** प्रमुख फसलें हैं। केले के लिए **ग्रैंड नाइन** किस्म उत्तम है।"
    },
    en: {
      Vidarbha: "In Vidarbha, **cotton, soybean, and tur** are the primary crops. For rabi, consider **chickpea and wheat**. Get soil tested for proper fertilizer management.",
      Marathwada: "In Marathwada, **soybean, cotton, and tur** are the main crops. **Bajra and jowar** grow well with less water. Use drip irrigation.",
      Konkan: "In Konkan, **rice, coconut, mango, and cashew** are the main crops. **Cardamom and nutmeg** also grow in hilly areas.",
      "Western Maharashtra": "In Western Maharashtra, **sugarcane, grapes, pomegranate, and onion** are prominent. Currently **tomato and chili** are in high demand.",
      Nashik: "Nashik is known for **grapes, onion, tomato, and strawberry**. Choose **Thompson Seedless** for export-quality grapes.",
      Khandesh: "In Khandesh, **banana, cotton, jowar, and maize** are key crops. **Grand Naine** variety is ideal for banana cultivation."
    }
  },
  pest: {
    mr: { default: "**सेंद्रिय कीड नियंत्रण:**\n\n🌿 निंबोळी अर्क (5%) फवारणी करा\n🌿 गोमूत्र + आले + लसूण यांचे मिश्रण वापरा\n🌿 पिवळे चिकट सापळे लावा\n🌿 पीक फेरपालट करा\n🌿 ट्रायकोडर्मा जैविक बुरशीनाशक वापरा\n\nरासायनिक फवारणी शेवटचा पर्याय म्हणून वापरा." },
    hi: { default: "**जैविक कीट नियंत्रण:**\n\n🌿 नीम अर्क (5%) का छिड़काव करें\n🌿 गोमूत्र + अदरक + लहसुन का मिश्रण\n🌿 पीले चिपचिपे जाल लगाएं\n🌿 फसल चक्र अपनाएं\n🌿 ट्राइकोडर्मा जैव-कवकनाशी का उपयोग\n\nरासायनिक छिड़काव अंतिम विकल्प के रूप में ही करें।" },
    en: { default: "**Organic Pest Control:**\n\n🌿 Spray Neem extract (5%)\n🌿 Use mixture of cow urine + ginger + garlic\n🌿 Install yellow sticky traps\n🌿 Practice crop rotation\n🌿 Use Trichoderma bio-fungicide\n\nUse chemical sprays only as a last resort." }
  },
  market: {
    mr: { default: "**सध्याचे अंदाजे बाजारभाव (पुणे/नाशिक मंडई):**\n\n🧅 कांदा: ₹15-25/किलो\n🍅 टोमॅटो: ₹10-20/किलो\n🌶️ मिरची: ₹40-80/किलो\n🥔 बटाटा: ₹12-18/किलो\n🌾 सोयाबीन: ₹4200-4800/क्विंटल\n🌾 कापूस: ₹6500-7500/क्विंटल\n\n⚠️ अचूक भावासाठी agmarknet.gov.in किंवा तुमच्या स्थानिक मंडईशी संपर्क करा." },
    hi: { default: "**वर्तमान अनुमानित बाजार भाव (पुणे/नासिक मंडी):**\n\n🧅 प्याज: ₹15-25/किलो\n🍅 टमाटर: ₹10-20/किलो\n🌶️ मिर्च: ₹40-80/किलो\n🥔 आलू: ₹12-18/किलो\n🌾 सोयाबीन: ₹4200-4800/क्विंटल\n🌾 कपास: ₹6500-7500/क्विंटल\n\n⚠️ सटीक भाव के लिए agmarknet.gov.in या स्थानीय मंडी से संपर्क करें।" },
    en: { default: "**Approximate Current Market Prices (Pune/Nashik APMC):**\n\n🧅 Onion: ₹15-25/kg\n🍅 Tomato: ₹10-20/kg\n🌶️ Chili: ₹40-80/kg\n🥔 Potato: ₹12-18/kg\n🌾 Soybean: ₹4200-4800/quintal\n🌾 Cotton: ₹6500-7500/quintal\n\n⚠️ For exact prices visit agmarknet.gov.in or your local APMC." }
  },
  soil: {
    mr: { default: "**जमीन सुधारणेसाठी उपाय:**\n\n🌱 दर 3 वर्षांनी मृद परीक्षण करा\n🌱 हिरवळीचे खत (ताग, धैंचा) वापरा\n🌱 शेणखत/कंपोस्ट नियमित द्या\n🌱 जमिनीचा pH 6.5-7 मध्ये ठेवा\n🌱 जड मशिनरी वापरणे टाळा\n🌱 मल्चिंग करा" },
    hi: { default: "**मिट्टी सुधार के उपाय:**\n\n🌱 हर 3 साल में मिट्टी परीक्षण करें\n🌱 हरी खाद (ढैंचा, सनई) का उपयोग करें\n🌱 गोबर खाद/कम्पोस्ट नियमित दें\n🌱 मिट्टी का pH 6.5-7 के बीच रखें\n🌱 भारी मशीनरी से बचें\n🌱 मल्चिंग करें" },
    en: { default: "**Soil Improvement Tips:**\n\n🌱 Test soil every 3 years\n🌱 Use green manure crops (dhaincha, sunn hemp)\n🌱 Apply farmyard manure/compost regularly\n🌱 Maintain soil pH between 6.5-7\n🌱 Avoid heavy machinery compaction\n🌱 Practice mulching" }
  },
  weather: {
    mr: { default: "**हवामान सल्ला:**\n\n☀️ मार्च-एप्रिल: उन्हाळी सिंचन व्यवस्थापन करा\n🌧️ जून-सप्टेंबर: खरीप हंगाम — पेरणीसाठी उत्तम\n🍂 ऑक्टोबर-नोव्हेंबर: रब्बी पेरणी सुरू करा\n❄️ डिसेंबर-जानेवारी: दंव पडल्यास झाडांना संरक्षण द्या\n\n📱 IMD Meghdoot अ‍ॅप डाउनलोड करा — अचूक हवामान अंदाजासाठी." },
    hi: { default: "**मौसम सलाह:**\n\n☀️ मार्च-अप्रैल: ग्रीष्मकालीन सिंचाई प्रबंधन करें\n🌧️ जून-सितंबर: खरीफ सीजन — बुवाई के लिए उत्तम\n🍂 अक्टूबर-नवंबर: रबी बुवाई शुरू करें\n❄️ दिसंबर-जनवरी: पाले से फसल बचाएं\n\n📱 IMD Meghdoot ऐप डाउनलोड करें — सटीक मौसम पूर्वानुमान के लिए।" },
    en: { default: "**Weather Advisory:**\n\n☀️ March-April: Manage summer irrigation carefully\n🌧️ June-September: Kharif season — best time for sowing\n🍂 October-November: Start rabi crop sowing\n❄️ December-January: Protect crops from frost\n\n📱 Download IMD Meghdoot app for accurate local weather forecasts." }
  },
  unknown: {
    mr: "क्षमस्व, मला हा प्रश्न नीट समजला नाही. कृपया **पीक, कीड, बाजारभाव, जमीन, हवामान, सिंचन** यापैकी एका विषयावर प्रश्न विचारा. 🌾",
    hi: "माफ़ करें, मैं यह प्रश्न ठीक से नहीं समझ सका। कृपया **फसल, कीट, बाजार भाव, मिट्टी, मौसम, सिंचाई** इनमें से किसी विषय पर प्रश्न करें। 🌾",
    en: "Sorry, I couldn't understand that question. Please ask about **crops, pests, market prices, soil, weather, or irrigation**. 🌾"
  }
};

// ─── Market Price Data ───────────────────────────────────────────────────────
const MARKET_PRICES = {
  cotton:    { mr: "कापूस",    hi: "कपास",     en: "Cotton",     min: 6500,  max: 7500,  unit: "₹/क्विंटल" },
  soybean:   { mr: "सोयाबीन", hi: "सोयाबीन",  en: "Soybean",    min: 4200,  max: 4800,  unit: "₹/क्विंटल" },
  onion:     { mr: "कांदा",   hi: "प्याज",     en: "Onion",      min: 1500,  max: 2500,  unit: "₹/क्विंटल" },
  tomato:    { mr: "टोमॅटो",  hi: "टमाटर",    en: "Tomato",     min: 1000,  max: 2000,  unit: "₹/क्विंटल" },
  wheat:     { mr: "गहू",     hi: "गेहूं",     en: "Wheat",      min: 2200,  max: 2500,  unit: "₹/क्विंटल" },
  chana:     { mr: "हरभरा",   hi: "चना",       en: "Chickpea",   min: 5200,  max: 5800,  unit: "₹/क्विंटल" },
  tur:       { mr: "तूर डाळ", hi: "अरहर दाल",  en: "Pigeon Pea", min: 6500,  max: 7200,  unit: "₹/क्विंटल" },
  chili:     { mr: "मिरची",   hi: "मिर्च",     en: "Chili",      min: 4000,  max: 8000,  unit: "₹/क्विंटल" },
  grape:     { mr: "द्राक्षे", hi: "अंगूर",    en: "Grapes",     min: 4000,  max: 8000,  unit: "₹/क्विंटल" },
  sugarcane: { mr: "ऊस",      hi: "गन्ना",     en: "Sugarcane",  min: 290,   max: 350,   unit: "₹/टन" }
};

// ─── Soil Analysis Logic ─────────────────────────────────────────────────────
const SOIL_ADVICE = {
  mr: (ph, n, p, k, area, season) => {
    let advice = "📊 **माती विश्लेषण अहवाल:**\n\n";
    // pH advice
    if (ph < 6.0) advice += "⚠️ **pH खूप कमी** (आम्लयुक्त) — चुना/डोलोमाइट वापरा (2-3 बॅग/एकर)\n";
    else if (ph > 8.0) advice += "⚠️ **pH खूप जास्त** (क्षारयुक्त) — जिप्सम वापरा (4 बॅग/एकर)\n";
    else advice += "✅ **pH उत्तम** — सध्याच्या स्थितीत ठेवा\n";
    // NPK
    if (n < 200) advice += "🌱 **नायट्रोजन कमी** — युरिया (2-3 बॅग/एकर) द्या\n";
    else advice += "✅ नायट्रोजन पुरेसा\n";
    if (p < 20) advice += "🌱 **फॉस्फरस कमी** — SSP (4 बॅग/एकर) द्या\n";
    else advice += "✅ फॉस्फरस पुरेसा\n";
    if (k < 250) advice += "🌱 **पोटॅश कमी** — म्युरिएट ऑफ पोटाश (1-2 बॅग/एकर) द्या\n";
    else advice += "✅ पोटॅश पुरेसा\n";
    // Season reco
    const crops = { kharif: "कापूस, सोयाबीन, तूर", rabi: "गहू, हरभरा, करडई", summer: "मूग, भुईमूग, सूर्यफूल" };
    advice += `\n🌾 **${season === 'kharif' ? 'खरीप' : season === 'rabi' ? 'रब्बी' : 'उन्हाळी'} हंगामासाठी शिफारस:** ${crops[season]}\n`;
    advice += "\n💡 सेंद्रिय कंपोस्ट (4-5 टन/एकर) नियमित द्या.";
    return advice;
  },
  hi: (ph, n, p, k, area, season) => {
    let advice = "📊 **मिट्टी विश्लेषण रिपोर्ट:**\n\n";
    if (ph < 6.0) advice += "⚠️ **pH बहुत कम** (अम्लीय) — चूना/डोलोमाइट डालें (2-3 बैग/एकड़)\n";
    else if (ph > 8.0) advice += "⚠️ **pH बहुत ज्यादा** (क्षारीय) — जिप्सम डालें (4 बैग/एकड़)\n";
    else advice += "✅ **pH उत्तम** — इसी स्थिति में रखें\n";
    if (n < 200) advice += "🌱 **नाइट्रोजन कम** — यूरिया (2-3 बैग/एकड़) दें\n";
    else advice += "✅ नाइट्रोजन पर्याप्त\n";
    if (p < 20) advice += "🌱 **फॉस्फोरस कम** — SSP (4 बैग/एकड़) दें\n";
    else advice += "✅ फॉस्फोरस पर्याप्त\n";
    if (k < 250) advice += "🌱 **पोटाश कम** — MOP (1-2 बैग/एकड़) दें\n";
    else advice += "✅ पोटाश पर्याप्त\n";
    const crops = { kharif: "कपास, सोयाबीन, अरहर", rabi: "गेहूं, चना, सरसों", summer: "मूंग, मूंगफली, सूरजमुखी" };
    advice += `\n🌾 **${season === 'kharif' ? 'खरीफ' : season === 'rabi' ? 'रबी' : 'ग्रीष्मकालीन'} के लिए सिफारिश:** ${crops[season]}\n`;
    advice += "\n💡 जैविक खाद (4-5 टन/एकड़) नियमित रूप से दें।";
    return advice;
  },
  en: (ph, n, p, k, area, season) => {
    let advice = "📊 **Soil Analysis Report:**\n\n";
    if (ph < 6.0) advice += "⚠️ **pH too low** (Acidic) — Apply lime/dolomite (2-3 bags/acre)\n";
    else if (ph > 8.0) advice += "⚠️ **pH too high** (Alkaline) — Apply gypsum (4 bags/acre)\n";
    else advice += "✅ **pH optimal** — Maintain current levels\n";
    if (n < 200) advice += "🌱 **Nitrogen deficient** — Apply urea (2-3 bags/acre)\n";
    else advice += "✅ Nitrogen adequate\n";
    if (p < 20) advice += "🌱 **Phosphorus deficient** — Apply SSP (4 bags/acre)\n";
    else advice += "✅ Phosphorus adequate\n";
    if (k < 250) advice += "🌱 **Potassium deficient** — Apply MOP (1-2 bags/acre)\n";
    else advice += "✅ Potassium adequate\n";
    const crops = { kharif: "Cotton, Soybean, Tur", rabi: "Wheat, Chickpea, Safflower", summer: "Green gram, Groundnut, Sunflower" };
    advice += `\n🌾 **Recommended for ${season} season:** ${crops[season]}\n`;
    advice += "\n💡 Apply organic compost (4-5 tonnes/acre) regularly.";
    return advice;
  }
};

// ─── Weather Advisory Data ───────────────────────────────────────────────────
const WEATHER_ADVICE = {
  mr: {
    premonsoon: { cotton: "🌤️ **पूर्व मान्सून - कापूस:**\nएप्रिल अखेरपर्यंत जमीन तयार करा. नांगरणी करून ढेकळे मोडा. 15 जून नंतर पेरणी करा. बियाणे उपचार (थायरम+कार्बेन्डाझिम) आवश्यक.", monsoon: "🌧️ **मान्सून - कापूस:**\nमान्सून आल्यावर लगेच पेरणी करा. ओळींमधील अंतर 3x1.5 फुट ठेवा. पाण्याचा निचरा महत्त्वाचा आहे. पिकातील तण काढा.", postmonsoon: "🍂 **परतीचा मान्सून - कापूस:**\nबोंड उघडण्याच्या वेळी पाणी देणे कमी करा. बोंड अळी नियंत्रणासाठी सापळे लावा. वेचणी सुरू करा.", winter: "❄️ **हिवाळा - कापूस:**\nशेवटची वेचणी पूर्ण करा. शेत साफ करा. पुढील हंगामासाठी खत व्यवस्थापन सुरू करा.", summer: "☀️ **उन्हाळा - कापूस:**\nखोल नांगरणी करा. उन्हात जमीन तापू द्या — कीड नष्ट होईल. मेमध्ये बियाणे खरेदी करा." },
    soybean: { premonsoon: "🌤️ **पूर्व मान्सून - सोयाबीन:**\nजून पहिल्या आठवड्यात पेरणी तयारी करा. उन्नत जाती (JS 9305, MACS 450) निवडा. रायझोबियम बीजप्रक्रिया करा.", monsoon: "🌧️ **मान्सून - सोयाबीन:**\n100mm पाऊस झाल्यावर पेरणी करा. जास्त पाणी साचू देऊ नका. गवत नियंत्रण 15-20 दिवसांत करा.", postmonsoon: "🍂 **परतीचा - सोयाबीन:**\nपाने पिवळी पडली की कापणी तयार. आर्द्रता 12-14% असेल तेव्हा काढणी करा.", winter: "❄️ **हिवाळा:**\nसोयाबीन हिवाळ्यात येत नाही. रब्बी पिकांकडे वळा — हरभरा, गहू.", summer: "☀️ **उन्हाळा:**\nसोयाबीन उन्हाळ्यात फारसे घेत नाहीत. जमीन सुधारणेसाठी हे योग्य वेळ आहे." }
  },
  hi: {
    premonsoon: { cotton: "🌤️ **पूर्व मानसून - कपास:**\nअप्रैल अंत तक भूमि तैयार करें। जून 15 के बाद बुवाई करें। बीज उपचार (थायरम+कार्बेन्डाजिम) जरूरी है।", monsoon: "🌧️ **मानसून - कपास:**\nमानसून आने पर तुरंत बुवाई करें। पंक्तियों के बीच 3x1.5 फुट अंतर रखें। जल निकासी महत्वपूर्ण है।", postmonsoon: "🍂 **लौटता मानसून - कपास:**\nकपास खिलने पर पानी कम करें। बॉलवर्म नियंत्रण के लिए जाल लगाएं। चुनाई शुरू करें।", winter: "❄️ **शीतकाल - कपास:**\nअंतिम चुनाई पूरी करें। खेत साफ करें। अगले सीजन के लिए खाद प्रबंधन शुरू करें।", summer: "☀️ **गर्मी - कपास:**\nगहरी जुताई करें। धूप में मिट्टी तपने दें — कीट नष्ट होंगे। मई में बीज खरीदें।" },
    soybean: { premonsoon: "🌤️ **पूर्व मानसून - सोयाबीन:**\nजून पहले हफ्ते में बुवाई की तैयारी करें। उन्नत किस्म (JS 9305) चुनें। राइजोबियम बीज उपचार करें।", monsoon: "🌧️ **मानसून - सोयाबीन:**\n100mm बारिश के बाद बुवाई करें। जलभराव से बचाएं। 15-20 दिनों में निराई करें।", postmonsoon: "🍂 **लौटता मानसून - सोयाबीन:**\nपत्तियां पीली होने पर फसल तैयार है। 12-14% नमी पर कटाई करें।", winter: "❄️ **शीतकाल:**\nसोयाबीन सर्दियों में नहीं होती। रबी फसलों की ओर जाएं।", summer: "☀️ **गर्मी:**\nसोयाबीन गर्मियों में नहीं होती। मिट्टी सुधार के लिए यह सही समय है।" }
  },
  en: {
    premonsoon: { cotton: "🌤️ **Pre-Monsoon - Cotton:**\nPrepare land by end of April. Sow after June 15. Treat seeds with Thiram+Carbendazim.", monsoon: "🌧️ **Monsoon - Cotton:**\nSow immediately after monsoon arrives. Maintain 3x1.5 ft row spacing. Ensure good drainage.", postmonsoon: "🍂 **Post-Monsoon - Cotton:**\nReduce irrigation during boll opening. Install pheromone traps for bollworm. Begin picking.", winter: "❄️ **Winter - Cotton:**\nComplete final picking. Clear fields. Start fertilizer planning for next season.", summer: "☀️ **Summer - Cotton:**\nDo deep ploughing. Let soil absorb sunlight to destroy pests. Purchase seeds in May." },
    soybean: { premonsoon: "🌤️ **Pre-Monsoon - Soybean:**\nPrepare for sowing in first week of June. Choose improved varieties (JS 9305). Do Rhizobium seed treatment.", monsoon: "🌧️ **Monsoon - Soybean:**\nSow after 100mm rainfall. Prevent waterlogging. Weed control within 15-20 days.", postmonsoon: "🍂 **Post-Monsoon - Soybean:**\nWhen leaves turn yellow, crop is ready. Harvest at 12-14% moisture.", winter: "❄️ **Winter:**\nSoybean does not grow in winter. Switch to rabi crops — wheat, chickpea.", summer: "☀️ **Summer:**\nSoybean is not suitable for summer. Good time for soil improvement." }
  }
};

// ─── Disaster / Scheme Data ──────────────────────────────────────────────────
const SCHEMES = {
  mr: (type, pct, insured, land) => {
    const typeMap = { hail: "गारपीट", flood: "पूर", drought: "दुष्काळ", heat: "उष्णतेची लाट", pest: "कीड/रोग", rain: "अवकाळी पाऊस" };
    let r = `🆘 **${typeMap[type]} साठी योजना:**\n\n`;
    if (insured === 'yes') r += "✅ **PMFBY (प्रधानमंत्री फसल विमा योजना)**\n   📋 72 तासांच्या आत तालुका कृषी अधिकाऱ्यांना कळवा\n   📋 मोबाइल: 14447 किंवा crops.gov.in\n   📋 जमीन उतारा, पेरणी प्रमाणपत्र जोडा\n\n";
    if (pct >= 33) r += "✅ **NDRF/SDRF नुकसान भरपाई**\n   📋 तहसील कार्यालयात अर्ज करा\n   📋 पंचनामा होणे आवश्यक\n\n";
    if (land === 'marginal') r += "✅ **अल्पभूधारक शेतकरी योजना** — प्राधान्य मिळेल\n";
    r += "📞 **हेल्पलाइन:** 1800-180-1551 (कृषी विभाग)\n";
    r += "🌐 **agrimaharashtra.gov.in** वर अर्ज करा.";
    return r;
  },
  hi: (type, pct, insured, land) => {
    const typeMap = { hail: "ओलावृष्टि", flood: "बाढ़", drought: "सूखा", heat: "लू", pest: "कीट/रोग", rain: "बेमौसम बारिश" };
    let r = `🆘 **${typeMap[type]} के लिए योजनाएं:**\n\n`;
    if (insured === 'yes') r += "✅ **PMFBY (प्रधानमंत्री फसल बीमा योजना)**\n   📋 72 घंटे के भीतर तहसील कृषि अधिकारी को सूचित करें\n   📋 हेल्पलाइन: 14447 या crops.gov.in\n\n";
    if (pct >= 33) r += "✅ **NDRF/SDRF मुआवजा**\n   📋 तहसील कार्यालय में आवेदन करें\n   📋 पंचनामा होना जरूरी है\n\n";
    if (land === 'marginal') r += "✅ **लघु/सीमांत किसान योजना** — प्राथमिकता मिलेगी\n";
    r += "📞 **हेल्पलाइन:** 1800-180-1551\n";
    r += "🌐 **agrimaharashtra.gov.in** पर आवेदन करें।";
    return r;
  },
  en: (type, pct, insured, land) => {
    const typeMap = { hail: "Hailstorm", flood: "Flood", drought: "Drought", heat: "Heat Wave", pest: "Pest/Disease", rain: "Unseasonal Rain" };
    let r = `🆘 **Schemes for ${typeMap[type]}:**\n\n`;
    if (insured === 'yes') r += "✅ **PMFBY (PM Fasal Bima Yojana)**\n   📋 Inform Taluka Agriculture Office within 72 hours\n   📋 Helpline: 14447 or crops.gov.in\n\n";
    if (pct >= 33) r += "✅ **NDRF/SDRF Compensation**\n   📋 Apply at Tehsil office\n   📋 Panchnama survey is mandatory\n\n";
    if (land === 'marginal') r += "✅ **Marginal Farmer Priority Scheme** — You get priority relief\n";
    r += "📞 **Helpline:** 1800-180-1551\n";
    r += "🌐 Apply at **agrimaharashtra.gov.in**";
    return r;
  }
};

// ─── Tab System ──────────────────────────────────────────────────────────────
function showTab(tabId, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.add('active');
  btn.classList.add('active');
  if (tabId === 'weather') loadRealtimeWeather();
}

// ─── Region & Language ───────────────────────────────────────────────────────
function setRegion(btn, region) {
  currentRegion = region;
  document.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function setLang(btn, lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('userInput').placeholder = UI[lang].placeholder;
  const qBtns = document.querySelectorAll('#quickBtns button span');
  UI[lang].quick.forEach((label, i) => {
    if (qBtns[i]) qBtns[i].textContent = label.replace(/^[^\s]+ /, '');
  });
  document.getElementById('welcomeMsg').textContent = UI[lang].welcome;
}

// ─── Chat Functions ──────────────────────────────────────────────────────────
function appendMessage(text, sender) {
  const chatBox = document.getElementById("chatBox");
  const div = document.createElement("div");
  div.className = `message ${sender}`;
  const senderLabel = document.createElement("span");
  senderLabel.className = "sender";
  senderLabel.textContent = sender === 'bot' ? 'SAATHI_BOT' : UI[currentLang].you;
  const textSpan = document.createElement("span");
  textSpan.textContent = text;
  div.appendChild(senderLabel);
  div.appendChild(textSpan);
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
  return div;
}

function getResponse(text) {
  const t = text.toLowerCase();
  const lang = currentLang;
  const region = currentRegion;
  const isCrop    = /पीक|crop|फसल|सोयाबीन|कापूस|भात|ऊस|द्राक्ष|कांदा|soybean|cotton|onion|grape/.test(t);
  const isPest    = /कीड|pest|रोग|कीट|disease|नाशक|किडा/.test(t);
  const isMarket  = /बाजार|market|भाव|price|किंमत|दर|mandi/.test(t);
  const isSoil    = /जमीन|soil|माती|मिट्टी|pH|खत|fertilizer/.test(t);
  const isWeather = /हवामान|weather|पाऊस|rain|मौसम|तापमान|temperature/.test(t);
  if (isCrop) {
    const regionData = RESPONSES.crop[lang];
    return regionData[region] || regionData["Vidarbha"];
  }
  if (isPest)    return RESPONSES.pest[lang].default;
  if (isMarket)  return RESPONSES.market[lang].default;
  if (isSoil)    return RESPONSES.soil[lang].default;
  if (isWeather) return RESPONSES.weather[lang].default;
  return RESPONSES.unknown[lang];
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text  = input.value.trim();
  if (!text) return;
  appendMessage(text, "user");
  input.value = "";
  const thinkingDiv = appendMessage("...", "bot");
  setTimeout(() => {
    const reply = getResponse(text);
    thinkingDiv.querySelector("span:last-child").textContent = reply;
    document.getElementById("chatBox").scrollTop = 9999;
  }, 500);
}

function quickAsk(index) {
  const question = UI[currentLang].quickQ[index];
  document.getElementById("userInput").value = question;
  sendMessage();
}

// ─── Soil Analysis ───────────────────────────────────────────────────────────
function analyzeSoil() {
  const ph     = parseFloat(document.getElementById('soilPh').value) || 7;
  const n      = parseFloat(document.getElementById('soilN').value) || 0;
  const p      = parseFloat(document.getElementById('soilP').value) || 0;
  const k      = parseFloat(document.getElementById('soilK').value) || 0;
  const area   = document.getElementById('soilArea').value;
  const season = document.getElementById('soilSeason').value;
  const result = SOIL_ADVICE[currentLang](ph, n, p, k, area, season);
  const el = document.getElementById('soilResult');
  el.textContent = result;
  el.classList.add('show');
}

// ─── Market Prices ───────────────────────────────────────────────────────────
function getMarketPrice() {
  const crop = document.getElementById('marketCrop').value;
  const data = MARKET_PRICES[crop];
  const card = document.getElementById('priceCard');
  document.getElementById('priceCropName').textContent = `▶ ${data[currentLang]} // MARKET PRICE`;
  document.getElementById('priceRange').textContent = `₹${data.min.toLocaleString()} – ₹${data.max.toLocaleString()}`;
  document.getElementById('priceUnit').textContent = data.unit + ' (अंदाजे / Approx)';
  card.classList.add('show');
}

// ─── Gain/Loss Calculator ────────────────────────────────────────────────────
function calcGainLoss() {
  const yld  = parseFloat(document.getElementById('glYield').value) || 0;
  const price = parseFloat(document.getElementById('glPrice').value) || 0;
  const cost  = parseFloat(document.getElementById('glCost').value) || 0;
  const trans = parseFloat(document.getElementById('glTransport').value) || 0;
  const revenue = yld * price;
  const total_cost = cost + trans;
  const net = revenue - total_cost;
  const breakeven = total_cost / (yld || 1);
  const el = document.getElementById('glResult');
  const isProfit = net >= 0;
  const msgs = {
    mr: `💹 नफा-तोटा हिशोब:\n\nएकूण उत्पन्न: ₹${revenue.toLocaleString()}\nएकूण खर्च: ₹${total_cost.toLocaleString()}\n\n${isProfit ? '✅ नफा' : '❌ तोटा'}: ₹${Math.abs(net).toLocaleString()}\n\nब्रेक-इव्हन भाव: ₹${Math.round(breakeven).toLocaleString()}/क्विंटल\n${!isProfit ? '⚠️ सध्या विकू नका — साठवणूक करा किंवा एफपीओद्वारे विका.' : '💡 चांगला नफा! योग्य वेळी विका.'}`,
    hi: `💹 लाभ-हानि हिसाब:\n\nकुल आय: ₹${revenue.toLocaleString()}\nकुल खर्च: ₹${total_cost.toLocaleString()}\n\n${isProfit ? '✅ लाभ' : '❌ हानि'}: ₹${Math.abs(net).toLocaleString()}\n\nब्रेक-ईवन भाव: ₹${Math.round(breakeven).toLocaleString()}/क्विंटल\n${!isProfit ? '⚠️ अभी मत बेचें — भंडारण करें या FPO के माध्यम से बेचें।' : '💡 अच्छा लाभ! सही समय पर बेचें।'}`,
    en: `💹 Gain/Loss Report:\n\nTotal Revenue: ₹${revenue.toLocaleString()}\nTotal Cost: ₹${total_cost.toLocaleString()}\n\n${isProfit ? '✅ Profit' : '❌ Loss'}: ₹${Math.abs(net).toLocaleString()}\n\nBreak-even Price: ₹${Math.round(breakeven).toLocaleString()}/quintal\n${!isProfit ? '⚠️ Do not sell now — consider storage or selling via FPO.' : '💡 Good profit! Sell at the right time.'}`
  };
  el.textContent = msgs[currentLang];
  el.className = `result-box show ${isProfit ? 'blue-accent' : 'red-accent'}`;
}

// ─── Disaster Schemes ────────────────────────────────────────────────────────
function findSchemes() {
  const type     = document.getElementById('disasterType').value;
  const pct      = parseInt(document.getElementById('disasterPct').value);
  const insured  = document.getElementById('disasterInsured').value;
  const land     = document.getElementById('disasterLand').value;
  const result   = SCHEMES[currentLang](type, pct, insured, land);
  const el = document.getElementById('disasterResult');
  el.textContent = result;
  el.className = 'result-box show yellow-accent';
}

// ─── Weather Advisory ────────────────────────────────────────────────────────
function getWeatherAdvice() {
  const season = document.getElementById('wxSeason').value;
  const crop   = document.getElementById('wxCrop').value;
  const lang = currentLang;
  let advice = '';
  // Try specific crop advice, fall back to generic
  if (WEATHER_ADVICE[lang] && WEATHER_ADVICE[lang][season] && WEATHER_ADVICE[lang][season][crop]) {
    advice = WEATHER_ADVICE[lang][season][crop];
  } else {
    advice = RESPONSES.weather[lang].default;
  }
  const el = document.getElementById('wxResult');
  el.textContent = advice;
  el.classList.add('show');
}

// ─── Real-time Weather (Open-Meteo — FREE, no API key) ──────────────────────
const REGION_COORDS = {
  Vidarbha:             { lat: 20.5937, lon: 79.0193, name: "VIDARBHA" },
  Marathwada:           { lat: 18.3522, lon: 76.9197, name: "MARATHWADA" },
  Konkan:               { lat: 17.3850, lon: 73.5180, name: "KONKAN" },
  "Western Maharashtra":{ lat: 17.6599, lon: 74.0088, name: "WESTERN MAHA." },
  Nashik:               { lat: 19.9975, lon: 73.7898, name: "NASHIK" },
  Khandesh:             { lat: 21.0145, lon: 75.5626, name: "KHANDESH" }
};

const WMO_CODES = {
  0:  { icon: "☀️", mr: "स्वच्छ ऊन",       hi: "साफ धूप",       en: "Clear sky" },
  1:  { icon: "🌤️", mr: "बहुतेक स्वच्छ",   hi: "ज्यादातर साफ",  en: "Mainly clear" },
  2:  { icon: "⛅", mr: "अर्धवट ढगाळ",      hi: "आंशिक बादल",   en: "Partly cloudy" },
  3:  { icon: "☁️", mr: "ढगाळ",             hi: "बादलयुक्त",    en: "Overcast" },
  45: { icon: "🌫️", mr: "धुक्याचे",         hi: "कोहरा",        en: "Foggy" },
  51: { icon: "🌦️", mr: "हलका पाऊस",        hi: "हल्की बारिश",  en: "Light drizzle" },
  61: { icon: "🌧️", mr: "पाऊस",             hi: "बारिश",        en: "Rain" },
  71: { icon: "🌨️", mr: "हिमवर्षाव",        hi: "बर्फबारी",     en: "Snow" },
  80: { icon: "⛈️", mr: "जोरदार पाऊस",      hi: "भारी बारिश",   en: "Heavy rain" },
  95: { icon: "⛈️", mr: "गडगडाटी वादळ",    hi: "तूफान",        en: "Thunderstorm" }
};

function getWMO(code) {
  const keys = Object.keys(WMO_CODES).map(Number).sort((a,b)=>b-a);
  for (const k of keys) { if (code >= k) return WMO_CODES[k]; }
  return WMO_CODES[0];
}

async function loadRealtimeWeather() {
  const coords = REGION_COORDS[currentRegion] || REGION_COORDS["Vidarbha"];
  const loading = document.getElementById('rwLoading');
  const content = document.getElementById('rwContent');
  loading.style.display = 'block';
  content.style.display = 'none';

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,uv_index,weather_code&wind_speed_unit=kmh&timezone=Asia%2FKolkata`;
    const res  = await fetch(url);
    const data = await res.json();
    const c    = data.current;
    const wmo  = getWMO(c.weather_code);

    document.getElementById('rwIcon').textContent  = wmo.icon;
    document.getElementById('rwTemp').textContent  = `${Math.round(c.temperature_2m)}°C`;
    document.getElementById('rwPlace').textContent = coords.name + ", MAHARASHTRA";
    document.getElementById('rwDesc').textContent  = wmo[currentLang] || wmo.en;
    document.getElementById('rwHumid').textContent = `${c.relative_humidity_2m}%`;
    document.getElementById('rwWind').textContent  = `${Math.round(c.wind_speed_10m)} km/h`;
    document.getElementById('rwRain').textContent  = `${c.precipitation} mm`;
    document.getElementById('rwUV').textContent    = `${c.uv_index ?? '--'}`;

    loading.style.display = 'none';
    content.style.display = 'flex';
    content.style.flexWrap = 'wrap';

    // Update alert cards dynamically
    updateAlertCards(c, wmo);
  } catch (e) {
    loading.textContent = "📡 हवामान डेटा उपलब्ध नाही. इंटरनेट तपासा.";
  }
}

function updateAlertCards(c, wmo) {
  const cards = document.getElementById('alertCards');
  const temp  = c.temperature_2m;
  const humid = c.relative_humidity_2m;
  const rain  = c.precipitation;
  const wind  = c.wind_speed_10m;

  let html = '';

  // Heat alert
  if (temp > 40) {
    html += `<div class="alert-card red"><div class="alert-title">🌡️ उष्णतेची लाट / Heat Wave</div><div class="alert-body">सध्याचे तापमान ${Math.round(temp)}°C आहे. सकाळी 7 च्या आधी काम करा. / Temperature is ${Math.round(temp)}°C. Work before 7 AM.</div></div>`;
  } else if (temp > 35) {
    html += `<div class="alert-card amber"><div class="alert-title">☀️ उष्ण हवामान / Hot Weather</div><div class="alert-body">तापमान ${Math.round(temp)}°C — सिंचन करा. / Temp ${Math.round(temp)}°C — irrigate crops.</div></div>`;
  } else {
    html += `<div class="alert-card green"><div class="alert-title">✅ तापमान सामान्य / Normal Temp</div><div class="alert-body">सध्याचे तापमान ${Math.round(temp)}°C — शेतीसाठी उत्तम. / Temp ${Math.round(temp)}°C — good for farming.</div></div>`;
  }

  // Rain/weather alert
  if (rain > 5) {
    html += `<div class="alert-card blue"><div class="alert-title">🌧️ पाऊस / Rainfall</div><div class="alert-body">सध्या ${rain}mm पाऊस. फवारणी थांबवा. / ${rain}mm rain now. Stop spraying.</div></div>`;
  } else if (c.weather_code >= 95) {
    html += `<div class="alert-card red"><div class="alert-title">⛈️ वादळ / Thunderstorm</div><div class="alert-body">गडगडाटी वादळ — शेताबाहेर रहा. / Thunderstorm alert — stay safe.</div></div>`;
  } else {
    html += `<div class="alert-card blue"><div class="alert-title">${wmo.icon} आकाश / Sky</div><div class="alert-body">${wmo.mr} — ${wmo.en}. हवा: ${Math.round(wind)} km/h</div></div>`;
  }

  // Humidity alert
  if (humid > 80) {
    html += `<div class="alert-card amber"><div class="alert-title">💧 जास्त आर्द्रता / High Humidity</div><div class="alert-body">आर्द्रता ${humid}% — बुरशीजन्य रोग होण्याची शक्यता. / ${humid}% humidity — fungal disease risk.</div></div>`;
  } else if (humid < 30) {
    html += `<div class="alert-card amber"><div class="alert-title">🏜️ कोरडे हवामान / Dry Conditions</div><div class="alert-body">आर्द्रता फक्त ${humid}% — सिंचन वाढवा. / Only ${humid}% humidity — increase irrigation.</div></div>`;
  } else {
    html += `<div class="alert-card green"><div class="alert-title">✅ आर्द्रता सामान्य / Normal Humidity</div><div class="alert-body">आर्द्रता ${humid}% — शेतीसाठी चांगली. / ${humid}% humidity — suitable for farming.</div></div>`;
  }

  // Wind alert
  if (wind > 40) {
    html += `<div class="alert-card red"><div class="alert-title">💨 जोरदार वारा / Strong Wind</div><div class="alert-body">वाऱ्याचा वेग ${Math.round(wind)} km/h — फवारणी करू नका. / Wind speed ${Math.round(wind)} km/h — avoid spraying.</div></div>`;
  } else {
    html += `<div class="alert-card green"><div class="alert-title">🌬️ वारा / Wind</div><div class="alert-body">वाऱ्याचा वेग ${Math.round(wind)} km/h — सामान्य. / Wind: ${Math.round(wind)} km/h — normal.</div></div>`;
  }

  cards.innerHTML = html;
}

// ─── Init ────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("userInput").addEventListener("keydown", e => {
    if (e.key === "Enter") sendMessage();
  });
});
