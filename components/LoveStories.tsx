"use client";

import { motion } from "framer-motion";

const stories = [
  {
    couple: "Pooja & Rahul",
    location: "Udaipur Palace",
    weddingType: "Destination Rajasthani",
    quote:
      "Arjun captured every tear, every laugh, every stolen glance. Our Udaipur wedding album is something we'll treasure for generations. The candid shots are absolutely breathtaking!",
    color: "from-amber-800 to-rose-900",
    emoji: "🏰",
    date: "November 2024",
  },
  {
    couple: "Nisha & Arjun",
    location: "Alibaug Beach, Mumbai",
    weddingType: "Beachside Modern",
    quote:
      "We wanted someone who could capture both the traditional ceremonies and our modern fun side. LensLove delivered beyond our dreams. The cinematic reel made our guests cry!",
    color: "from-blue-900 to-teal-900",
    emoji: "🌊",
    date: "February 2024",
  },
  {
    couple: "Meera & Karan",
    location: "Jaipur Haveli",
    weddingType: "Royal Heritage",
    quote:
      "Three days of wedding and every single moment was documented so beautifully. The drone shots of our baraat were jaw-dropping. Best investment of our wedding!",
    color: "from-purple-900 to-pink-900",
    emoji: "👑",
    date: "December 2024",
  },
  {
    couple: "Priya & Dev",
    location: "Ahmedabad Banquet Hall",
    weddingType: "Grand Gujarati",
    quote:
      "The phera photos made my parents emotional all over again. LensLove captured the soul of our Gujarati wedding — the garba, the rituals, the laughter. Truly magical.",
    color: "from-orange-900 to-amber-800",
    emoji: "🪔",
    date: "January 2025",
  },
];

export default function LoveStories() {
  return (
    <section id="love-stories" className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#e11d48] font-semibold text-sm tracking-widest uppercase">
            Featured Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1a0a00] mt-2 mb-4">
            Love Stories We&apos;ve Told
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Every wedding is a unique universe. Here are some of the beautiful love
            stories we&apos;ve had the honour of capturing forever.
          </p>
        </div>

        {/* Story cards */}
        <div className="space-y-6">
          {stories.map((story, idx) => (
            <motion.div
              key={story.couple}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-r ${story.color} shadow-xl`}
            >
              <div className="flex flex-col sm:flex-row items-stretch">
                {/* Emoji side */}
                <div className="flex items-center justify-center sm:w-40 py-8 sm:py-0 text-7xl bg-black/10">
                  {story.emoji}
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-white font-black text-2xl">{story.couple}</h3>
                      <p className="text-white/70 text-sm mt-1">
                        📍 {story.location} · {story.date}
                      </p>
                    </div>
                    <span className="bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-full">
                      {story.weddingType}
                    </span>
                  </div>

                  <blockquote className="text-white/90 text-base leading-relaxed italic mb-6">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>

                  <a
                    href="#portfolio"
                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors border border-white/30"
                  >
                    📸 View Their Gallery →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-600 text-lg mb-4">
            Ready to start your own love story?
          </p>
          <a
            href="https://wa.me/919988756789?text=Hi%20LensLove!%20I%20want%20to%20create%20a%20beautiful%20love%20story%20for%20my%20wedding."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e11d48] hover:bg-rose-600 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            💌 Start Your Love Story
          </a>
        </div>
      </div>
    </section>
  );
}
