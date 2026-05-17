"use client";

import { motion } from "framer-motion";

const words = ["Your", "Love", "Story,", "Told", "Beautifully"];

const months2025 = [
  { month: "Jan", status: "booked" },
  { month: "Feb", status: "booked" },
  { month: "Mar", status: "available" },
  { month: "Apr", status: "available" },
  { month: "May", status: "booked" },
  { month: "Jun", status: "available" },
  { month: "Nov", status: "2 left" },
  { month: "Dec", status: "1 left" },
];

const waLink =
  "https://wa.me/919988756789?text=Hi%20LensLove!%20I'm%20interested%20in%20wedding%20photography%20for%20my%20upcoming%20wedding.";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#1a0a00] flex items-center overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a00] via-[#2d1200] to-[#1a0a00] opacity-95" />

      {/* Decorative gold circles */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#d4a017]/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#e11d48]/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline + CTAs */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#d4a017]/10 border border-[#d4a017]/30 rounded-full px-4 py-2 mb-8"
            >
              <span className="text-[#d4a017] text-sm font-semibold">
                📷 Mumbai &amp; Gujarat&apos;s #1 Wedding Photographer
              </span>
            </motion.div>

            {/* Animated headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className={`inline-block mr-3 ${
                    word === "Beautifully" ? "text-[#d4a017]" : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Candid &amp; Traditional Wedding Photography across Mumbai, Gujarat &amp;
              destination weddings. Every moment, every emotion — beautifully
              captured forever.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 bg-[#d4a017] hover:bg-yellow-400 text-[#1a0a00] font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
              >
                📸 View Portfolio
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
              >
                💬 WhatsApp for Availability
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex gap-8 mt-12"
            >
              {[
                { value: "180+", label: "Couples Captured" },
                { value: "4.9★", label: "Average Rating" },
                { value: "8+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-[#d4a017]">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating availability card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex justify-center lg:justify-end"
          >
            <div className="bg-white/5 backdrop-blur-md border border-[#d4a017]/30 rounded-3xl p-8 w-full max-w-sm shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold text-lg">2025 Availability</h3>
                <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  Filling Fast!
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-6">
                {months2025.map((m) => (
                  <div
                    key={m.month}
                    className={`rounded-xl p-2 text-center text-xs font-semibold ${
                      m.status === "booked"
                        ? "bg-red-900/50 text-red-300 line-through"
                        : m.status === "available"
                        ? "bg-green-900/50 text-green-300"
                        : "bg-yellow-900/50 text-yellow-300"
                    }`}
                  >
                    <div className="font-bold">{m.month}</div>
                    <div className="text-[10px] mt-0.5 capitalize">{m.status}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#d4a017] flex items-center justify-center text-lg">
                    👨‍💼
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Arjun Kapoor</div>
                    <div className="text-[#d4a017] text-xs">Lead Photographer</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} className="text-sm">{s}</span>
                  ))}
                  <span className="text-gray-300 text-xs ml-2">4.9/5 · 180 Couples</span>
                </div>
                <a
                  href="#availability"
                  className="block w-full text-center bg-[#d4a017] hover:bg-yellow-400 text-[#1a0a00] font-bold py-3 rounded-full transition-colors text-sm"
                >
                  Check My Date →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#faf8f5"
          />
        </svg>
      </div>
    </section>
  );
}
