"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const packages = [
  "Silver Package (₹45,000)",
  "Gold Package (₹85,000)",
  "Platinum Package (₹1,50,000)",
  "Custom / Not Sure Yet",
];

const guestCounts = [
  "Under 100", "100–200", "200–400", "400–600", "600+",
];

interface FormData {
  brideName: string;
  groomName: string;
  phone: string;
  weddingDate: string;
  weddingCity: string;
  packageInterest: string;
  guestCount: string;
  message: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    brideName: "",
    groomName: "",
    phone: "",
    weddingDate: "",
    weddingCity: "",
    packageInterest: "",
    guestCount: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const waMsg = `https://wa.me/919988756789?text=Hi%20LensLove!%20I'm%20${encodeURIComponent(
    formData.brideName || "interested"
  )}%20%26%20interested%20in%20wedding%20photography%20for%20${encodeURIComponent(
    formData.weddingDate || "my wedding"
  )}.`;

  return (
    <section id="contact" className="py-20 bg-[#1a0a00]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#d4a017] font-semibold text-sm tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4">
            Book Your Wedding Photography
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within 2 hours.
            Or WhatsApp us for an instant reply!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-white font-black text-xl mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "💬",
                    label: "WhatsApp (Primary)",
                    value: "+91 99887 56789",
                    href: "https://wa.me/919988756789",
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+91 99887 56789",
                    href: "tel:+919988756789",
                  },
                  {
                    icon: "📸",
                    label: "Instagram",
                    value: "@lenslovephotography",
                    href: "https://instagram.com/lenslovephotography",
                  },
                  {
                    icon: "📍",
                    label: "Based in",
                    value: "Mumbai & Gujarat, India",
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#d4a017]/10 border border-[#d4a017]/20 flex items-center justify-center text-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-semibold text-sm hover:text-[#d4a017] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white font-semibold text-sm">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={waMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-500 text-white font-black text-lg py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-lg"
            >
              <span className="text-2xl">💬</span>
              <div className="text-left">
                <div>WhatsApp for Instant Reply</div>
                <div className="text-green-200 text-xs font-normal">Usually replies in &lt; 15 mins</div>
              </div>
            </a>

            {/* Trust badges */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h4 className="text-[#d4a017] font-bold text-sm mb-3">Why Book With Us?</h4>
              <ul className="space-y-2 text-gray-300 text-xs">
                {[
                  "✓ Free pre-booking consultation",
                  "✓ Secure your date with just ₹5,000",
                  "✓ 100% refund if we cancel",
                  "✓ 180+ happy couples",
                  "✓ 4.9/5 average rating",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/5 border border-[#d4a017]/30 rounded-3xl p-10 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="text-6xl mb-6">🎉</div>
                  <h3 className="text-white font-black text-2xl mb-3">
                    Thank You, {formData.brideName || "Dear Couple"}!
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    We&apos;ve received your enquiry for your wedding on{" "}
                    <span className="text-[#d4a017] font-semibold">
                      {formData.weddingDate || "your special day"}
                    </span>
                    . Arjun will personally reach out to you within 2 hours!
                  </p>
                  <a
                    href={waMsg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full transition-colors"
                  >
                    💬 Chat on WhatsApp Now
                  </a>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Bride&apos;s Name *
                      </label>
                      <input
                        type="text"
                        name="brideName"
                        required
                        value={formData.brideName}
                        onChange={handleChange}
                        placeholder="e.g. Priya Sharma"
                        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]/50"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Groom&apos;s Name *
                      </label>
                      <input
                        type="text"
                        name="groomName"
                        required
                        value={formData.groomName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Kapoor"
                        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]/50"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]/50"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Wedding Date *
                      </label>
                      <input
                        type="date"
                        name="weddingDate"
                        required
                        value={formData.weddingDate}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]/50"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Wedding City
                      </label>
                      <input
                        type="text"
                        name="weddingCity"
                        value={formData.weddingCity}
                        onChange={handleChange}
                        placeholder="e.g. Mumbai, Ahmedabad"
                        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]/50"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Guest Count (approx)
                      </label>
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full bg-[#1a0a00] border border-white/20 rounded-xl px-4 py-3 text-gray-300 text-sm focus:outline-none focus:border-[#d4a017]"
                      >
                        <option value="">-- Select --</option>
                        {guestCounts.map((g) => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      Package Interest
                    </label>
                    <select
                      name="packageInterest"
                      value={formData.packageInterest}
                      onChange={handleChange}
                      className="w-full bg-[#1a0a00] border border-white/20 rounded-xl px-4 py-3 text-gray-300 text-sm focus:outline-none focus:border-[#d4a017]"
                    >
                      <option value="">-- Select Package --</option>
                      {packages.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      Message / Special Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your dream wedding — venue, style, special moments you want captured..."
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#d4a017] hover:bg-yellow-400 disabled:opacity-60 text-[#1a0a00] font-black text-lg py-4 rounded-full transition-all hover:scale-[1.02] shadow-lg"
                  >
                    {submitting ? "Sending..." : "📸 Send Enquiry"}
                  </button>

                  <p className="text-center text-gray-500 text-xs">
                    Or WhatsApp directly:{" "}
                    <a href="https://wa.me/919988756789" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                      +91 99887 56789
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
