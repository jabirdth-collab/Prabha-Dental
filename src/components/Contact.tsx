import React, { useState, useEffect } from "react";
import { CLINIC_INFO, TREATMENTS } from "../data";
import { AppointmentFormData } from "../types";
import { MapPin, Phone, Clock, Calendar, CheckCircle2, Landmark, ShieldCheck, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: "",
    phone: "",
    treatment: "Dental Implants",
    preferredDate: "",
    preferredSession: "Morning (9:00 AM - 2:00 PM)",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    // Generate tomorrow's date as min date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.preferredDate) {
      alert("Please fill in your Name, Phone Number, and Preferred Date.");
      return;
    }

    // Generate custom reference code
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const code = `PDH-${randomNum}`;
    setRefId(code);
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      phone: "",
      treatment: "Dental Implants",
      preferredDate: "",
      preferredSession: "Morning (9:00 AM - 2:00 PM)",
      message: ""
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest font-mono px-3.5 py-1 bg-brand-light rounded-full inline-block">
            Inquire & Schedule
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Book Appointment & Location
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full" />
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Fill out our instant appointment scheduler to reserve a slot. Or feel free to drop by opposite NIFT College Patna.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Block: Appointment Form (6 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col justify-center">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-xl">Schedule Your Consultation</h3>
                  <p className="text-xs text-slate-500 mt-1">Please enter your dental concern and preferred date. We will call you to confirm.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 font-mono uppercase tracking-wider block">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Amitesh Singh"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-brand-blue rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-colors"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 font-mono uppercase tracking-wider block">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="10-digit mobile (e.g. 9973690989)"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-brand-blue rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Treatment selection dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 font-mono uppercase tracking-wider block">Desired Treatment</label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-brand-blue rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-colors cursor-pointer"
                    >
                      {TREATMENTS.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date selection field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 font-mono uppercase tracking-wider block">Preferred Date *</label>
                    <input
                      type="date"
                      name="preferredDate"
                      required
                      min={minDate}
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-brand-blue rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-colors cursor-pointer"
                    />
                  </div>
                </div>

                {/* Session Choice */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 font-mono uppercase tracking-wider block">Preferred Timing Session</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className={`border rounded-xl p-3 flex items-center justify-between cursor-pointer text-xs md:text-sm ${formData.preferredSession.includes("Morning") ? "border-brand-blue bg-brand-light/30" : "border-slate-200 bg-slate-50/50"}`}>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="preferredSession"
                          value="Morning (9:00 AM - 2:00 PM)"
                          checked={formData.preferredSession.includes("Morning")}
                          onChange={handleInputChange}
                          className="text-brand-blue focus:ring-brand-blue"
                        />
                        <span>Morning Session</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400">9AM - 2PM</span>
                    </label>

                    <label className={`border rounded-xl p-3 flex items-center justify-between cursor-pointer text-xs md:text-sm ${formData.preferredSession.includes("Evening") ? "border-brand-blue bg-brand-light/30" : "border-slate-200 bg-slate-50/50"}`}>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="preferredSession"
                          value="Evening (4:00 PM - 9:00 PM)"
                          checked={formData.preferredSession.includes("Evening")}
                          onChange={handleInputChange}
                          className="text-brand-blue focus:ring-brand-blue"
                        />
                        <span>Evening Session</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400">4PM - 9PM</span>
                    </label>
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 font-mono uppercase tracking-wider block">Describe Your Concern (Optional)</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="e.g. Need single dental implant or chronic wisdom tooth infection, since 3 days"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-brand-blue rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Action Submit */}
                <button
                  type="submit"
                  className="w-full bg-brand-blue hover:bg-brand-dark text-white py-4 rounded-xl font-bold text-sm tracking-wide shadow-md shadow-brand-blue/20 hover:shadow-brand-blue/40 transform hover:-translate-y-0.5 transition-all cursor-pointer text-center"
                >
                  Confirm Appointment Booking
                </button>
              </form>
            ) : (
              // Successful submission screen
              <div className="text-center py-6 space-y-6 animate-in fade-in zoom-in-95 duration-200">
                <div className="inline-flex p-4 bg-emerald-50 rounded-full text-emerald-600 border border-emerald-100">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-slate-900">Appointment Request Sent!</h3>
                  <p className="text-sm text-slate-500 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. Your dental appointment request has been securely registered in Prabha Hospital's booking ledger.
                  </p>
                </div>

                {/* Booking receipt details card */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-left max-w-md mx-auto space-y-3.5">
                  <div className="flex justify-between items-center text-xs pb-2.5 border-b border-slate-200/60">
                    <span className="font-bold text-slate-400 uppercase tracking-widest font-mono">Reference Code:</span>
                    <span className="font-mono font-bold text-brand-blue">{refId}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-600">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block font-mono">Date selected</span>
                      <strong className="text-slate-800 text-xs">{formData.preferredDate}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block font-mono">Preferred Session</span>
                      <strong className="text-slate-800 text-xs block truncate">{formData.preferredSession.split(" ")[0]}</strong>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block font-mono">Clinical treatment</span>
                      <strong className="text-slate-800 text-xs">{formData.treatment}</strong>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-500 max-w-sm mx-auto">
                  <p className="leading-relaxed">
                    Our lead clinic receptionist will call your registered number <span className="font-bold text-slate-800 font-mono">+91 {formData.phone}</span> within 2 hours to finalize the exact appointment slot.
                  </p>
                  <p className="text-[11px] text-amber-600 font-medium bg-amber-50 p-2.5 rounded-lg border border-amber-100">
                    💡 Please bring any previous dental reports, X-Rays, or medical history papers during your check-up.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleResetForm}
                    className="text-xs font-bold text-brand-blue hover:text-brand-dark hover:underline cursor-pointer"
                  >
                    ← Schedule another appointment
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Right Block: Map and Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Timings and address credentials card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 space-y-6 shadow-xl relative border border-slate-800 flex-1">
              <div>
                <span className="text-[10px] font-bold text-brand-blue font-mono uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full">
                  Prabha Dental Hospital
                </span>
                <h3 className="font-display font-bold text-2xl mt-3 text-white">Clinic Location & Hours</h3>
              </div>

              {/* Location item */}
              <div className="flex items-start space-x-3.5">
                <div className="bg-slate-800 p-2.5 rounded-xl text-brand-blue shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  <strong className="text-white block font-semibold mb-1">Our Address:</strong>
                  {CLINIC_INFO.addressLines.map((line, idx) => (
                    <span key={idx} className="block">{line}</span>
                  ))}
                  <span className="text-brand-light font-medium text-[11px] font-mono mt-1 block">Opposite NIFT College, Mithapur area</span>
                </div>
              </div>

              {/* Timing item */}
              <div className="flex items-start space-x-3.5 border-t border-slate-800/80 pt-5">
                <div className="bg-slate-800 p-2.5 rounded-xl text-brand-blue shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  <strong className="text-white block font-semibold mb-1">Working Timing:</strong>
                  <p className="font-medium text-slate-200">{CLINIC_INFO.timings.weekdays}</p>
                  <p className="font-medium text-slate-200 mt-1">{CLINIC_INFO.timings.sunday}</p>
                </div>
              </div>

              {/* Call item */}
              <div className="flex items-start space-x-3.5 border-t border-slate-800/80 pt-5">
                <div className="bg-slate-800 p-2.5 rounded-xl text-brand-blue shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  <strong className="text-white block font-semibold mb-1">Direct Calling Helpdesk:</strong>
                  <a href={`tel:${CLINIC_INFO.phone}`} className="text-lg font-bold text-brand-light hover:underline font-mono">
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Assistance available in English, Hindi & Bhojpuri.</p>
                </div>
              </div>
            </div>

            {/* Map Frame (flex height) */}
            <div className="rounded-3xl overflow-hidden border-2 border-slate-200 bg-white shadow-lg h-60 md:h-72">
              <iframe
                title="Google Map location of Prabha Dental Hospital Patna"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.4237198758836!2d85.1378338!3d25.5908333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a2491a99999b%3A0xe54ef5a5b5df30c!2sNational%20Institute%20of%20Fashion%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1782793000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
