"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Packages", href: "#packages" },
  { label: "Availability", href: "#availability" },
  { label: "Love Stories", href: "#love-stories" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waLink =
    "https://wa.me/919988756789?text=Hi%20LensLove!%20I'm%20interested%20in%20wedding%20photography%20for%20my%20upcoming%20wedding.";

  return (
    <>
      {/* Rose strip */}
      <div className="w-full bg-rose-600 text-white text-center py-2 text-sm font-semibold tracking-wide z-50 relative">
        2025 Dates Filling Fast —{" "}
        <a href="#availability" className="underline font-bold hover:text-yellow-200 transition-colors">
          Check Availability Now
        </a>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled ? "bg-[#1a0a00]/95 backdrop-blur-md shadow-lg" : "bg-[#1a0a00]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-2xl font-black text-white group-hover:text-[#d4a017] transition-colors">
                LensLove 📷
              </span>
              <span className="hidden sm:block text-[#d4a017] font-semibold text-sm">
                Photography
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-[#d4a017] transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                <span>💬</span> WhatsApp
              </a>
              <a
                href="#availability"
                className="bg-[#d4a017] hover:bg-yellow-500 text-[#1a0a00] text-sm font-bold px-4 py-2 rounded-full transition-colors"
              >
                Check Availability
              </a>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-[#1a0a00] border-t border-[#d4a017]/20"
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300 hover:text-[#d4a017] py-2 text-base font-medium transition-colors border-b border-white/10"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-3 rounded-full"
                >
                  💬 WhatsApp Us
                </a>
                <a
                  href="#availability"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center bg-[#d4a017] text-[#1a0a00] font-bold py-3 rounded-full"
                >
                  Check Availability
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
