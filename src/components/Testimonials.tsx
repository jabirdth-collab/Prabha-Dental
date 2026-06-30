import React, { useState, useEffect } from "react";
import { TESTIMONIALS } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const activeReview = TESTIMONIALS[currentIndex];

  const avatarColors = [
    "bg-blue-600 text-blue-50 border-blue-200",
    "bg-indigo-600 text-indigo-50 border-indigo-200",
    "bg-emerald-600 text-emerald-50 border-emerald-200",
    "bg-purple-600 text-purple-50 border-purple-200",
    "bg-teal-600 text-teal-50 border-teal-200"
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#fafbfc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest font-mono px-3.5 py-1 bg-brand-light rounded-full inline-block">
            Patient Satisfaction
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Loved By Thousands in Patna
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full" />
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Read genuine clinical patient reviews expressing satisfaction with Dr. Amit Kumar's pain-free surgeries and advanced treatment protocols.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main card */}
          <div className="bg-white rounded-3xl p-6 md:p-12 border border-slate-100 shadow-xl shadow-slate-100/50 relative overflow-hidden">
            {/* Quote watermark icon */}
            <Quote className="absolute right-8 top-8 w-24 h-24 text-slate-50 opacity-80 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Initials Avatar */}
              <div className="shrink-0">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center font-display font-extrabold text-xl md:text-2xl border-4 shadow-sm ${avatarColors[currentIndex % avatarColors.length]}`}>
                  {activeReview.initials}
                </div>
              </div>

              {/* Review Text */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                {/* Stars and Treatment label */}
                <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(activeReview.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase font-mono bg-brand-light text-brand-blue px-3 py-1 rounded-full">
                    {activeReview.treatment}
                  </span>
                </div>

                {/* Review message */}
                <p className="text-slate-700 text-sm md:text-base leading-relaxed italic font-medium">
                  "{activeReview.review}"
                </p>

                {/* Patient signature & verified badge */}
                <div className="flex items-center justify-center md:justify-start space-x-2 pt-2 border-t border-slate-50">
                  <div>
                    <h4 className="font-display font-extrabold text-slate-900 text-sm md:text-base">
                      {activeReview.name}
                    </h4>
                    <span className="text-xs text-slate-400 font-medium">{activeReview.date}</span>
                  </div>
                  <span className="inline-flex items-center space-x-1 bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider border border-emerald-100">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Verified Patient</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Controllers */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 bg-white rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-brand-blue shadow-sm hover:shadow-md transition-all cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === i ? "bg-brand-blue w-6" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-white rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-brand-blue shadow-sm hover:shadow-md transition-all cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
