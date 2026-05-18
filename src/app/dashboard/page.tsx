"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Download, Plus } from "lucide-react";
import Header from "@/components/dashboard/Header";
import { overviewStats, reachData, topSponsors, recentActivity } from "@/lib/mock-data";
import AIInsightsWidget from "@/components/dashboard/AIInsightsWidget";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

export default function DashboardOverview() {
  return (
    <>
      <Header title="Overview" />
      
      <main className="flex-1 overflow-y-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Welcome back, Alex</h2>
            <p className="text-sm text-neutral-400">Here's what's happening with your sponsors today.</p>
          </div>
          <div className="flex gap-3">
            <button className="glass px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" /> Export Report
            </button>
            <button className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(124,58,237,0.5)]">
              <Plus className="w-4 h-4" /> Add Sponsor
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewStats.map((stat, i) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-12 h-12 text-green-500 blur-[2px]" />
                ) : (
                  <ArrowDownRight className="w-12 h-12 text-red-500 blur-[2px]" />
                )}
              </div>
              <p className="text-sm font-medium text-neutral-400 mb-2">{stat.name}</p>
              <div className="flex items-baseline gap-3">
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                <span className={`text-sm font-medium flex items-center ${
                  stat.trend === "up" ? "text-green-400" : "text-red-400"
                }`}>
                  {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                  {stat.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 glass rounded-2xl border border-white/5 p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Reach & Clicks Overview</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={reachData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                  <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#000', border: '1px solid #262626', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="reach" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorReach)" />
                  <Area type="monotone" dataKey="clicks" stroke="#0ea5e9" strokeWidth={2} fillOpacity={1} fill="url(#colorClicks)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="glass rounded-2xl border border-white/5 p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
            <div className="space-y-6">
              {recentActivity.map((activity, i) => (
                <div key={activity.id} className="flex gap-4 relative">
                  {i !== recentActivity.length - 1 && (
                    <div className="absolute top-8 left-3 w-[1px] h-full bg-white/10 -translate-x-1/2" />
                  )}
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center ring-4 ring-black z-10 ${
                    activity.type === 'lead' ? 'bg-green-500/20 text-green-400' : 
                    activity.type === 'milestone' ? 'bg-primary-500/20 text-primary-400' : 
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    <div className="w-2 h-2 rounded-full bg-current" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-300">{activity.message}</p>
                    <p className="text-xs text-neutral-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm text-neutral-400 hover:text-white transition-colors border-t border-white/5 pt-4">
              View All Activity
            </button>
          </div>
        </div>

        {/* Top Sponsors Table */}
        <div className="glass rounded-2xl border border-white/5 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-white">Top Performing Sponsors</h3>
            <button className="text-sm text-primary-400 hover:text-primary-300 transition-colors">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-sm text-neutral-500">
                  <th className="pb-3 font-medium">Sponsor</th>
                  <th className="pb-3 font-medium">Tier</th>
                  <th className="pb-3 font-medium">Reach</th>
                  <th className="pb-3 font-medium">Leads</th>
                  <th className="pb-3 font-medium">Est. ROI</th>
                </tr>
              </thead>
              <tbody>
                {topSponsors.map((sponsor) => (
                  <tr key={sponsor.id} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="py-4 text-sm font-medium text-white">{sponsor.name}</td>
                    <td className="py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        sponsor.tier === 'Platinum' ? 'bg-neutral-800 text-neutral-200' :
                        sponsor.tier === 'Gold' ? 'bg-amber-500/10 text-amber-500' :
                        'bg-slate-500/10 text-slate-400'
                      }`}>
                        {sponsor.tier}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-neutral-300">{sponsor.reach}</td>
                    <td className="py-4 text-sm text-neutral-300">{sponsor.leads}</td>
                    <td className="py-4 text-sm font-medium text-green-400">{sponsor.roi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI Insights Section */}
        <div className="mt-8">
          <AIInsightsWidget />
        </div>

      </main>
    </>
  );
}
