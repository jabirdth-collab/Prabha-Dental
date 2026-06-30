import React, { useState, useEffect } from "react";
import { Phone, Clock, MapPin, Menu, X, ChevronRight } from "lucide-react";
import { CLINIC_INFO } from "../data";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check if open now based on real-time timing guidelines
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    // Simple real-time timing estimate
    const now = new Date();
    const hours = now.getHours();
    const isMorning = hours >= 9 && hours < 14;
    const isEvening = hours >= 16 && hours < 21;
    setIsOpenNow(isMorning || isEvening);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Doctor", href: "#about" },
    { name: "Treatments", href: "#treatments" },
    { name: "Dental Implants", href: "#implants-feature" },
    { name: "Smile Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 90; // sticky header offset
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar with contact info */}
      <div className="bg-[#0f172a] text-gray-300 text-xs py-2 px-4 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 hover:text-brand-blue transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              <a href={`tel:${CLINIC_INFO.phone}`}>{CLINIC_INFO.phoneDisplay}</a>
            </span>
            <span className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-blue" />
              <span>Opposite NIFT College, Patna</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-blue" />
              <span className="truncate">Mon-Sat: 9AM-2PM, 4PM-9PM | Sun: 9AM-2PM, 4PM-8PM</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <span className={`inline-block w-2 h-2 rounded-full ${isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`}></span>
              <span className="font-medium text-gray-200 text-[11px]">
                {isOpenNow ? "Clinic Open Now" : "Clinic Closed (Opens at 9AM/4PM)"}
              </span>
            </span>
            <a
              href={CLINIC_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        id="navbar"
        className={`transition-all duration-300 px-4 md:px-8 py-3 ${
          isScrolled
            ? "glass-panel shadow-md shadow-slate-100/30 py-2.5"
            : "bg-white/95 md:bg-transparent md:backdrop-blur-none"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center space-x-2"
          >
            <div className="bg-brand-blue text-white p-2 rounded-xl shadow-md shadow-brand-blue/20">
              {/* Modern Tooth Emblem */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M12 2C10 2 8.3 3.5 8 5.5c-.2 1.3-.7 2-1.3 2.5C5.3 9 4.5 10.5 4.5 12.5c0 4.5 3 6.5 4.5 8.5.5.7 1.2.7 1.5.1.5-1 1-2.2 1.5-3.1.5.9 1 2.1 1.5 3.1.3.6 1 .6 1.5-.1 1.5-2 4.5-4 4.5-8.5 0-2-.8-3.5-2.2-4.5-.6-.5-1.1-1.2-1.3-2.5C15.7 3.5 14 2 12 2z" />
              </svg>
            </div>
            <div>
              <span className={`font-display font-bold text-lg md:text-xl tracking-tight block leading-tight transition-colors duration-300 ${
                isScrolled ? "text-[#111827]" : "text-[#111827] md:text-white"
              }`}>
                PRABHA
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-blue block -mt-1 font-mono">
                DENTAL HOSPITAL
              </span>
            </div>
          </a>

          {/* Desktop Navigation links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[14px] font-medium text-slate-700 hover:text-brand-blue transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="group flex items-center space-x-1.5 px-4 py-2.5 bg-white border border-[#0B6EFD] rounded-xl font-medium text-[#0B6EFD] hover:bg-[#0B6EFD] hover:text-white transition-all duration-300 text-sm shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#0B6EFD] group-hover:text-white transition-colors duration-300" />
              <span>Call Now</span>
            </a>
            <button
              id="header-book-btn"
              onClick={onOpenBooking}
              className="bg-[#0B6EFD] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#0353c9] hover:shadow-[#0B6EFD]/40 hover:-translate-y-0.5 transition-all duration-300 text-sm shadow-lg shadow-[#0B6EFD]/25 cursor-pointer"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-800 focus:outline-none p-1.5 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 top-[60px] md:top-[98px] bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute left-0 right-0 bg-white shadow-2xl transition-all duration-300 ease-out py-6 px-6 border-b border-slate-100 flex flex-col space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto ${
            isOpen ? "translate-y-0" : "-translate-y-6"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col space-y-3">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">
              Quick Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between text-base font-semibold text-slate-800 hover:text-brand-blue py-2 border-b border-slate-50 hover:border-brand-light transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row space-y-2.5 sm:space-y-0 sm:space-x-3">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="group flex items-center justify-center space-x-2 w-full py-3 bg-white border border-[#0B6EFD] rounded-xl font-semibold text-[#0B6EFD] hover:bg-[#0B6EFD] hover:text-white transition-all duration-300 text-center shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#0B6EFD] group-hover:text-white transition-colors duration-300" />
              <span>Call +91 99736 90989</span>
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#0B6EFD] text-white rounded-xl font-semibold text-center shadow-lg shadow-[#0B6EFD]/25 hover:bg-[#0353c9] hover:shadow-[#0B6EFD]/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Book Appointment
            </button>
          </div>

          <div className="pt-2 text-center text-xs text-slate-500">
            <p className="font-medium">Opposite NIFT College, Mithapur, Patna</p>
            <p className="mt-1">Mon-Sun Timing: 9 AM - 2 PM, 4 PM - 9 PM</p>
          </div>
        </div>
      </div>
    </header>
  );
}
