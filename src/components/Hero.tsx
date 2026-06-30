import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Award, Star, Calendar, PhoneCall } from "lucide-react";
import { CLINIC_INFO } from "../data";
import heroImgUrl from "../assets/images/hero_clinic_1782793096049.jpg";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden bg-slate-900 text-white"
    >
      {/* Background image with parallax-like scaling */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImgUrl}
          alt="Luxury Dental Hospital"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/50" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero text block */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-brand-blue/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-brand-blue/30"
          >
            <Award className="w-4 h-4 text-brand-blue" />
            <span className="text-xs md:text-sm font-semibold tracking-wide text-brand-light uppercase font-mono">
              Patna's Premier Dental Surgery Center
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]"
          >
            Advanced Dental Care & <span className="text-brand-blue">Oral Surgery</span> in Patna
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Providing world-class dental treatment with modern technology, experienced specialists, and painless procedures under the expert care of Dr. Amit Kumar (BDS, MDS).
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
          >
            <button
              onClick={onOpenBooking}
              className="flex items-center justify-center space-x-2.5 bg-brand-blue hover:bg-brand-dark text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </button>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center justify-center space-x-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all backdrop-blur-md transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-5 h-5 text-brand-blue" />
              <span>Call Now: {CLINIC_INFO.phone}</span>
            </a>
          </motion.div>

          {/* Quick Credibility Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 w-full"
          >
            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 bg-brand-blue/10 rounded-lg text-brand-blue">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-100 uppercase tracking-wider font-mono">100% Sterile</p>
                <p className="text-[11px] text-gray-400">Class-B Autoclave Care</p>
              </div>
            </div>

            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 bg-brand-blue/10 rounded-lg text-brand-blue">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-100 uppercase tracking-wider font-mono">Top Rated</p>
                <p className="text-[11px] text-gray-400">5★ Patna Dentist Reviews</p>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 col-span-2 sm:col-span-1">
              <div className="p-1.5 bg-brand-blue/10 rounded-lg text-brand-blue">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-100 uppercase tracking-wider font-mono">MDS Specialist</p>
                <p className="text-[11px] text-gray-400">Maxillofacial Surgeon</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Patient Satisfaction visual cue */}
        <div className="lg:col-span-5 hidden lg:flex justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel-dark text-white rounded-2xl p-6 shadow-2xl relative border-brand-blue/20 max-w-sm"
          >
            {/* Visual element representing a modern digital checkup screen */}
            <div className="absolute -top-3 -right-3 bg-emerald-500 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce">
              Live Patna Care
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-brand-blue text-white p-2.5 rounded-xl">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Painless Dentistry Protocol</h3>
                <p className="text-[11px] text-slate-400">Computerized Local Anesthesia</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4 italic">
              "We perform all minor and major oral surgery procedures under aseptic guidelines, ensuring patient safety and virtually zero pain."
            </p>
            <div className="flex items-center justify-between text-xs pt-3 border-t border-white/10">
              <span className="text-slate-400">Oral Surgeon:</span>
              <span className="font-bold text-brand-light">Dr. Amit Kumar, MDS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
