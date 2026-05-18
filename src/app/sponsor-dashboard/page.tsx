"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, QrCode, Target, Users } from "lucide-react";
import Header from "@/components/dashboard/Header";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const sponsorReachData = [
  { name: "Mon", reach: 1200, clicks: 400, scans: 120 },
  { name: "Tue", reach: 1800, clicks: 600, scans: 150 },
  { name: "Wed", reach: 2400, clicks: 800, scans: 200 },
  { name: "Thu", reach: 3200, clicks: 1100, scans: 250 },
  { name: "Fri", reach: 4500, clicks: 1800, scans: 400 },
  { name: "Sat", reach: 6800, clicks: 2400, scans: 600 },
  { name: "Sun", reach: 8500, clicks: 3200, scans: 850 },
];

export default function SponsorOverview() {
  return (
    <>
      <Header title="My Performance" />
      
      <main className="flex-1 overflow-y-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Campaign Overview: TechSummit 2026</h2>
            <p className="text-sm text-neutral-400">Your live sponsorship performance data.</p>
          </div>
          <button className="glass px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" /> Download Report
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-6 rounded-2xl border border-white/5 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm font-medium text-neutral-400">Total Reach</p>
            </div>
            <div className="flex items-baseline gap-3">
              <h3 className="text-3xl font-bold text-white">450K</h3>
              <span className="text-sm font-medium flex items-center text-green-400">
                <ArrowUpRight className="w-3 h-3 mr-1" /> +24%
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass p-6 rounded-2xl border border-white/5 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary-400" />
              </div>
              <p className="text-sm font-medium text-neutral-400">Digital Clicks</p>
            </div>
            <div className="flex items-baseline gap-3">
              <h3 className="text-3xl font-bold text-white">32.4K</h3>
              <span className="text-sm font-medium flex items-center text-green-400">
                <ArrowUpRight className="w-3 h-3 mr-1" /> +12%
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-6 rounded-2xl border border-white/5 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <QrCode className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-sm font-medium text-neutral-400">QR Code Scans</p>
            </div>
            <div className="flex items-baseline gap-3">
              <h3 className="text-3xl font-bold text-white">8,450</h3>
              <span className="text-sm font-medium flex items-center text-green-400">
                <ArrowUpRight className="w-3 h-3 mr-1" /> +8%
              </span>
            </div>
          </motion.div>
        </div>

        {/* Main Chart */}
        <div className="glass rounded-2xl border border-white/5 p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-6">Engagement Timeline</h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sponsorReachData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorReachSponsor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorClicksSponsor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorScansSponsor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#000', border: '1px solid #262626', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="reach" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorReachSponsor)" />
                <Area type="monotone" dataKey="clicks" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorClicksSponsor)" />
                <Area type="monotone" dataKey="scans" stroke="#22c55e" strokeWidth={2} fillOpacity={1} fill="url(#colorScansSponsor)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Active Placements */}
        <div className="glass rounded-2xl border border-white/5 p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Your Active Placements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="font-medium text-white mb-1">Main Stage Screen</p>
              <p className="text-xs text-neutral-400 mb-4">QR Code displayed during intermissions</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-neutral-500">Scans</p>
                  <p className="text-lg font-semibold text-green-400">5,200</p>
                </div>
                <span className="text-xs font-medium text-white px-2 py-1 bg-white/10 rounded">Top Performer</span>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="font-medium text-white mb-1">Event App Banner</p>
              <p className="text-xs text-neutral-400 mb-4">Homepage sponsor rotation</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-neutral-500">Clicks</p>
                  <p className="text-lg font-semibold text-primary-400">18,400</p>
                </div>
                <span className="text-xs font-medium text-white px-2 py-1 bg-white/10 rounded">Digital</span>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="font-medium text-white mb-1">Lanyard Logo</p>
              <p className="text-xs text-neutral-400 mb-4">Printed on all attendee lanyards</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-neutral-500">Est. Impressions</p>
                  <p className="text-lg font-semibold text-blue-400">45,000</p>
                </div>
                <span className="text-xs font-medium text-white px-2 py-1 bg-white/10 rounded">Physical</span>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
