"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Add Sponsors",
    description: "Input sponsor details, upload logos, and set tier levels. Our system automatically creates tracking links for each sponsor.",
  },
  {
    num: "02",
    title: "Track Campaigns",
    description: "Distribute the links across your event touchpoints. The dashboard begins aggregating data instantly.",
  },
  {
    num: "03",
    title: "Analyze Impact",
    description: "Watch the metrics roll in. Use AI insights to adjust visibility mid-event to ensure all sponsors hit their targets.",
  },
  {
    num: "04",
    title: "Export Reports",
    description: "When the event closes, generate comprehensive, beautiful PDF reports with one click.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] bg-accent-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Four simple steps to total ROI visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-white/5 mb-4">{step.num}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-neutral-400">{step.description}</p>
              
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent -translate-x-8" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
