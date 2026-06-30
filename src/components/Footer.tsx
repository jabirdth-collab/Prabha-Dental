import React from "react";
import { CLINIC_INFO, TREATMENTS, FAQS } from "../data";
import { Phone, MapPin, Clock, Heart, Award, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Structured SEO JSON-LD Schema Markups for Google Crawler
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Prabha Dental Hospital",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400",
    "@id": "https://prabhadentalhospitalpatna.com",
    "url": "https://prabhadentalhospitalpatna.com",
    "telephone": "+919973690989",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "New Bangali Tola, Near Devi Asthan, Opposite NIFT College",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "postalCode": "800001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.5908333,
      "longitude": 85.1378338
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "16:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "16:00",
        "closes": "20:00"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Dr. Amit Kumar",
      "jobTitle": "Oral & Maxillofacial Surgeon",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "MDS Super-Specialty Surgery School"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.slice(0, 5).map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://prabhadentalhospitalpatna.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Treatments",
        "item": "https://prabhadentalhospitalpatna.com#treatments"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Dental Implants",
        "item": "https://prabhadentalhospitalpatna.com#implants-feature"
      }
    ]
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 overflow-hidden relative">
      {/* Dynamic SEO JSON-LD Script elements parsed by Google Search Engine */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex items-center space-x-2">
              <div className="bg-brand-blue text-white p-2.5 rounded-xl shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-5 h-5"
                >
                  <path d="M12 2C10 2 8.3 3.5 8 5.5c-.2 1.3-.7 2-1.3 2.5C5.3 9 4.5 10.5 4.5 12.5c0 4.5 3 6.5 4.5 8.5.5.7 1.2.7 1.5.1.5-1 1-2.2 1.5-3.1.5.9 1 2.1 1.5 3.1.3.6 1 .6 1.5-.1 1.5-2 4.5-4 4.5-8.5 0-2-.8-3.5-2.2-4.5-.6-.5-1.1-1.2-1.3-2.5C15.7 3.5 14 2 12 2z" />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white tracking-tight block">
                  PRABHA
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-blue block -mt-1 font-mono">
                  DENTAL HOSPITAL
                </span>
              </div>
            </a>

            <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-sm">
              Providing premium world-class dental care, implant rehabilitations, and major maxillofacial surgeries in Patna, Bihar. Managed by expert surgeon Dr. Amit Kumar (BDS, MDS).
            </p>

            {/* Timings summary */}
            <div className="space-y-1 bg-slate-900/60 p-4 rounded-2xl border border-slate-900 max-w-sm">
              <h4 className="text-slate-200 text-xs font-bold uppercase tracking-wider font-mono">Emergency Contact Desk:</h4>
              <p className="text-lg font-bold text-brand-blue font-mono">{CLINIC_INFO.phoneDisplay}</p>
              <p className="text-[10px] text-slate-500">Call-to-confirm is operational during normal hospital schedules.</p>
            </div>
          </div>

          {/* Col 2: Navigation Links (2.5 cols) */}
          <div className="lg:col-span-2.5 space-y-4 md:pl-4">
            <h4 className="text-white font-display font-bold text-sm tracking-wide uppercase font-mono">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="hover:text-brand-blue transition-colors">
                  Home Banner
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-brand-blue transition-colors">
                  About Dr. Amit Kumar
                </a>
              </li>
              <li>
                <a href="#treatments" onClick={(e) => handleLinkClick(e, "#treatments")} className="hover:text-brand-blue transition-colors">
                  Treatments & Services
                </a>
              </li>
              <li>
                <a href="#implants-feature" onClick={(e) => handleLinkClick(e, "#implants-feature")} className="hover:text-brand-blue transition-colors">
                  Dental Implant Specialties
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleLinkClick(e, "#gallery")} className="hover:text-brand-blue transition-colors">
                  Premium Dental Gallery
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleLinkClick(e, "#faq")} className="hover:text-brand-blue transition-colors">
                  FAQ Helpdesk
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialties (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-display font-bold text-sm tracking-wide uppercase font-mono">Key Procedures</h4>
            <ul className="space-y-2.5 text-xs">
              {TREATMENTS.slice(0, 6).map((t) => (
                <li key={t.id}>
                  <a
                    href="#treatments"
                    onClick={(e) => handleLinkClick(e, "#treatments")}
                    className="hover:text-brand-blue transition-colors flex items-center space-x-1.5"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0" />
                    <span>{t.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact details (2.5 cols) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="text-white font-display font-bold text-sm tracking-wide uppercase font-mono">Hospital Contact</h4>
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>New Bangali Tola, Opp NIFT College, Mithapur, Patna - 800001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <span>+91 9973690989</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>Weekdays: 9AM-2PM & 4PM-9PM<br />Sundays: 9AM-2PM & 4PM-8PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer copyright and disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            <p>© 2026 Prabha Dental Hospital Patna. All Rights Reserved.</p>
            <p className="mt-1 text-[11px] text-slate-600">Advanced dental care & oral surgery directed by Dr. Amit Kumar BDS, MDS.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={handleScrollToTop}
              className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center space-x-1.5"
              aria-label="Scroll to top"
            >
              <span>Scroll to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
