"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const months = [
  "January 2025", "February 2025", "March 2025", "April 2025",
  "May 2025", "June 2025", "July 2025", "August 2025",
  "September 2025", "October 2025", "November 2025", "December 2025",
];

// Simulated booked dates (month index → array of booked dates)
const bookedDates: Record<number, number[]> = {
  0: [1, 5, 10, 15, 20, 25, 26, 27],
  1: [2, 8, 14, 16, 22, 28],
  4: [1, 7, 12, 18, 24, 30],
  6: [3, 9, 15, 21],
  9: [5, 10, 15, 20, 25, 26, 27, 28, 29, 30, 31],
  10: [1, 2, 7, 8, 14, 15, 21, 22, 28, 29],
  11: [6, 7, 8, 13, 14, 20, 21, 27, 28],
};

const alternativeDates: Record<number, number[]> = {
  0: [3, 7, 12],
  1: [4, 9, 18],
  4: [3, 9, 15],
  6: [5, 11, 17],
  9: [3, 4],
  10: [3, 4, 9, 10],
  11: [1, 2, 5],
};

export default function AvailabilityCalendar() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [city, setCity] = useState("");
  const [result, setResult] = useState<null | "available" | "booked">(null);
  const [loading, setLoading] = useState(false);
  const [alternatives, setAlternatives] = useState<number[]>([]);

  const handleCheck = () => {
    if (!selectedMonth || !selectedDate) return;
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const monthIdx = months.indexOf(selectedMonth);
      const date = parseInt(selectedDate);
      const isBooked = (bookedDates[monthIdx] || []).includes(date);
      setResult(isBooked ? "booked" : "available");
      setAlternatives(alternativeDates[monthIdx] || [3, 9, 15]);
      setLoading(false);
    }, 900);
  };

  const waMsg = (date?: number) => {
    const d = date || selectedDate;
    const m = selectedMonth;
    return `https://wa.me/919988756789?text=Hi%20LensLove!%20I'd%20like%20to%20pre-book%20${d}%20${m}%20for%20my%20wedding%20in%20${city || "my city"}.`;
  };

  return (
    <section id="availability" className="py-20 bg-[#faf8f5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#e11d48] font-semibold text-sm tracking-widest uppercase">
            Book Your Date
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1a0a00] mt-2 mb-4">
            Check Date Availability
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            2025 wedding season is filling up fast! Check if your date is available
            and secure it with just a WhatsApp message.
          </p>
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-700 rounded-full px-5 py-2 mt-4 text-sm font-semibold">
            ⚠️ Only a few 2025 dates remaining — Book Now!
          </div>
        </div>

        {/* Checker form */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-[#1a0a00] font-semibold text-sm mb-2">
                Select Month
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => { setSelectedMonth(e.target.value); setResult(null); }}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#d4a017] focus:ring-2 focus:ring-[#d4a017]/20"
              >
                <option value="">-- Select Month --</option>
                {months.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[#1a0a00] font-semibold text-sm mb-2">
                Select Date
              </label>
              <select
                value={selectedDate}
                onChange={(e) => { setSelectedDate(e.target.value); setResult(null); }}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#d4a017] focus:ring-2 focus:ring-[#d4a017]/20"
              >
                <option value="">-- Select Date --</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[#1a0a00] font-semibold text-sm mb-2">
                Your City
              </label>
              <input
                type="text"
                placeholder="e.g. Mumbai, Ahmedabad"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 text-sm focus:outline-none focus:border-[#d4a017] focus:ring-2 focus:ring-[#d4a017]/20"
              />
            </div>
          </div>

          <button
            onClick={handleCheck}
            disabled={!selectedMonth || !selectedDate || loading}
            className="w-full bg-[#d4a017] hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed text-[#1a0a00] font-black text-lg py-4 rounded-full transition-all duration-200 hover:scale-[1.02]"
          >
            {loading ? "Checking..." : "🗓️ Check Availability"}
          </button>

          {/* Result */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="mt-6"
              >
                {result === "available" ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">🎉</span>
                      <div>
                        <h4 className="text-green-800 font-black text-xl">
                          Date is AVAILABLE!
                        </h4>
                        <p className="text-green-700 text-sm">
                          {selectedDate} {selectedMonth} — Only 1 slot left for {city || "your city"}!
                        </p>
                      </div>
                    </div>
                    <p className="text-green-700 text-sm mb-4">
                      Act fast — pre-book with just ₹5,000 advance to secure your date.
                    </p>
                    <a
                      href={waMsg()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-full transition-colors"
                    >
                      💬 Pre-Book This Date Now!
                    </a>
                  </div>
                ) : (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">😔</span>
                      <div>
                        <h4 className="text-red-800 font-black text-xl">
                          Date is BOOKED
                        </h4>
                        <p className="text-red-700 text-sm">
                          {selectedDate} {selectedMonth} is already taken. But we have these alternatives!
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 font-semibold text-sm mb-3">
                      Available dates nearby:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {alternatives.map((alt) => (
                        <a
                          key={alt}
                          href={waMsg(alt)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white border border-[#d4a017] text-[#1a0a00] text-sm font-bold px-4 py-2 rounded-full hover:bg-[#d4a017] transition-colors"
                        >
                          {alt} {selectedMonth?.split(" ")[0]}
                        </a>
                      ))}
                    </div>
                    <a
                      href="https://wa.me/919988756789?text=Hi%20LensLove!%20My%20date%20is%20booked.%20Can%20you%20suggest%20alternatives?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#d4a017] hover:bg-yellow-400 text-[#1a0a00] font-bold px-6 py-3 rounded-full transition-colors"
                    >
                      💬 Ask for More Options
                    </a>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick info */}
        <div className="grid grid-cols-3 gap-4 mt-8 text-center">
          {[
            { icon: "💳", label: "₹5,000 Advance", sub: "To book your date" },
            { icon: "📅", label: "6 Months Notice", sub: "Recommended advance booking" },
            { icon: "🤝", label: "Free Consultation", sub: "Meet before you book" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="text-[#1a0a00] font-bold text-sm">{item.label}</div>
              <div className="text-gray-500 text-xs">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
