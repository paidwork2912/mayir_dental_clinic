import waitingLobby from "../assets/clinic img/waitinglobby.jpeg";
import reception2 from "../assets/clinic img/reception2.jpeg";
import reception from "../assets/clinic img/reception.jpeg";
import interior4 from "../assets/clinic img/interior4.jpeg";
import interior3 from "../assets/clinic img/interior3.jpeg";
import interior2 from "../assets/clinic img/interior2.jpeg";
import interior from "../assets/clinic img/interior.jpeg";
import entrance from "../assets/clinic img/enterence.jpeg";
import doctorsSeat from "../assets/clinic img/doctorsseat.jpeg";
import shefaliJainPhoto from "../assets/doctors images/Dr.Shefali Jain.png";
import pankajJainPhoto from "../assets/doctors images/Dr.Pankaj Jain.png";
import heenaKhanPhoto from "../assets/doctors images/Dr. Heena Khan.png";
import directCompositeVeneersPhoto from "../assets/services_photos/Direct Composite Veneers.avif";
import fullMouthImplantPhoto from "../assets/services_photos/Full-Mouth Implant Fixed Prosthesis.avif";
import fracturedToothPhoto from "../assets/services_photos/Fractured Tooth Restoration with Root Canal and Emax Crown.avif";
import emaxEndoCrownPhoto from "../assets/services_photos/Emax Endo Crown.webp";
import compositeDirectVeneerPhoto from "../assets/services_photos/Composite Direct Veneer.avif";
import teethWhiteningPhoto from "../assets/services_photos/Teeth Whitening  Bleaching - Single Sitting.avif";
import toothReplacementPhoto from "../assets/services_photos/Tooth Replacement - Implant.avif";
import aestheticDentistryPhoto from "../assets/services_photos/aesthetic dentistry.webp";
import pediatricPreventionPhoto from "../assets/services_photos/pedriative pevention.png";
import wisdomToothPhoto from "../assets/services_photos/Wisdom Tooth Surgical Extraction.avif";

// Client-editable content for the gallery, doctors, and reviews.
export const seo = {
  title: "Mayur Dental Care | Trusted Dentist in Vikhroli East, Mumbai",
  description:
    "Mayur Dental Care in Vikhroli East, Mumbai offers gentle, modern dental care, including implants, root canals, cosmetic dentistry, braces, pediatric dentistry, and preventive treatments.",
  keywords:
    "dentist in Vikhroli East, dentist in Mumbai, dental clinic in Vikhroli, dental implants, root canal treatment, cosmetic dentistry, braces, pediatric dentist",
  siteName: "Mayur Dental Care",
  alternateName: "Mayur Dental Care",
  url: "https://mayurdentalclinic.in/",
  image: "https://mayurdentalclinic.in/assets/hero.png",
  locale: "en_IN",
  address: {
    street: "1st floor, Vighnaharta, Bldg No.10, 1, near Canara Bank, Tagore Nagar, Vikhroli East",
    city: "Mumbai",
    region: "Maharashtra",
    postalCode: "400083",
    country: "IN",
  },
  phone: "+91 9757399548",
  email: "hello@brightsmiledental.in",
  mapUrl: "https://maps.app.goo.gl/bXaWkzVgvzuFuw6MA",
  hours: ["Mo 11:00-22:00", "Tu 11:00-22:00", "We 11:00-22:00", "Th 11:00-22:00", "Fr 11:00-22:00", "Sa 11:00-22:00"],
};

export const galleryPhotos = [
  { src: entrance, title: "Find us with ease", alt: "Mayur Dental Care clinic entrance sign" },
  { src: reception, title: "Reception and consultation area", alt: "Reception and consultation area at Mayur Dental Care" },
  { src: waitingLobby, title: "A welcoming waiting lobby", alt: "Bright waiting lobby at Mayur Dental Care" },
  { src: doctorsSeat, title: "Carefully equipped for every visit", alt: "Dental chair and equipment at Mayur Dental Care" },
  { src: interior, title: "Advanced dental equipment", alt: "Dental equipment in a treatment room at Mayur Dental Care" },
  { src: reception2, title: "Our clinic entrance", alt: "Mayur Dental Care reception entrance" },
  { src: interior4, title: "Modern treatment room", alt: "Modern dental treatment room at Mayur Dental Care" },
  { src: interior3, title: "Comfortable dental operatory", alt: "Comfortable dental operatory at Mayur Dental Care" },
  { src: interior2, title: "Bright treatment suite", alt: "Bright dental treatment suite at Mayur Dental Care" },
];

export const services = [
  {
    title: "Direct Composite Veneers",
    description: "Conservative smile enhancement using tooth-coloured composite shaped directly for a natural, brighter finish.",
    image: directCompositeVeneersPhoto,
  },
  {
    title: "Full-Mouth Implant Fixed Prosthesis",
    description: "A carefully planned fixed solution that helps restore comfort, function, and confidence when many teeth are missing.",
    image: fullMouthImplantPhoto,
  },
  {
    title: "Fractured Tooth Restoration with Root Canal and Emax Crown",
    description: "A complete treatment pathway to save a damaged tooth, protect its structure, and restore a strong, natural-looking smile.",
    image: fracturedToothPhoto,
  },
  {
    title: "Emax Endo Crown",
    description: "A durable, aesthetic ceramic crown designed to protect root-canal-treated teeth while blending beautifully with your smile.",
    image: emaxEndoCrownPhoto,
  },
  {
    title: "Composite Direct Veneer",
    description: "A minimally invasive way to refine tooth shape, close small gaps, and improve your smile with a personalised finish.",
    image: compositeDirectVeneerPhoto,
  },
  {
    title: "Teeth Whitening / Bleaching - Single Sitting",
    description: "Professional in-clinic whitening to refresh discoloured teeth and reveal a visibly brighter smile in one appointment.",
    image: teethWhiteningPhoto,
  },
  {
    title: "Tooth Replacement - Implant",
    description: "A secure, natural-feeling replacement for a missing tooth, planned to support everyday chewing and long-term oral health.",
    image: toothReplacementPhoto,
  },
  {
    title: "Aesthetic Dentistry",
    description: "Personalised cosmetic dental care that brings together balanced shape, colour, and function for a confident smile.",
    image: aestheticDentistryPhoto,
  },
  {
    title: "Pediatric Restorative and Preventive Dentistry",
    description: "Gentle, child-friendly care focused on preventing cavities and restoring young teeth for a healthy, confident smile.",
    image: pediatricPreventionPhoto,
    imageClass: "service-image-pediatric",
  },
  {
    title: "Wisdom Tooth Surgical Extraction",
    description: "Planned surgical removal of troublesome wisdom teeth with clear guidance and comfortable aftercare.",
    image: wisdomToothPhoto,
  },
];

export const heroPhotos = [
  { src: entrance, alt: "Mayur Dental Care clinic entrance sign" },
  { src: reception, alt: "Reception and consultation area at Mayur Dental Care" },
  { src: waitingLobby, alt: "Bright waiting lobby at Mayur Dental Care" },
  { src: doctorsSeat, alt: "Dental chair and equipment at Mayur Dental Care" },
  { src: interior, alt: "Dental equipment in a treatment room at Mayur Dental Care" },
];

export const doctors = [
  {
    isOwner: true,
    name: "Dr. Pankaj Jain",
    qualification: "B.D.S.",
    registration: "Reg. No. 14711",
    photo: pankajJainPhoto,
    accent: "doctor-accent-one",
    experience: "18 years",
    specialty: "Surgical procedures",
    achievement: "Implant dentistry",
    points: ["Dental implants", "Disimpaction procedures"],
  },
  {
    isOwner: true,
    name: "Dr. Shefali Jain",
    qualification: "B.D.S.",
    registration: "Reg. No. 22882",
    photo: shefaliJainPhoto,
    accent: "doctor-accent-two",
    experience: "17 years",
    specialty: "General dentistry",
    achievement: "Fixed orthodontics",
    points: ["General dental care", "Fixed orthodontic procedures"],
  },
  {
    name: "Dr. Heena Khan",
    qualification: "B.D.S.",
    photo: heenaKhanPhoto,
    accent: "doctor-accent-three",
    experience: "7 years",
    specialty: "General dentistry",
    achievement: "Complex root canals",
    points: ["Root canal procedures", "Handles complex cases with ease"],
  },
  {
    name: "Aamna Ansari",
    role: "Head Assistant",
    photo: null,
    accent: "doctor-accent-one",
    experience: "2 years",
    specialty: "Patient communication",
    achievement: "Children's care",
    points: ["Excellent patient communication", "Skilled at managing children", "Also provides home tuition"],
  },
  {
    name: "Fatima Ansari",
    role: "Senior Assistant",
    photo: null,
    accent: "doctor-accent-two",
    experience: "5 years",
    specialty: "Clinical assistance",
    achievement: "Complex procedures",
    points: ["Calmly assists with complex procedures"],
  },
];

export const reviews = [
  ["Madhavi Varma", "1 month ago", "Very good clinic. Dr. Pankaj Jain is a well versed, thorough and skilled. He gave proper time to hear my concerns and walked me through the procedures in simple language. It comforted me. Very satisfied with the work, interaction and experience.", "MV"],

  ["Sathakathullah Sheikh", "2 Month ago", "Best dental clinic in vikhroli, super hygiene and very courteous doctors got my multiple root canal and caps done thnxs Dr Mayur", "AK"],

  ["Neeta Jain", "3 months ago", "Got my implant done and got fixed teeth at the age of 72,didnt expected fixed teeth fixation will be so ease thanks Dr shefali and Dr pankaj for the excellent treatment must visit mayur dental care", "KI"],


  ["Prachi Sawant", "2 months ago", "For my dental treatment I come from Kalwa. Because Dr Jain is very skillful and empathetic.", "SP"],


  ["Jayshree Wadkar", "3 months ago", "I had a great experience at Mayur Dental Care.I had gone there for teeth filling and they made sure that the procedure was done smoothly and without any issues.I would definitely recommend Mayur Dental care for any dental issues.Thank you!", "VJ"],

  ["Damini Dorugade", "4 months ago", "Great staff and beautiful office! I. I love this dentist and staff. I'm so comfortable when I'm there. They are all so friendly and you feel you are a priority to them they are very efficient Highly recommend! Thank you Dr.pankaj and their staff☺️", "ND"],

  ["Sunidhi Prakhash", "3 months ago", "Had a very good experience here. The dentist was patient and explained the entire extraction and filling process clearly, which made me feel comfortable. Would recommend visiting.", "AR"],

  ["Sumita Das", "7 months ago", "II've recently done my root canal treatment done here . Absolutely painless and very comfortable experience. Doctor Pankaj Jain explained everything clearly and treatment was done with good care . Highly recommended Mayur Dental Care.", "PN"],
];
