"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 w-full h-[500px] bg-primary-600/20 blur-[120px] rounded-full pointer-events-none -z-10 animate-breathe" />
      
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary-500/10 text-primary-500 ring-1 ring-inset ring-primary-500/20 mb-8">
            Introducing Sponsor Visibility Dashboard
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Measure Sponsor ROI in <br className="hidden md:block" />
            <span className="text-gradient">Real Time</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
            Track reach, engagement, clicks, impressions, leads and sponsor impact from one intelligent dashboard.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-premium hover:opacity-90 transition-opacity text-white px-8 py-3.5 rounded-full font-medium flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="glass hover:bg-white/5 transition-colors text-white px-8 py-3.5 rounded-full font-medium flex items-center gap-2">
              <Play className="w-4 h-4" /> View Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
