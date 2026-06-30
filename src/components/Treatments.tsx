import React, { useState } from "react";
import { TREATMENTS } from "../data";
import { Treatment } from "../types";
import {
  ShieldAlert,
  Activity,
  Scissors,
  Sparkles,
  Smile,
  Sparkle,
  Crown,
  HeartHandshake,
  Baby,
  Trash2,
  HeartPulse,
  Dna,
  X,
  CheckCircle,
  Clock,
  Stethoscope
} from "lucide-react";

export default function Treatments() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  // Helper function to resolve dynamic Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-brand-blue" />;
      case "Activity":
        return <Activity className="w-6 h-6 text-brand-blue" />;
      case "Scissors":
        return <Scissors className="w-6 h-6 text-brand-blue" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-brand-blue" />;
      case "Smile":
        return <Smile className="w-6 h-6 text-brand-blue" />;
      case "Sparkle":
        return <Sparkle className="w-6 h-6 text-brand-blue" />;
      case "Crown":
        return <Crown className="w-6 h-6 text-brand-blue" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-brand-blue" />;
      case "Baby":
        return <Baby className="w-6 h-6 text-brand-blue" />;
      case "Trash2":
        return <Trash2 className="w-6 h-6 text-brand-blue" />;
      case "HeartPulse":
        return <HeartPulse className="w-6 h-6 text-brand-blue" />;
      case "Dna":
        return <Dna className="w-6 h-6 text-brand-blue" />;
      default:
        return <Stethoscope className="w-6 h-6 text-brand-blue" />;
    }
  };

  return (
    <section id="treatments" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest font-mono px-3.5 py-1 bg-brand-light rounded-full inline-block">
            Our Specialties
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Advanced Dental Treatments & Surgeries
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full" />
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            We offer comprehensive world-class dental procedures and major oral surgeries utilizing state-of-the-art diagnostic dental equipment.
          </p>
        </div>

        {/* 12-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:bg-white transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div>
                {/* Icon Container */}
                <div className="bg-white group-hover:bg-brand-light p-3.5 rounded-xl inline-block shadow-sm group-hover:shadow-md transition-all duration-300 mb-6">
                  {getIcon(treatment.icon)}
                </div>
                {/* Title */}
                <h3 className="font-display font-bold text-lg md:text-xl text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                  {treatment.title}
                </h3>
                {/* Short Description */}
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6">
                  {treatment.shortDesc}
                </p>
              </div>

              {/* Read More Trigger */}
              <button
                onClick={() => setSelectedTreatment(treatment)}
                className="inline-flex items-center space-x-1.5 font-semibold text-xs text-brand-blue hover:text-brand-dark transition-colors border-t border-slate-200/60 pt-4 w-full text-left mt-auto cursor-pointer"
              >
                <span>Learn treatment process</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Treatment Process Modal */}
        {selectedTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Sticky Header */}
              <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex justify-between items-center z-10">
                <div className="flex items-center space-x-3">
                  <div className="bg-brand-light p-2.5 rounded-xl text-brand-blue">
                    {getIcon(selectedTreatment.icon)}
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    {selectedTreatment.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedTreatment(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5.5 h-5.5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">Overview</h4>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {selectedTreatment.fullDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Symptoms column */}
                  <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-100">
                    <h4 className="font-bold text-sm text-rose-900 mb-3 flex items-center space-x-1.5">
                      <span className="w-2 h-2 bg-rose-500 rounded-full inline-block" />
                      <span>When is it required?</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedTreatment.symptoms.map((symptom, idx) => (
                        <li key={idx} className="text-xs text-rose-800/90 leading-normal flex items-start space-x-1.5">
                          <span className="mt-1 text-[10px]">•</span>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits column */}
                  <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                    <h4 className="font-bold text-sm text-emerald-900 mb-3 flex items-center space-x-1.5">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block" />
                      <span>Key Health Benefits</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedTreatment.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs text-emerald-800/90 leading-normal flex items-start space-x-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Healing & Care info */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start space-x-3">
                  <div className="p-2 bg-white rounded-lg text-brand-blue shadow-sm shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider font-mono">Healing & Recovery expectation</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-normal">{selectedTreatment.recoveryTime}</p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-slate-100 px-6 py-4 bg-slate-50/50 rounded-b-2xl flex flex-col sm:flex-row sm:justify-between items-center gap-3">
                <span className="text-xs text-slate-400 font-medium text-center sm:text-left">
                  Need clinical consulting? Consult with Dr. Amit Kumar.
                </span>
                <button
                  onClick={() => {
                    setSelectedTreatment(null);
                    // Scroll to contact form
                    const target = document.querySelector("#contact");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-brand-blue text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-brand-dark transition-all w-full sm:w-auto text-center cursor-pointer shadow-md shadow-brand-blue/10"
                >
                  Book Appointment Now
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
