"use client";

import { motion } from "framer-motion";
import { Users, Eye, MousePointerClick, TrendingUp, Target } from "lucide-react";

const metrics = [
  { label: "Reach", value: "2.4M", icon: Users, color: "text-blue-400" },
  { label: "Impressions", value: "5.1M", icon: Eye, color: "text-purple-400" },
  { label: "Clicks", value: "84.2K", icon: MousePointerClick, color: "text-pink-400" },
  { label: "Leads", value: "1,204", icon: Target, color: "text-emerald-400" },
  { label: "Engagement Rate", value: "4.8%", icon: TrendingUp, color: "text-amber-400" },
];

export default function AnalyticsPreview() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Mockup Container */}
          <div className="glass rounded-2xl border border-white/10 p-2 md:p-4 neon-border overflow-hidden relative">
            
            {/* Window Header */}
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            {/* Dashboard Content */}
            <div className="bg-black/50 rounded-xl p-4 md:p-8">
              
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Campaign Overview</h3>
                  <p className="text-sm text-neutral-400">Real-time performance metrics</p>
                </div>
                <div className="hidden sm:block text-sm text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full ring-1 ring-primary-500/20">
                  Live Updates Active
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    className="glass rounded-xl p-4 border border-white/5"
                  >
                    <metric.icon className={`w-5 h-5 mb-3 ${metric.color}`} />
                    <div className="text-sm text-neutral-400 mb-1">{metric.label}</div>
                    <div className="text-2xl font-bold">{metric.value}</div>
                  </motion.div>
                ))}
              </div>

              {/* Chart Mockup */}
              <div className="h-48 md:h-64 w-full glass rounded-xl border border-white/5 flex items-end px-4 gap-2 pt-8 pb-4">
                {[40, 25, 60, 30, 80, 45, 90, 65, 100, 85, 70].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                    className="flex-1 bg-gradient-to-t from-primary-600/50 to-accent-500/80 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
