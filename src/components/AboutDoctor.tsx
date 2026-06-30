import React from "react";
import { Award, GraduationCap, CheckCircle2, ShieldAlert } from "lucide-react";
import { CLINIC_INFO } from "../data";
import doctorImgUrl from "../assets/images/dr_amit_kumar_1782793111981.jpg";

export default function AboutDoctor() {
  const expertise = [
    "Advanced Dental Implants (Single, Multiple & Full Mouth)",
    "Painless Wisdom Tooth Extractions & Impactions",
    "Maxillofacial Fracture Fixation & Trauma Care",
    "Corrective Jaw Surgery & Facial Aesthetics",
    "Computerized Painless Root Canal Treatments",
    "Smile Designing (Ceramic Veneers & Digital Smile Design)"
  ];

  const milestones = [
    {
      icon: <GraduationCap className="w-5 h-5 text-brand-blue" />,
      title: "Super-Specialty Education",
      desc: "Completed BDS followed by MDS (Master of Dental Surgery) in Oral & Maxillofacial Surgery, specializing in clinical dental surgeries."
    },
    {
      icon: <Award className="w-5 h-5 text-brand-blue" />,
      title: "10+ Years Surgical Practice",
      desc: "Successfully executed over 1,500+ premium implants and thousands of safe maxillofacial surgeries in Patna."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-brand-blue" />,
      title: "Leading Dental Hospital director",
      desc: "Known for deploying modern digital X-Rays, 100% triple autoclave sterilizations, and computerized painless therapies."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#fafbfc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Layout wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Doctor Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-light rounded-3xl -z-10 hidden sm:block" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-100 rounded-3xl -z-10 hidden sm:block border-b-4 border-r-4 border-brand-blue/20" />
            
            {/* Image frame */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src={doctorImgUrl}
                alt="Dr. Amit Kumar - Oral & Maxillofacial Surgeon"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[3/4] hover:scale-102 transition-transform duration-500"
              />
            </div>

            {/* Quick Stats Overlay badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-100 shadow-lg flex items-center space-x-3.5">
              <div className="bg-brand-blue text-white p-2.5 rounded-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider font-bold text-brand-blue font-mono">Specialist Surgeon</p>
                <p className="font-semibold text-slate-900 text-sm">{CLINIC_INFO.qualifications}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Professional Bio */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-wider font-mono px-3 py-1 bg-brand-light rounded-full inline-block">
                Meet the Senior Surgeon
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                Dr. Amit Kumar
              </h2>
              <p className="text-md font-semibold text-brand-blue font-mono">
                BDS, MDS (Oral & Maxillofacial Surgery)
              </p>
            </div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Dr. Amit Kumar is a highly respected, board-certified Oral & Maxillofacial Surgeon and Senior Dental Implantologist with over a decade of clinical experience. He specializes in placing advanced titanium dental implants and performing complex facial, jaw, and oral reconstructive procedures with maximum safety and a patient-centered, pain-free approach.
            </p>

            {/* Structured Milestones */}
            <div className="grid grid-cols-1 gap-4 pt-2">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-2 bg-brand-light rounded-lg shrink-0 mt-0.5">
                    {milestone.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">{milestone.title}</h4>
                    <p className="text-xs md:text-sm text-slate-500 mt-0.5 leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Surgical Strengths */}
            <div className="space-y-3 pt-2">
              <h4 className="font-display font-bold text-slate-900 text-base">
                Core Specialization & Expertise:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {expertise.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-slate-700">
                    <span className="w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0" />
                    <span className="text-xs md:text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification / Affiliation Note */}
            <div className="bg-[#0f172a] text-slate-300 p-4 rounded-xl border border-slate-800 flex items-center space-x-3.5 mt-2">
              <div className="p-2.5 bg-amber-500/10 rounded-lg text-amber-400 shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <p className="text-xs leading-relaxed">
                <strong className="text-white block font-semibold">Did you know?</strong>
                An Oral & Maxillofacial Surgeon undergoes 3 years of rigorous hospital residency after dental school to handle surgeries of the jaw, joints, and face, ensuring maximum expertise and comfort.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
