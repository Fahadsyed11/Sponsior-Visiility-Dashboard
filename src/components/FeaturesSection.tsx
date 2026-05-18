"use client";

import { motion } from "framer-motion";
import { Activity, Share2, Sparkles, FileText, Target, QrCode } from "lucide-react";

const features = [
  {
    title: "Real-Time Tracking",
    description: "Monitor campaign performance as it happens. Watch clicks, impressions, and reach update live.",
    icon: Activity,
  },
  {
    title: "Social Media Analytics",
    description: "Aggregate data from all major platforms automatically. Stop counting likes manually.",
    icon: Share2,
  },
  {
    title: "AI Insights",
    description: "Our machine learning models predict campaign success and suggest optimization strategies.",
    icon: Sparkles,
  },
  {
    title: "PDF Reports",
    description: "Generate beautiful, sponsor-ready PDF reports with one click. Send them automatically at campaign end.",
    icon: FileText,
  },
  {
    title: "Lead Tracking",
    description: "Attribute leads directly to sponsor placements. Prove your event's tangible ROI.",
    icon: Target,
  },
  {
    title: "QR Analytics",
    description: "Track physical world engagement with dynamic QR codes that tie directly to sponsor campaigns.",
    icon: QrCode,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-black/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need to <span className="text-gradient">prove ROI</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Stop guessing your event's value. Our platform gives you the hard data sponsors demand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-2xl hover:bg-white/[0.05] transition-colors border border-white/5 hover:border-primary-500/30 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
