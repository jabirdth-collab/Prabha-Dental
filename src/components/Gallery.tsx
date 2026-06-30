import React, { useState, useEffect } from "react";
import { GALLERY_ITEMS } from "../data";
import { Sparkles, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Clinic Tour",
    "Treatments",
    "Technology",
    "Implants",
    "Cosmetic",
    "Hygiene",
    "Consultation"
  ];

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) => (prev === null ? null : (prev === filteredItems.length - 1 ? 0 : prev + 1)));
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) => (prev === null ? null : (prev === 0 ? filteredItems.length - 1 : prev - 1)));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest font-mono px-3.5 py-1.5 bg-brand-light rounded-full inline-block">
            PRABHA DENTAL GALLERY
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Our Premium Dental Facility & Operations
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full" />
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Take a visual tour through our world-class clinic environments, state-of-the-art diagnostic technology, sterilizers, and premium surgical operatory suites.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-5xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              id={`cat-btn-${category.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => {
                setActiveCategory(category);
                setSelectedImageIndex(null);
              }}
              className={`px-4 md:px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                activeCategory === category
                  ? "bg-brand-blue text-white shadow-md shadow-brand-blue/25 border-brand-blue scale-[1.02]"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-950 border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setSelectedImageIndex(index)}
              className="group bg-white rounded-[18px] overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer flex flex-col h-full"
            >
              {/* Image Container with Zoom and Overlay */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-100 group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                />
                
                {/* Clean Hover Gradient & Interactive Zoom Icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm p-3.5 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-500 ease-out">
                    <ZoomIn className="w-5 h-5 text-brand-blue" />
                  </div>
                </div>

                {/* Category Badge on Image */}
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-brand-blue font-mono bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-slate-100">
                  {item.category}
                </span>
              </div>

              {/* Caption and description */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-3">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-slate-900 text-base md:text-lg group-hover:text-brand-blue transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
                
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium font-mono">
                  <span>PRABHA DENTAL</span>
                  <span className="text-brand-blue group-hover:underline transition-all">View Full Spec</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-brand-light/75 backdrop-blur-sm px-6 py-4 rounded-2xl border border-brand-blue/10 max-w-2xl mx-auto shadow-sm">
            <Sparkles className="w-5 h-5 text-brand-blue shrink-0 animate-pulse" />
            <p className="text-xs md:text-sm text-slate-700 leading-normal text-left font-medium">
              Every facility, tool, and setup complies with global ISO 9001 dental sterilization parameters. Schedule a physical walk-through or digital guidance session today.
            </p>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          id="lightbox-container"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 md:p-8 animate-fade-in transition-all duration-300"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button
            id="lightbox-close-btn"
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all cursor-pointer backdrop-blur-sm shadow-md"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Main Lightbox Content Area */}
          <div 
            className="relative flex flex-col max-w-5xl w-full h-[85vh] justify-between items-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
          >
            {/* Image & Navigation Controls in Row */}
            <div className="relative flex items-center justify-between w-full flex-grow p-2">
              {/* Left Arrow */}
              <button
                id="lightbox-prev-btn"
                onClick={() => setSelectedImageIndex((prev) => (prev === null ? null : (prev === 0 ? filteredItems.length - 1 : prev - 1)))}
                className="absolute left-2 md:-left-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all cursor-pointer backdrop-blur-sm shadow-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image Container */}
              <div className="w-full h-full flex items-center justify-center overflow-hidden px-10">
                <img
                  src={filteredItems[selectedImageIndex].img}
                  alt={filteredItems[selectedImageIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain rounded-[18px] shadow-2xl border border-white/5 transition-all duration-300"
                />
              </div>

              {/* Right Arrow */}
              <button
                id="lightbox-next-btn"
                onClick={() => setSelectedImageIndex((prev) => (prev === null ? null : (prev === filteredItems.length - 1 ? 0 : prev + 1)))}
                className="absolute right-2 md:-right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all cursor-pointer backdrop-blur-sm shadow-md"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Title & Description Panel */}
            <div className="bg-slate-900/80 backdrop-blur-md text-white p-6 rounded-2xl border border-white/5 max-w-3xl w-full text-center space-y-2 mt-4 shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue font-mono bg-brand-light/10 px-3 py-1 rounded-full">
                {filteredItems[selectedImageIndex].category}
              </span>
              <h4 className="font-display font-extrabold text-lg md:text-2xl text-white tracking-tight pt-1">
                {filteredItems[selectedImageIndex].title}
              </h4>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
                {filteredItems[selectedImageIndex].description}
              </p>
              
              {/* Pagination counter */}
              <div className="text-[10px] text-slate-500 font-mono font-bold pt-2">
                Image {selectedImageIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
