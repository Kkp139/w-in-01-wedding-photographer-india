"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Nisha & Arjun Mehta",
    city: "Mumbai",
    package: "Gold Package",
    review:
      "Arjun and his team are magicians with a camera! They captured emotions we didn't even know we were feeling. The same-day teaser at our reception had everyone in tears. 100% recommend LensLove!",
    rating: 5,
    avatar: "👰",
    date: "Feb 2024",
  },
  {
    name: "Priya & Dev Shah",
    city: "Ahmedabad",
    package: "Platinum Package",
    review:
      "3-day Gujarati wedding and not a single moment was missed. The drone shots of our garba were breathtaking. Our families keep watching the film on repeat. Worth every rupee!",
    rating: 5,
    avatar: "💑",
    date: "Jan 2025",
  },
  {
    name: "Kavya & Nikhil Patel",
    city: "Surat",
    package: "Gold Package",
    review:
      "We wanted candid photography and LensLove delivered beautifully. The photos look like they're from a Bollywood film. Our pre-wedding shoot at Marine Drive was absolutely stunning!",
    rating: 5,
    avatar: "🌸",
    date: "March 2024",
  },
  {
    name: "Sneha & Vivek Joshi",
    city: "Vadodara",
    package: "Silver Package",
    review:
      "Superb photography at a very reasonable price. Vivek was worried about his camera-shy nature but Arjun made us both so comfortable. The candid shots are our absolute favourites!",
    rating: 5,
    avatar: "💍",
    date: "Nov 2024",
  },
  {
    name: "Ananya & Rohan Gupta",
    city: "Goa (Destination)",
    package: "Platinum Package",
    review:
      "Destination wedding in Goa and LensLove made it look like a fairytale. The sunset ceremony photos are INSANE. Every guest asked who our photographer was. Simply outstanding!",
    rating: 5,
    avatar: "🌴",
    date: "Dec 2024",
  },
  {
    name: "Divya & Saurabh Kapoor",
    city: "Jaipur",
    package: "Gold Package",
    review:
      "Booked 8 months in advance based on recommendations — best decision ever! The team was professional, creative, and so warm. Our Rajasthani wedding album is truly royal!",
    rating: 5,
    avatar: "👑",
    date: "Oct 2024",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-[#1a0a00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#d4a017] font-semibold text-sm tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4">
            What Couples Say
          </h2>

          {/* Overall rating banner */}
          <div className="inline-flex items-center gap-4 bg-[#d4a017]/10 border border-[#d4a017]/30 rounded-full px-8 py-4 mt-4">
            <div className="text-center">
              <div className="text-[#d4a017] font-black text-3xl">4.9</div>
              <div className="text-yellow-400 text-sm">★★★★★</div>
            </div>
            <div className="w-px h-12 bg-[#d4a017]/30" />
            <div>
              <div className="text-white font-black text-2xl">180+</div>
              <div className="text-gray-400 text-sm">Couples Captured</div>
            </div>
            <div className="w-px h-12 bg-[#d4a017]/30" />
            <div>
              <div className="text-white font-black text-2xl">8+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-[#d4a017]/40 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-[#d4a017] text-lg">★</span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{review.review}&rdquo;
              </p>

              {/* Reviewer info */}
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="w-10 h-10 rounded-full bg-[#d4a017]/20 flex items-center justify-center text-xl">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-sm">{review.name}</div>
                  <div className="text-gray-400 text-xs">{review.city}</div>
                </div>
                <div className="text-right">
                  <div className="text-[#d4a017] text-xs font-semibold">{review.package}</div>
                  <div className="text-gray-500 text-xs">{review.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram placeholder */}
        <div className="bg-white/5 border border-[#d4a017]/20 rounded-3xl p-8 text-center">
          <div className="text-4xl mb-3">📱</div>
          <h3 className="text-white font-black text-xl mb-2">Follow Our Journey</h3>
          <p className="text-gray-400 mb-6">
            See our latest work, behind-the-scenes moments and real wedding stories on Instagram
          </p>
          <a
            href="https://instagram.com/lenslovephotography"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold px-8 py-3 rounded-full transition-all hover:scale-105"
          >
            📸 @lenslovephotography
          </a>
          <p className="text-gray-500 text-xs mt-4">
            Join 12,000+ couples following our work
          </p>
        </div>
      </div>
    </section>
  );
}
