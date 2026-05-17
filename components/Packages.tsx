"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const packages = [
  {
    name: "Silver",
    price: "₹45,000",
    badge: null,
    color: "from-gray-100 to-gray-50",
    border: "border-gray-200",
    accent: "#6b7280",
    features: [
      "1 Professional Photographer",
      "8 Hours Coverage",
      "300 Edited Photos",
      "1 Premium Photo Album",
      "Digital Delivery (USB + Cloud)",
      "Online Gallery Access",
    ],
  },
  {
    name: "Gold",
    price: "₹85,000",
    badge: "★ Most Booked",
    color: "from-amber-50 to-yellow-50",
    border: "border-[#d4a017]",
    accent: "#d4a017",
    features: [
      "2 Professional Photographers",
      "1 Videographer",
      "Full Day Coverage (12 hrs)",
      "500 Edited Photos",
      "Cinematic Highlight Reel (5 min)",
      "Premium Photo Album",
      "Same-Day Teaser Edit",
      "Digital Delivery (USB + Cloud)",
    ],
  },
  {
    name: "Platinum",
    price: "₹1,50,000",
    badge: null,
    color: "from-violet-50 to-purple-50",
    border: "border-purple-300",
    accent: "#7c3aed",
    features: [
      "2 Photographers + 2 Videographers",
      "Pre-Wedding Shoot Included",
      "Destination Travel Covered",
      "3-Day Wedding Coverage",
      "Full Cinematic Wedding Film",
      "Luxury Photo Album",
      "Drone Aerial Shots",
      "Raw Footage Delivery",
      "Dedicated Wedding Coordinator",
    ],
  },
];

const addons = [
  { name: "Pre-Wedding Shoot", price: "₹15,000", icon: "🌸" },
  { name: "Drone Coverage", price: "₹8,000", icon: "🚁" },
  { name: "Same-Day Edit", price: "₹12,000", icon: "⚡" },
  { name: "Extra Photographer", price: "₹10,000", icon: "📸" },
  { name: "Cinematic Film (Full)", price: "₹20,000", icon: "🎬" },
];

const waLink = (pkg: string) =>
  `https://wa.me/919988756789?text=Hi%20LensLove!%20I'm%20interested%20in%20the%20${pkg}%20package%20for%20my%20wedding.`;

export default function Packages() {
  const [hoveredPkg, setHoveredPkg] = useState<string | null>(null);

  return (
    <section id="packages" className="py-20 bg-[#1a0a00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#d4a017] font-semibold text-sm tracking-widest uppercase">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4">
            Photography Packages
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Transparent pricing, no hidden charges. Choose the package that
            perfectly captures your love story.
          </p>
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              onMouseEnter={() => setHoveredPkg(pkg.name)}
              onMouseLeave={() => setHoveredPkg(null)}
              className={`relative rounded-3xl border-2 ${pkg.border} bg-gradient-to-b ${pkg.color} p-8 flex flex-col transition-all duration-300 ${
                hoveredPkg === pkg.name ? "scale-105 shadow-2xl" : "shadow-lg"
              } ${pkg.badge ? "ring-2 ring-[#d4a017] ring-offset-2 ring-offset-[#1a0a00]" : ""}`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d4a017] text-[#1a0a00] text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap shadow">
                  {pkg.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-black text-[#1a0a00]">{pkg.name}</h3>
                <div className="mt-3">
                  <span className="text-4xl font-black" style={{ color: pkg.accent }}>
                    {pkg.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">onwards</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span style={{ color: pkg.accent }} className="mt-0.5 flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={waLink(pkg.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-bold py-3.5 rounded-full transition-all duration-200 hover:scale-105 text-sm"
                style={{
                  backgroundColor: pkg.accent,
                  color: pkg.name === "Gold" ? "#1a0a00" : "white",
                }}
              >
                Book {pkg.name} Package →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-white/5 border border-[#d4a017]/20 rounded-3xl p-8">
          <h3 className="text-[#d4a017] font-black text-2xl mb-6 text-center">
            Add-On Services
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-[#d4a017]/50 transition-colors"
              >
                <div className="text-3xl mb-2">{addon.icon}</div>
                <div className="text-white text-xs font-semibold mb-1">{addon.name}</div>
                <div className="text-[#d4a017] font-black text-sm">{addon.price}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">
            * Add-ons can be added to any package. Contact us for custom requirements.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400 mb-4">Not sure which package? Let&apos;s chat!</p>
          <a
            href="https://wa.me/919988756789?text=Hi%20LensLove!%20I%20need%20help%20choosing%20a%20wedding%20photography%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full transition-colors"
          >
            💬 WhatsApp for Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
