import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import AboutDoctor from "./components/AboutDoctor";
import Treatments from "./components/Treatments";
import ImplantsFeature from "./components/ImplantsFeature";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Preloader timeout representing dental asset packaging
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Global handler to smooth-scroll and highlight the booking form input
  const handleOpenBooking = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      // Wait for scroll completion, then focus name input
      setTimeout(() => {
        const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
        if (nameInput) {
          nameInput.focus();
          // Highlight it briefly
          nameInput.classList.add("ring-2", "ring-brand-blue");
          setTimeout(() => {
            nameInput.classList.remove("ring-2", "ring-brand-blue");
          }, 1500);
        }
      }, 800);
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white animate-fade-in">
        {/* Glow pulsing ring containing dental logo */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full border-4 border-brand-blue/30 border-t-brand-blue animate-spin" />
          <div className="absolute bg-brand-blue p-3.5 rounded-full shadow-lg shadow-brand-blue/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-6 h-6 text-white"
            >
              <path d="M12 2C10 2 8.3 3.5 8 5.5c-.2 1.3-.7 2-1.3 2.5C5.3 9 4.5 10.5 4.5 12.5c0 4.5 3 6.5 4.5 8.5.5.7 1.2.7 1.5.1.5-1 1-2.2 1.5-3.1.5.9 1 2.1 1.5 3.1.3.6 1 .6 1.5-.1 1.5-2 4.5-4 4.5-8.5 0-2-.8-3.5-2.2-4.5-.6-.5-1.1-1.2-1.3-2.5C15.7 3.5 14 2 12 2z" />
            </svg>
          </div>
        </div>
        
        <div className="text-center space-y-1.5 animate-pulse">
          <h2 className="font-display font-bold text-lg tracking-wider uppercase">
            PRABHA DENTAL HOSPITAL
          </h2>
          <p className="text-xs text-brand-blue font-semibold font-mono tracking-widest">
            PATNA, BIHAR
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800 antialiased selection:bg-brand-light selection:text-brand-blue">
      {/* Sticky Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Stats Panel Overlay */}
        <Stats />

        {/* About Surgeon Profile */}
        <AboutDoctor />

        {/* Twelve Dental Specializations & Procedures */}
        <Treatments />

        {/* Titanium Dental Implants Dedicated Feature Block */}
        <ImplantsFeature />

        {/* Bento Grid Why Choose Us */}
        <WhyChooseUs />

        {/* Premium Dental Gallery Section */}
        <Gallery />

        {/* Patient Review Testimonials Slider */}
        <Testimonials />

        {/* Ten Accordion FAQs */}
        <FAQ />

        {/* Google Map + Timing + Schedule Form */}
        <Contact />
      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Floating Call, WhatsApp & Scroll-Up */}
      <FloatingActions onOpenBooking={handleOpenBooking} />
    </div>
  );
}
