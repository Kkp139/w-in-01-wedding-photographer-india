"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const filters = ["All", "Traditional", "Candid", "Pre-Wedding", "Destination"] as const;
type Filter = typeof filters[number];

const portfolioItems = [
  {
    id: 1,
    couple: "Pooja & Rahul",
    city: "Udaipur",
    style: "Destination" as Filter,
    emoji: "🏰",
    gradient: "from-amber-900 to-rose-900",
  },
  {
    id: 2,
    couple: "Nisha & Arjun",
    city: "Mumbai",
    style: "Candid" as Filter,
    emoji: "🌊",
    gradient: "from-blue-900 to-indigo-900",
  },
  {
    id: 3,
    couple: "Priya & Dev",
    city: "Ahmedabad",
    style: "Traditional" as Filter,
    emoji: "🪔",
    gradient: "from-orange-900 to-amber-900",
  },
  {
    id: 4,
    couple: "Meera & Karan",
    city: "Jaipur",
    style: "Pre-Wedding" as Filter,
    emoji: "🌸",
    gradient: "from-pink-900 to-rose-900",
  },
  {
    id: 5,
    couple: "Ananya & Rohan",
    city: "Goa",
    style: "Destination" as Filter,
    emoji: "🌴",
    gradient: "from-teal-900 to-emerald-900",
  },
  {
    id: 6,
    couple: "Sneha & Vivek",
    city: "Surat",
    style: "Traditional" as Filter,
    emoji: "💐",
    gradient: "from-purple-900 to-violet-900",
  },
  {
    id: 7,
    couple: "Kavya & Nikhil",
    city: "Mumbai",
    style: "Candid" as Filter,
    emoji: "🎊",
    gradient: "from-red-900 to-pink-900",
  },
  {
    id: 8,
    couple: "Isha & Aditya",
    city: "Vadodara",
    style: "Pre-Wedding" as Filter,
    emoji: "🌅",
    gradient: "from-yellow-900 to-orange-900",
  },
  {
    id: 9,
    couple: "Divya & Saurabh",
    city: "Rajasthan",
    style: "Destination" as Filter,
    emoji: "🐪",
    gradient: "from-stone-800 to-amber-900",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.style === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#e11d48] font-semibold text-sm tracking-widest uppercase">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1a0a00] mt-2 mb-4">
            Portfolio Gallery
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Each frame tells a unique love story. Browse our collection of candid
            moments, traditional ceremonies, and destination weddings.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-[#d4a017] text-[#1a0a00] shadow-lg scale-105"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#d4a017] hover:text-[#d4a017]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() =>
                    setExpanded(expanded === item.id ? null : item.id)
                  }
                  className={`relative rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-br ${item.gradient} shadow-lg hover:shadow-2xl transition-shadow duration-300`}
                  style={{ minHeight: expanded === item.id ? 320 : 240 }}
                >
                  {/* Main content */}
                  <div className="p-8 h-full flex flex-col justify-between" style={{ minHeight: 240 }}>
                    <div>
                      <span className="text-5xl">{item.emoji}</span>
                      <div className="mt-4">
                        <h3 className="text-white font-bold text-xl">{item.couple}</h3>
                        <p className="text-white/70 text-sm mt-1">📍 {item.city}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {item.style}
                      </span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <div className="text-3xl mb-2">👁️</div>
                      <p className="font-bold text-lg">{item.couple}</p>
                      <p className="text-sm text-white/80">{item.style} · {item.city}</p>
                      <span className="mt-3 inline-block bg-[#d4a017] text-[#1a0a00] text-xs font-bold px-4 py-1.5 rounded-full">
                        {expanded === item.id ? "Close" : "View Story"}
                      </span>
                    </div>
                  </div>

                  {/* Expanded details */}
                  {expanded === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 text-white"
                    >
                      <p className="text-sm leading-relaxed">
                        A beautiful {item.style.toLowerCase()} wedding captured in {item.city}.
                        Every candid emotion, every traditional ritual — immortalized forever.
                      </p>
                      <a
                        href={`https://wa.me/919988756789?text=Hi! I loved your ${item.couple} wedding shoot. I'd like to discuss my wedding.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 inline-block bg-[#d4a017] text-[#1a0a00] text-xs font-bold px-4 py-2 rounded-full"
                      >
                        Book Similar Style
                      </a>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1a0a00] hover:bg-[#2d1200] text-white font-bold px-8 py-4 rounded-full transition-colors"
          >
            📸 Book Your Wedding Photography →
          </a>
        </div>
      </div>
    </section>
  );
}
