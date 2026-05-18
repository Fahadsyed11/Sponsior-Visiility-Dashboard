"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Sponsor Visibility Dashboard completely changed how we pitch to sponsors. Being able to guarantee and prove ROI in real-time helped us close 40% more sponsorships this year.",
    name: "Sarah Jenkins",
    role: "Event Director, TechSummit 2025",
    avatar: "SJ",
  },
  {
    quote: "The automated PDF reports save our team dozens of hours post-event. Our sponsors love the transparency and the beautiful design of the analytics they receive.",
    name: "Marcus Chen",
    role: "Marketing Head, FutureFinance",
    avatar: "MC",
  },
  {
    quote: "Finally, a tool that tracks both digital and physical engagement. The QR code analytics bridging the gap between booth visits and online clicks is a game-changer.",
    name: "Elena Rodriguez",
    role: "Sponsorship Coordinator, HealthExpo",
    avatar: "ER",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Loved by event organizers</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            See what the industry is saying about our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-2xl border border-white/5 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-primary-500 text-primary-500" />
                ))}
              </div>
              <p className="text-neutral-300 mb-8 italic">"{t.quote}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-premium flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
