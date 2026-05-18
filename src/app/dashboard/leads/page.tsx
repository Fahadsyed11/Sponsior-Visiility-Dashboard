"use client";

import Header from "@/components/dashboard/Header";
import { Upload, FileDown, Target, UserCheck, ShieldCheck } from "lucide-react";

export default function LeadsPage() {
  return (
    <>
      <Header title="Lead Management" />
      <main className="flex-1 overflow-y-auto p-8">
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Lead Funnel</h2>
            <p className="text-sm text-neutral-400">Track conversion from scan to qualified lead.</p>
          </div>
          <div className="flex gap-3">
            <button className="glass px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2 text-primary-400 border-primary-500/20">
              <Upload className="w-4 h-4" /> Import CSV
            </button>
            <button className="glass px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
              <FileDown className="w-4 h-4" /> Export All
            </button>
          </div>
        </div>

        {/* Funnel Visualization Mock */}
        <div className="glass rounded-2xl border border-white/5 p-8 mb-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary-900/10 to-transparent pointer-events-none" />
          
          <div className="max-w-3xl mx-auto">
            {/* Top Funnel */}
            <div className="bg-white/5 rounded-t-2xl p-4 flex justify-between items-center border border-white/5 border-b-0 mb-1">
              <div className="flex items-center gap-3">
                <Target className="text-blue-400 w-5 h-5" />
                <span className="font-medium">Total QR Scans / Clicks</span>
              </div>
              <span className="text-2xl font-bold">14,204</span>
            </div>
            
            {/* Mid Funnel */}
            <div className="bg-white/10 p-4 flex justify-between items-center border border-white/5 border-b-0 mb-1 mx-4">
              <div className="flex items-center gap-3">
                <UserCheck className="text-amber-400 w-5 h-5" />
                <span className="font-medium">Form Submissions</span>
              </div>
              <span className="text-2xl font-bold">4,192</span>
            </div>

            {/* Bottom Funnel */}
            <div className="bg-primary-500/20 rounded-b-2xl p-4 flex justify-between items-center border border-primary-500/30 mx-8 shadow-[0_0_30px_rgba(124,58,237,0.15)]">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-primary-400 w-5 h-5" />
                <span className="font-medium text-primary-100">Qualified Leads</span>
              </div>
              <span className="text-2xl font-bold text-white">1,204</span>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="glass rounded-2xl border border-white/5">
          <div className="p-6 border-b border-white/5">
            <h3 className="text-lg font-semibold text-white">Recent Leads</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-black/40">
                  <th className="p-4 text-sm font-medium text-neutral-400">Name</th>
                  <th className="p-4 text-sm font-medium text-neutral-400">Email</th>
                  <th className="p-4 text-sm font-medium text-neutral-400">Company</th>
                  <th className="p-4 text-sm font-medium text-neutral-400">Source Sponsor</th>
                  <th className="p-4 text-sm font-medium text-neutral-400">Score</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { n: "John Doe", e: "john@startup.io", c: "Startup.io", s: "TechCorp", sc: 95 },
                  { n: "Sarah Smith", e: "sarah@enterprise.com", c: "Enterprise Inc", s: "CloudScale", sc: 88 },
                  { n: "Mike Johnson", e: "mike@agency.net", c: "Digital Agency", s: "CyberShield", sc: 72 },
                  { n: "Emma Wilson", e: "emma@tech.co", c: "Tech Co", s: "TechCorp", sc: 91 },
                ].map((lead, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                    <td className="p-4 text-sm font-medium text-white">{lead.n}</td>
                    <td className="p-4 text-sm text-neutral-400">{lead.e}</td>
                    <td className="p-4 text-sm text-neutral-300">{lead.c}</td>
                    <td className="p-4 text-sm text-neutral-300">
                      <span className="px-2 py-1 rounded bg-white/5 text-xs border border-white/10">{lead.s}</span>
                    </td>
                    <td className="p-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${lead.sc >= 90 ? 'bg-green-500' : lead.sc >= 80 ? 'bg-primary-500' : 'bg-amber-500'}`} 
                            style={{ width: `${lead.sc}%` }} 
                          />
                        </div>
                        <span className="text-xs text-neutral-400">{lead.sc}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </>
  );
}
