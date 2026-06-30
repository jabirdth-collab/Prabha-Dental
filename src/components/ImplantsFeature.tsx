import React from "react";
import { Check, Star, BadgeCheck, ShieldAlert, Sparkles } from "lucide-react";
import { CLINIC_INFO } from "../data";

export default function ImplantsFeature() {
  const implantFeatures = [
    {
      title: "Lifetime Structural Warranty",
      desc: "Our premium dental implants (including Straumann & Nobel Biocare) come with a global lifetime warranty on materials."
    },
    {
      title: "Bio-Compatible Titanium",
      desc: "We use only pure Grade 5 medical titanium posts, ensuring seamless osseointegration and complete jaw safety."
    },
    {
      title: "3D Digital Guided Placement",
      desc: "Meticulous mapping of the maxillary sinuses and inferior alveolar nerve pathways to prevent complications."
    },
    {
      title: "Immediate Load Implants Available",
      desc: "Get temporary crowns placed within 48 hours for selected cases, restoring aesthetics immediately."
    }
  ];

  const premiumBrands = ["Straumann (Switzerland)", "Nobel Biocare (Sweden)", "Osstem (South Korea)", "Dentium (USA)"];

  return (
    <section id="implants-feature" className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background abstract accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Core explanation */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center space-x-1.5 bg-brand-blue/20 text-brand-light px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider font-mono border border-brand-blue/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premium Implantology Center</span>
            </span>

            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Restore Your Natural Smile With Permanent <span className="text-brand-blue">Dental Implants</span>
            </h2>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Prabha Dental Hospital is Patna's trusted center for major implant rehabilitations. Under Dr. Amit Kumar (MDS), a certified maxillofacial surgeon, we offer surgical precision, advanced 3D planning, and a virtually painless implant placement experience.
            </p>

            {/* Custom materials list */}
            <div className="pt-4 space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 font-mono">
                Only Premium FDA-Approved Global Implant Brands:
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {premiumBrands.map((brand) => (
                  <span
                    key={brand}
                    className="bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-200 shadow-sm"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {implantFeatures.map((item, index) => (
                <div key={index} className="flex items-start space-x-2.5 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <div className="bg-brand-blue/20 p-1.5 rounded-lg text-brand-blue mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs md:text-sm">{item.title}</h5>
                    <p className="text-[11px] md:text-xs text-slate-400 mt-1 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Call-out pricing & quick booking */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-brand-blue text-white text-[10px] uppercase font-bold tracking-widest px-3.5 py-1 rounded-full shadow-lg">
                Patna's Gold Standard
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Free Consultation</h3>
                  <p className="text-xs text-slate-400 mt-1">Book an appointment for a free dental implant evaluation and customized digital treatment map.</p>
                </div>

                {/* Patient rating indicator */}
                <div className="flex items-center space-x-2 bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                  <div className="flex text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <span className="text-xs text-slate-300 font-semibold font-mono">1,500+ Implants</span>
                </div>

                {/* Implant process summary steps */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">How we do it:</span>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="w-5 h-5 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-[10px] font-mono">1</span>
                      <span className="text-slate-300">Digital X-Ray and full oral bone mapping</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-5 h-5 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-[10px] font-mono">2</span>
                      <span className="text-slate-300">Painless guided implant post surgical placement</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-5 h-5 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-[10px] font-mono">3</span>
                      <span className="text-slate-300">Permanent premium zirconia crown bonding</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector("#contact");
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block bg-brand-blue hover:bg-brand-dark text-white text-center py-3.5 rounded-xl font-bold text-xs transition-all shadow-md shadow-brand-blue/20"
                  >
                    Claim Free Evaluation
                  </a>
                  <p className="text-[10px] text-slate-500 text-center mt-2.5">
                    *T&C Apply. Digital diagnostic scans are analyzed by our lead maxillofacial surgeon.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
