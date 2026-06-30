import React from "react";
import {
  Cpu,
  Award,
  ShieldCheck,
  Heart,
  BadgeIndianRupee,
  Activity,
  Zap,
  Sparkles
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Cpu className="w-5 h-5 text-brand-blue" />,
      title: "Modern Equipment",
      desc: "Armed with world-class dental chairs, computerized rotary file devices, and advanced clinical gear."
    },
    {
      icon: <Award className="w-5 h-5 text-brand-blue" />,
      title: "Experienced Surgeon",
      desc: "Dr. Amit Kumar (BDS, MDS) is a certified Oral & Maxillofacial specialist with a decade of expertise."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-blue" />,
      title: "Sterilized Instruments",
      desc: "Strictly follows international Class-B autoclave and triple-vacuum biological sterilization cycles."
    },
    {
      icon: <Heart className="w-5 h-5 text-brand-blue" />,
      title: "Pain-Free Treatment",
      desc: "Painless injections, micro-surgical tissue handling, and state-of-the-art computerized anesthesia."
    },
    {
      icon: <BadgeIndianRupee className="w-5 h-5 text-brand-blue" />,
      title: "Affordable Pricing",
      desc: "Highest clinical standard of dental care accessible at highly transparent, honest, and ethical prices."
    },
    {
      icon: <Activity className="w-5 h-5 text-brand-blue" />,
      title: "Digital X-Ray",
      desc: "High-precision digital RVG sensor X-Rays with 90% reduced radiation for immediate, accurate tooth analysis."
    },
    {
      icon: <Zap className="w-5 h-5 text-brand-blue" />,
      title: "Emergency Care",
      desc: "Equipped to handle urgent toothaches, bleeding, dental trauma, and jaw fracture treatments immediately."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-blue" />,
      title: "Patient-Centered Care",
      desc: "We customize each treatment step around your schedule, personal comfort levels, and dental goals."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest font-mono px-3.5 py-1 bg-brand-light rounded-full inline-block">
            Why Choose Prabha Hospital
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Setting the Standard for Dental Excellence
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full" />
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            From emergency oral surgeries to cosmetic smile designs, we focus on absolute hygiene, modern techniques, and patient comfort.
          </p>
        </div>

        {/* Grid points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-brand-blue/20 transition-all duration-300"
            >
              <div className="bg-brand-light p-3 rounded-xl inline-block text-brand-blue mb-4">
                {pt.icon}
              </div>
              <h3 className="font-display font-bold text-slate-900 text-base mb-2">
                {pt.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
