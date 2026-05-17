"use client";

const footerLinks = {
  Services: [
    { label: "Wedding Photography", href: "#portfolio" },
    { label: "Wedding Videography", href: "#packages" },
    { label: "Pre-Wedding Shoots", href: "#packages" },
    { label: "Destination Weddings", href: "#portfolio" },
    { label: "Drone Photography", href: "#packages" },
  ],
  Pages: [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Packages & Pricing", href: "#packages" },
    { label: "Check Availability", href: "#availability" },
    { label: "Love Stories", href: "#love-stories" },
    { label: "Book Now", href: "#contact" },
  ],
};

const socials = [
  { icon: "📸", label: "Instagram", href: "https://instagram.com/lenslovephotography", handle: "@lenslovephotography" },
  { icon: "📘", label: "Facebook", href: "https://facebook.com/lenslovephotography", handle: "LensLove Photography" },
  { icon: "🎬", label: "YouTube", href: "https://youtube.com/@lenslovephotography", handle: "@lenslovephotography" },
];

export default function Footer() {
  return (
    <footer className="bg-[#120600] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-black mb-1">LensLove 📷</div>
            <div className="text-[#d4a017] font-semibold text-sm mb-4">
              Photography — by Arjun Kapoor
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Capturing your most beautiful moments with cinematic artistry.
              Based in Mumbai, serving all of India and beyond.
            </p>
            {/* Contact */}
            <div className="space-y-2">
              <a
                href="tel:+919988756789"
                className="flex items-center gap-2 text-gray-300 hover:text-[#d4a017] text-sm transition-colors"
              >
                📞 +91 99887 56789
              </a>
              <a
                href="https://wa.me/919988756789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#d4a017] text-sm transition-colors"
              >
                💬 WhatsApp Us
              </a>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                📍 Mumbai & Gujarat, India
              </div>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[#d4a017] font-bold text-sm mb-5 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social column */}
          <div>
            <h4 className="text-[#d4a017] font-bold text-sm mb-5 uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="space-y-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg group-hover:border-[#d4a017]/50 transition-colors">
                    {social.icon}
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold group-hover:text-[#d4a017] transition-colors">
                      {social.label}
                    </div>
                    <div className="text-gray-500 text-xs">{social.handle}</div>
                  </div>
                </a>
              ))}
            </div>
            {/* Quick CTA */}
            <a
              href="https://wa.me/919988756789?text=Hi%20LensLove!%20I'm%20interested%20in%20wedding%20photography%20for%20my%20upcoming%20wedding."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-green-600 hover:bg-green-500 text-white font-bold text-sm px-5 py-3 rounded-full transition-colors"
            >
              💬 Quick Enquiry
            </a>
          </div>
        </div>

        {/* SEO paragraph */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <p className="text-gray-600 text-xs leading-relaxed text-center max-w-4xl mx-auto">
            <strong className="text-gray-500">LensLove Photography</strong> — Your trusted{" "}
            <span className="text-gray-500">wedding photographer Mumbai</span>,{" "}
            <span className="text-gray-500">candid photography Gujarat</span>,{" "}
            <span className="text-gray-500">destination wedding photographer India</span>,{" "}
            <span className="text-gray-500">pre-wedding shoot Ahmedabad</span>,{" "}
            <span className="text-gray-500">wedding videographer Mumbai</span>. Serving{" "}
            Mumbai, Ahmedabad, Surat, Vadodara, Rajkot, Jaipur, Udaipur, Goa &amp; all
            destination weddings across India. LensLove Photography by Arjun Kapoor.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-gray-500 text-xs">
            © 2025 LensLove Photography. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex gap-1 text-[#d4a017] text-sm">★★★★★</div>
            <span className="text-gray-500 text-xs">4.9/5 · 180+ Couples Captured</span>
          </div>
          <p className="text-gray-600 text-xs">
            Template W-IN-01 · Made with ❤️ for Indian Weddings
          </p>
        </div>
      </div>
    </footer>
  );
}
