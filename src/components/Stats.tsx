import React from "react";
import { STATS } from "../data";
import { Users, Shield, Smile, CalendarDays } from "lucide-react";

export default function Stats() {
  // Map icons to the 4 stats in sequence
  const icons = [
    <Users className="w-6 h-6 text-brand-blue" />,
    <Shield className="w-6 h-6 text-brand-blue" />,
    <CalendarDays className="w-6 h-6 text-brand-blue" />,
    <Smile className="w-6 h-6 text-brand-blue" />,
  ];

  return (
    <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 md:px-8">
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/50 p-6 md:p-8 border border-slate-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center p-4 ${
                idx > 0 ? "pt-8 sm:pt-4 lg:pt-4" : ""
              }`}
            >
              <div className="bg-brand-light p-3.5 rounded-2xl mb-4 text-brand-blue flex items-center justify-center">
                {icons[idx] || <Smile className="w-6 h-6" />}
              </div>
              <span className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight block mb-1">
                {stat.value}
              </span>
              <span className="font-semibold text-sm text-slate-800 tracking-tight block">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 mt-1 block">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
