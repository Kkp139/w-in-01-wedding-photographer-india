"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How far in advance should we book?",
    a: "We recommend booking at least 6–8 months in advance, especially for peak wedding season (October–February). Popular dates like Navratri weekends and December get booked 10–12 months ahead. You can secure your date with just ₹5,000 advance payment.",
  },
  {
    q: "What are the payment terms?",
    a: "We require 25% of the package amount at booking to hold your date. Another 50% is due one month before the wedding, and the remaining 25% is due on the day before or on the wedding day itself. We accept UPI, bank transfer, and cash.",
  },
  {
    q: "Do you charge for travel outside Mumbai/Gujarat?",
    a: "For weddings within Mumbai and Gujarat, there are no travel charges. For destinations beyond — Rajasthan, Goa, or overseas — we charge actuals for flight/train tickets and accommodation. The Platinum package includes domestic destination travel. We'll give you a full quote upfront.",
  },
  {
    q: "How long does photo/video delivery take?",
    a: "Edited photos are delivered within 30 working days of the wedding. The cinematic highlight reel takes 45–60 days. We provide a same-day teaser (30–60 seconds) within 24 hours for Gold and Platinum packages. All files are delivered digitally via cloud + physical USB drive.",
  },
  {
    q: "Do you provide raw/unedited files?",
    a: "Raw files are not included in standard packages as our editing is a core part of the creative process. However, for Platinum clients, we can discuss raw footage delivery for an additional fee. All delivered photos are fully edited and retouched to our signature style.",
  },
  {
    q: "What is your backup plan for rain or bad weather?",
    a: "We come fully prepared! We carry weather-sealed camera equipment rated for rain. For outdoor ceremonies, we work with venue coordinators on covered backup locations. Bad lighting actually creates some of the most dramatic and beautiful wedding photos — we thrive in challenging conditions!",
  },
  {
    q: "Can you cover multi-day wedding functions?",
    a: "Absolutely! We specialize in multi-day Indian weddings. Our Platinum package covers 3 full days including mehendi, sangeet, haldi, and the wedding day. For Silver and Gold clients, additional days can be added at ₹18,000/day for a photographer and ₹12,000/day for a videographer.",
  },
  {
    q: "Can we meet you before booking?",
    a: "Yes, and we strongly encourage it! We offer free in-person or video consultations where we discuss your vision, show you full wedding albums (not just highlights), talk about your venue, and answer all questions. It's important that you feel completely comfortable with us — we'll be with you on your most important day!",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-[#faf8f5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#e11d48] font-semibold text-sm tracking-widest uppercase">
            Questions?
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1a0a00] mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know before booking your wedding photographer.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                openIdx === idx
                  ? "border-[#d4a017] shadow-md"
                  : "border-gray-200 bg-white hover:border-[#d4a017]/50"
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white"
              >
                <span className="text-[#1a0a00] font-bold text-sm sm:text-base pr-4">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIdx === idx ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#d4a017] text-2xl font-light flex-shrink-0"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 bg-amber-50/50 border-t border-[#d4a017]/20">
                      <p className="text-gray-700 text-sm leading-relaxed pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="text-center mt-12 bg-[#1a0a00] rounded-3xl p-8">
          <div className="text-4xl mb-3">🤔</div>
          <h3 className="text-white font-black text-xl mb-2">
            Still Have Questions?
          </h3>
          <p className="text-gray-400 mb-6 text-sm">
            We&apos;re happy to answer anything! WhatsApp us and we&apos;ll respond within 15 minutes.
          </p>
          <a
            href="https://wa.me/919988756789?text=Hi%20LensLove!%20I%20have%20some%20questions%20about%20your%20wedding%20photography%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full transition-colors"
          >
            💬 Ask Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
