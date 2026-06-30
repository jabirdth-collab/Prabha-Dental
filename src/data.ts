import { Treatment, FAQItem, Testimonial, GalleryItem, StatItem } from "./types";

export const TREATMENTS: Treatment[] = [
  {
    id: "implants",
    title: "Dental Implants",
    shortDesc: "Permanent, state-of-the-art biological tooth replacement solutions.",
    fullDesc: "Dental implants are titanium posts surgically placed into the jawbone, acting as artificial tooth roots. Once integrated, they support ultra-premium zirconia or ceramic dental crowns that look, feel, and function exactly like natural teeth.",
    icon: "ShieldAlert", // Customized icons matched to Lucide names in component
    symptoms: ["Missing single or multiple teeth", "Loose or uncomfortable dentures", "Difficulty chewing or speaking", "Bone loss in the jaw line"],
    benefits: ["Restores full chewing power (100% force)", "Prevents bone deterioration & preserves facial structure", "Does not grind down adjacent teeth", "Provides a life-long permanent solution"],
    recoveryTime: "3 to 6 months for complete integration, normal chewing resumes within a few days."
  },
  {
    id: "rct",
    title: "Root Canal Treatment",
    shortDesc: "Painless computerized therapy to save infected teeth.",
    fullDesc: "We specialize in computerized single-sitting Root Canal Treatments (RCT) using state-of-the-art rotary endodontics. This procedure eliminates deep dental infections in the pulp cavity, sterilizes the canal, and preserves your natural tooth structure.",
    icon: "Activity",
    symptoms: ["Severe, throbbing tooth pain", "Sensitivity to hot & cold liquids", "Swelling or tenderness in the gums", "Discoloration or darkening of the tooth"],
    benefits: ["Saves your natural tooth from extraction", "Painless computerized local anesthesia", "Completed in just one or two sessions", "Restores normal bite force and chewing function"],
    recoveryTime: "1 to 2 days, minor tenderness is fully manageable with standard mild medication."
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth Removal",
    shortDesc: "Gentle, expert surgical extraction of impacted third molars.",
    fullDesc: "As an expert Oral & Maxillofacial Surgeon, Dr. Amit Kumar performs surgical removal of impacted wisdom teeth with maximum precision, minimal trauma, and rapid healing. We utilize digital dental X-Rays to map nerve pathways accurately.",
    icon: "Scissors",
    symptoms: ["Pain or swelling in the back of the jaw", "Stiffness in the jaw or difficulty opening the mouth", "Gums bleeding or tender behind the molars", "Crowding or damage to adjacent teeth"],
    benefits: ["Prevents infection and cyst formation", "Protects adjacent teeth from alignment damage", "Advanced surgical techniques minimize postoperative swelling", "Fast healing protocol under sterile guidance"],
    recoveryTime: "3 to 5 days, with direct guidance and customized follow-up care."
  },
  {
    id: "smile-design",
    title: "Smile Designing",
    shortDesc: "Aesthetic enhancement for a flawless, bright smile.",
    fullDesc: "Smile Designing involves a comprehensive digital analysis of your facial proportions, lips, and teeth alignment. Using ultra-thin premium E-max dental veneers, composite laminates, and gum contouring, we craft the perfect smile you've always dreamed of.",
    icon: "Sparkles",
    symptoms: ["Visible gaps between teeth", "Chipped, cracked, or worn-down teeth", "Irregular tooth sizing or alignment", "Persistent yellowing or discoloration"],
    benefits: ["Boosts personal confidence and facial aesthetics", "Provides natural-looking, stain-resistant results", "Custom color matching and shape tailoring", "Long-lasting premium restoration"],
    recoveryTime: "Immediate after cementation, zero recovery down-time."
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    shortDesc: "Laser teeth whitening and gum reshaping treatments.",
    fullDesc: "Cosmetic dentistry focuses on elevating the visual harmony of your teeth. We offer clinical-strength Laser Teeth Whitening that brightens your smile up to 8 shades in a single 45-minute session, along with precise laser gum reshaping.",
    icon: "Smile",
    symptoms: ["Dull, stained, or yellowed teeth", "Gummy smile showing too much tissue", "Uneven gum margins"],
    benefits: ["Fast, safe, and highly effective whitening", "Painless laser technology with zero sensitivity", "Long-term cosmetic radiance", "Instantly rejuvenates facial appearance"],
    recoveryTime: "Zero down-time. Patients are advised to follow a 'white diet' for 48 hours."
  },
  {
    id: "cleanings",
    title: "Teeth Scaling & Polishing",
    shortDesc: "Clinical removal of plaque, tartar, and coffee stains.",
    fullDesc: "Using advanced ultrasonic scaling technology, we remove hard plaque, calculus deposits, and deep-set tea, coffee, or tobacco stains from behind and between teeth. Polishing leaves the tooth surfaces smooth, preventing future plaque accumulation.",
    icon: "Sparkle",
    symptoms: ["Bleeding gums during brushing", "Bad breath (halitosis)", "Rough yellow or brown deposits on teeth", "Slight gum recession"],
    benefits: ["Eliminates bad breath completely", "Prevents gingivitis and periodontal gum disease", "Removes stubborn stains for a cleaner feel", "Crucial for long-term systemic health"],
    recoveryTime: "Zero down-time, immediate clean and fresh oral feel."
  },
  {
    id: "crowns-bridges",
    title: "Dental Crowns & Bridges",
    shortDesc: "Premium ceramic and metal-free Zirconia restorations.",
    fullDesc: "Bridges and crowns are fixed prosthetic devices that restore damaged or missing teeth. We use premium metal-free Zirconia (CAD/CAM designed) and E-max crowns which mimic the natural translucency of tooth enamel while offering maximum durability.",
    icon: "Crown",
    symptoms: ["Weak, fractured, or heavily filled teeth", "Spaces left by missing teeth", "To protect a root-canal treated tooth"],
    benefits: ["Exceptional strength and fracture resistance", "Perfect visual match with natural teeth", "Restores normal dental arch alignment", "Prevents movement of adjacent teeth"],
    recoveryTime: "None. Restored chewing comfort immediately after placement."
  },
  {
    id: "dentures",
    title: "Custom Dentures",
    shortDesc: "Comfortable, biological partial & full denture options.",
    fullDesc: "For patients missing multiple or all teeth, we provide custom-molded dentures. Options include flexible partial dentures, high-impact complete acrylic plates, and modern implant-supported overdentures that remain firmly locked in place.",
    icon: "HeartHandshake",
    symptoms: ["Loss of most or all natural teeth", "Sunken cheeks or aged facial profile", "Inability to chew normal solid food"],
    benefits: ["Restores chewing capability for a healthy diet", "Improves speech clarity and pronunciation", "Supports facial muscles to restore youthful aesthetics", "Extremely comfortable and secure fit"],
    recoveryTime: "1 to 2 weeks for adaptation to speaking and chewing."
  },
  {
    id: "kids",
    title: "Pediatric (Kids) Dentistry",
    shortDesc: "Gentle, stress-free dental care for children.",
    fullDesc: "Our pediatric care ensures a positive and fear-free relationship with the dentist. We offer decay-preventing fluoride applications, dental sealants, painless cavity fillings, and oral habit guidance for growing kids in a colorful environment.",
    icon: "Baby",
    symptoms: ["Cavities in milk teeth", "Sensitivity while eating sweets", "Thump-sucking or mouth-breathing habits", "Crooked erupting permanent teeth"],
    benefits: ["Maintains healthy milk teeth crucial for jaw growth", "Painless and kid-friendly behavior management", "Prevents future major alignment problems", "Teaches children lifelong hygiene habits"],
    recoveryTime: "Zero down-time, children are rewarded with certificates of bravery!"
  },
  {
    id: "extractions",
    title: "Tooth Extraction",
    shortDesc: "Safe, painless, and aseptic dental extractions.",
    fullDesc: "When a tooth is severely decayed, fractured beyond repair, or loose due to advanced gum disease, we perform safe and hygienic extractions under strict sterile conditions, ensuring absolute comfort and zero pain.",
    icon: "Trash2",
    symptoms: ["Severely broken or mobile teeth", "Persistent abscess or severe dental infection", "Severe crowding needing orthodontic preparation"],
    benefits: ["Stops the spread of severe bone infection", "Eliminates chronic localized toothache", "Prepares the foundation for implants or bridges", "Quick and highly secure clinical procedure"],
    recoveryTime: "24 to 48 hours for primary clot formation, full gum healing in 2 weeks."
  },
  {
    id: "jaw-surgery",
    title: "Oral & Maxillofacial Surgery",
    shortDesc: "Corrective jaw surgery, trauma care, and pathology.",
    fullDesc: "Led by Dr. Amit Kumar (MDS), we are Patna's premier center for advanced oral and maxillofacial surgery. We treat jaw fractures, correct facial asymmetries (orthognathic surgery), remove oral cysts, and manage joint disorders (TMJ).",
    icon: "HeartPulse",
    symptoms: ["Clicking jaw joint pain (TMJ)", "Facial trauma or jaw fracture from accidents", "Inability to open mouth (Trismus)", "Protruding or receding jaw alignments"],
    benefits: ["Restores facial aesthetics, symmetry, and function", "Surgical trauma care is handled by a board-certified specialist", "Relieves chronic TMJ jaw joint pain", "Improves airway volume and breathing patterns"],
    recoveryTime: "Varies depending on complexity; full guidance provided."
  },
  {
    id: "rehabilitation",
    title: "Full Mouth Rehabilitation",
    shortDesc: "Comprehensive rebuild of chewing, health, and smile.",
    fullDesc: "Designed for individuals with extensive dental damage, missing teeth, or worn-down bites. We combine implants, crowns, RCTs, and periodontal treatments to completely rebuild the chewing mechanics and natural aesthetics of your mouth.",
    icon: "Dna",
    symptoms: ["Multiple decayed, broken, or missing teeth", "Severely worn-down teeth due to grinding", "Constant jaw pain and clicking joints", "Inability to chew any solid foods"],
    benefits: ["Restores comprehensive oral health and digestion", "Completely custom-designed chewing architecture", "Rejuvenates facial height and youthful jaw shape", "Transforms quality of life and overall self-image"],
    recoveryTime: "Staged treatment over several weeks, planned meticulously."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How painful is dental implant surgery?",
    answer: "Dental implant surgery is surprisingly comfortable because it is performed under powerful local anesthesia. Most patients report that placing an implant is less painful than a simple tooth extraction. Dr. Amit Kumar's specialized MDS training in surgery ensures gentle tissue handling. Post-operative discomfort is mild and easily managed with prescribed painkillers for 2-3 days."
  },
  {
    question: "How many visits are required for a dental implant?",
    answer: "Usually, the implant process requires 2-3 visits staged over 3 to 6 months. In the first visit, the titanium implant is placed into the jawbone. Over the next few months, the bone grows around the implant (osseointegration). During the second visit, an impression is taken, and in the final visit, your premium customized Zirconia crown is permanently attached."
  },
  {
    question: "Is root canal treatment (RCT) painful?",
    answer: "No. Modern root canal treatment at Prabha Dental Hospital is completely painless. We use high-precision computerized rotary files and advanced anesthetics that numb the area completely. The primary goal of an RCT is to relieve the agonizing pain caused by tooth decay. Most patients feel immediate relief after their first sitting."
  },
  {
    question: "How long do dental implants last?",
    answer: "Dental implants are designed to be a permanent, lifetime solution. Unlike dental bridges or dentures which might require replacement every 5-10 years, an implant fuses directly with your jawbone. With regular brushing, flossing, and bi-annual dental check-ups, your implant can easily last for several decades."
  },
  {
    question: "What is the cost of dental treatments at Prabha Hospital?",
    answer: "We believe in transparent, honest, and affordable pricing. The cost depends entirely on the type of treatment, choice of material (e.g., metal-free Zirconia vs. porcelain crowns), and complexity. We provide a full cost breakdown during your initial checkup so there are no hidden charges later. Our dental scaling starts at very affordable rates."
  },
  {
    question: "What are the clinic timings of Prabha Dental Hospital?",
    answer: "Prabha Dental Hospital is open seven days a week to serve you better. Monday to Saturday: 9:00 AM to 2:00 PM and 4:00 PM to 9:00 PM. Sunday: 9:00 AM to 2:00 PM and 4:00 PM to 8:00 PM. We strongly recommend booking an appointment online or via phone beforehand to minimize waiting times."
  },
  {
    question: "Do you provide emergency dental services in Patna?",
    answer: "Yes, we prioritize dental emergencies such as facial trauma, jaw fractures, severe bleeding, sudden facial swelling, or unmanageable acute toothaches. Dr. Amit Kumar is a qualified Oral & Maxillofacial Surgeon, making our center uniquely equipped in Patna to handle complex dental emergencies and facial injuries."
  },
  {
    question: "Where is the hospital located and is parking available?",
    answer: "We are centrally located at New Bangali Tola, Near Devi Asthan, Opposite NIFT College, Patna, Bihar - 800001. Our facility is easily accessible, and we have dedicated safe parking space available for our patients' vehicles right outside the hospital."
  },
  {
    question: "Why should I choose Dr. Amit Kumar for oral surgery?",
    answer: "Dr. Amit Kumar holds a prestigious MDS (Master of Dental Surgery) in Oral & Maxillofacial Surgery, which requires 3 additional years of intensive surgical training beyond a BDS degree. This makes him highly qualified to perform safe wisdom tooth removals, dental implants, jaw fracture fixations, and major facial surgical treatments with absolute surgical safety."
  },
  {
    question: "Are your clinical instruments fully sterilized?",
    answer: "Absolutely. Patient safety is our highest priority. We follow strict international sterilization standards, utilizing Class-B Autoclaves for triple-vacuum steam sterilization of all instruments. Handpieces are lubricated and autoclaved after every single patient. We also make extensive use of disposable single-use items wherever possible."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Amitesh Singh",
    rating: 5,
    date: "2 weeks ago",
    treatment: "Dental Implants",
    review: "Dr. Amit Kumar is a genius. I was extremely nervous about getting dental implants, but his calm demeanor and surgical skill made the entire procedure completely painless. The hospital is impeccably clean, and the staff is very polite. The crown feels so natural!",
    initials: "AS"
  },
  {
    id: "test-2",
    name: "Ranjana Devi",
    rating: 5,
    date: "1 month ago",
    treatment: "Single-Sitting RCT",
    review: "I had excruciating tooth pain and could not sleep for three nights. I visited Prabha Dental Hospital, and Dr. Amit did a computerized single-sitting RCT. I felt no pain at all, even when he gave the injection. Truly a blessing for patients in Patna.",
    initials: "RD"
  },
  {
    id: "test-3",
    name: "Preeti Kumari",
    rating: 5,
    date: "3 weeks ago",
    treatment: "Smile Designing",
    review: "I had wide gaps in my front teeth which made me self-conscious when laughing. Dr. Amit redesigned my smile with ceramic veneers in just two sittings. The transformation is jaw-dropping and looks extremely natural. I can't stop smiling now!",
    initials: "PK"
  },
  {
    id: "test-4",
    name: "Rajiv Ranjan",
    rating: 5,
    date: "2 months ago",
    treatment: "Impacted Wisdom Tooth Surgery",
    review: "My lower wisdom tooth was sleeping flat inside the jawbone and hurting badly. Two other clinics told me it was risky due to nerves. Dr. Amit removed it within 12 minutes with absolute ease. Minimal swelling and very quick recovery. Patna's finest surgeon.",
    initials: "RR"
  },
  {
    id: "test-5",
    name: "Dr. S. K. Pathak",
    rating: 5,
    date: "1 month ago",
    treatment: "Dental Scaling & Crowns",
    review: "As a practicing physician, I am highly critical of hospital sterilization protocols. Prabha Dental Hospital exceeded my expectations. Their class-B autoclave sterilization is immaculate. Dr. Amit is very professional and his work is highly refined.",
    initials: "SP"
  }
];

export const STATS: StatItem[] = [
  {
    label: "Happy Patients",
    value: "5,000+",
    sub: "Successful treatment cases"
  },
  {
    label: "Dental Implants Placed",
    value: "1,500+",
    sub: "Highly precise implant fixtures"
  },
  {
    label: "Years Experience",
    value: "10+",
    sub: "Clinical surgical expertise"
  },
  {
    label: "Patient Satisfaction",
    value: "100%",
    sub: "As verified by digital reviews"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "img-1",
    title: "Modern Dental Clinic Reception",
    category: "Clinic Tour",
    description: "Welcome desk at Prabha Dental, designed with an elegant and warm clinical ambiance for a reassuring patient experience.",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-2",
    title: "Luxury Waiting Lounge",
    category: "Clinic Tour",
    description: "Spacious, comfortable, and hygienic lounge featuring calming premium color themes and fresh modern interiors.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-3",
    title: "Advanced Dental Treatment Room",
    category: "Clinic Tour",
    description: "Ultra-modern treatment suite fitted with computerized ergonomics, high-tech systems, and optimal surgical lighting.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-4",
    title: "Digital X-Ray Room",
    category: "Technology",
    description: "Low-radiation, high-precision panoramic digital radiograph room for accurate jaw bone diagnostics and mapping.",
    img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-5",
    title: "Dental Implant Procedure",
    category: "Implants",
    description: "Dr. Amit Kumar executing a stitch-less computerized dental implant using world-renowned titanium implant systems.",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-6",
    title: "Root Canal Treatment Suite",
    category: "Treatments",
    description: "Advanced single-sitting root canal treatment performed under high magnification for flawless structural preservation.",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-7",
    title: "Teeth Cleaning Procedure",
    category: "Hygiene",
    description: "Deep gum scaling and plaque removal utilizing modern pain-free piezo-ultrasonic technology for absolute oral health.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-8",
    title: "Teeth Whitening Procedure",
    category: "Cosmetic",
    description: "Painless cold-light laser activation for dental whitening, lifting deep organic stains safely by up to 8 shades.",
    img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-9",
    title: "Cosmetic Dentistry veneers",
    category: "Cosmetic",
    description: "High-grade translucent porcelain veneers custom crafted to match your natural tooth shades and contours.",
    img: "https://images.unsplash.com/photo-1613915611281-a170f1a624f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-10",
    title: "Professional Smile Makeover",
    category: "Cosmetic",
    description: "Exquisite symmetrical dental restoration designed to restore absolute alignment, confidence, and facial aesthetics.",
    img: "https://images.unsplash.com/photo-1522844990619-4951c40f3ded?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-11",
    title: "Dentist Consulting a Patient",
    category: "Consultation",
    description: "Senior specialist Dr. Amit Kumar explaining digital mapping and specific diagnostic stages to an outpatient.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-12",
    title: "Doctor Explaining X-Ray",
    category: "Technology",
    description: "Visual analysis of digital OPG panoramic scans on high-definition diagnostic monitors for absolute accuracy.",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-13",
    title: "Sterilization Room Laboratory",
    category: "Hygiene",
    description: "Multi-stage physical and chemical autoclave sterilization protocols ensuring complete, certified hospital hygiene.",
    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-14",
    title: "Modern Dental Equipment",
    category: "Technology",
    description: "Precision micromotors and micro-surgical instruments maintained under vacuum-sealed individual sterile pouch packets.",
    img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-15",
    title: "Happy Patient After Treatment",
    category: "Consultation",
    description: "Patient expressing complete satisfaction with pain-free treatment and beautiful therapeutic results.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-16",
    title: "Child Dental Treatment",
    category: "Treatments",
    description: "Anxiety-free, welcoming pediatric dentistry setup that turns checkups into pleasant visits for children.",
    img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-17",
    title: "Precision Dental Microscope",
    category: "Technology",
    description: "High-magnification clinical endodontic microscope for micro-RCT operations and structural tooth inspections.",
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-18",
    title: "Oral Surgery Setup Suite",
    category: "Implants",
    description: "Highly sterile minor operating theater designed for surgical tooth extractions, implants, and bone-graftings.",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-19",
    title: "Dental Chair Close-Up",
    category: "Clinic Tour",
    description: "Luxurious, fully programmable ergonomic patient seat ensuring comfort and stability during multi-hour surgeries.",
    img: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-20",
    title: "Professional Dental Team",
    category: "Consultation",
    description: "Our core medical staff of highly experienced specialists, dental hygienists, and friendly patient relationship coordinators.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-21",
    title: "Precision Clear Aligners",
    category: "Treatments",
    description: "Virtually invisible, premium orthodontic aligners custom-made to straighten teeth without metal brackets.",
    img: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-22",
    title: "Intraoral Digital Scanner",
    category: "Technology",
    description: "High-definition optical scanner providing direct 3D virtual impressions without messy materials.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-23",
    title: "Aesthetic Dental Restorations",
    category: "Cosmetic",
    description: "Composite bonding matching perfect natural tooth color gradient and strength specs.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "img-24",
    title: "Diagnostic Consultation Desk",
    category: "Consultation",
    description: "Detailed interactive treatment plans and checkup mappings with our oral medical board.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  }
];

export const CLINIC_INFO = {
  name: "Prabha Dental Hospital",
  doctor: "Dr. Amit Kumar",
  qualifications: "BDS, MDS (Oral & Maxillofacial Surgery)",
  phone: "9973690989",
  phoneDisplay: "+91 9973690989",
  location: "New Bangali Tola, Near Devi Asthan, Opposite NIFT College, Patna, Bihar - 800001",
  addressLines: [
    "New Bangali Tola,",
    "Near Devi Asthan,",
    "Opposite NIFT College,",
    "Patna, Bihar - 800001"
  ],
  timings: {
    weekdays: "Monday - Saturday: 9:00 AM – 2:00 PM & 4:00 PM – 9:00 PM",
    sunday: "Sunday: 9:00 AM – 2:00 PM & 4:00 PM – 8:00 PM"
  },
  whatsappLink: "https://wa.me/919973690989?text=Hello%20Prabha%20Dental%20Hospital,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment."
};
