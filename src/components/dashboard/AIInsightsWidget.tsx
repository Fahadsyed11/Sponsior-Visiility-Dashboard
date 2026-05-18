"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function AIInsightsWidget() {
  return (
    <div className="glass rounded-2xl border border-white/5 p-6 relative overflow-hidden bg-gradient-to-br from-black to-primary-900/20">
      <div className="absolute top-0 right-0 p-6 opacity-20">
        <Sparkles className="w-24 h-24 text-primary-400 blur-sm" />
      </div>
      
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-primary-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">AI Campaign Insights</h3>
      </div>
      
      <div className="space-y-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 p-4 rounded-xl"
        >
          <p className="text-sm text-neutral-300">
            <span className="text-primary-400 font-medium">Optimization Opportunity:</span> TechCorp's QR codes on the main stage are seeing a 45% higher scan rate than booth placements. Recommend shifting secondary sponsors to digital displays near the stage.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 border border-white/10 p-4 rounded-xl"
        >
          <p className="text-sm text-neutral-300">
            <span className="text-green-400 font-medium">Performance Alert:</span> CloudScale has already exceeded their guaranteed lead quota by 12%. They are highly likely to renew for next year.
          </p>
        </motion.div>
      </div>

      <button className="mt-6 text-sm text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors relative z-10 font-medium">
        Generate Full AI Report <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
