"use client";

import Header from "@/components/dashboard/Header";
import { Download, FileText, Calendar, Printer } from "lucide-react";
import { topSponsors } from "@/lib/mock-data";

export default function ReportsPage() {
  return (
    <>
      <Header title="Reports & Export" />
      <main className="flex-1 overflow-y-auto p-8">
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Generate PDF Reports</h2>
            <p className="text-sm text-neutral-400">Create branded reports for your sponsors or internal team.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Report Configuration */}
          <div className="glass rounded-2xl border border-white/5 p-6 h-fit">
            <h3 className="text-lg font-semibold text-white mb-6">Report Settings</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Report Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-500">
                  <option>Post-Event Summary (All Sponsors)</option>
                  <option>Individual Sponsor Impact Report</option>
                  <option>Lead Generation Summary</option>
                  <option>Social Media ROI</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Select Sponsor</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary-500" disabled>
                  <option>N/A - All Sponsors</option>
                  {topSponsors.map(s => (
                    <option key={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Date Range</label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Calendar className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input type="date" className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-primary-500" />
                  </div>
                  <span className="text-neutral-500">to</span>
                  <div className="relative flex-1">
                    <Calendar className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input type="date" className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-primary-500" />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button className="w-full bg-gradient-premium hover:opacity-90 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-opacity flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Generate PDF
                </button>
                <button className="w-full glass hover:bg-white/10 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                  <Printer className="w-4 h-4" /> Print View
                </button>
              </div>
            </div>
          </div>

          {/* Preview Pane */}
          <div className="lg:col-span-2 glass rounded-2xl border border-white/5 p-6 flex flex-col items-center justify-center min-h-[600px] bg-black/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="relative bg-white text-black w-full max-w-lg aspect-[1/1.4] rounded shadow-2xl p-8 flex flex-col scale-90 md:scale-100 origin-top">
              
              <div className="border-b-2 border-primary-500 pb-4 mb-6">
                <h1 className="text-2xl font-bold">Post-Event Summary</h1>
                <p className="text-gray-500 text-sm">Sponsor Visibility Dashboard</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Total Reach</p>
                  <p className="text-2xl font-bold text-primary-600">2.4M</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Total Leads</p>
                  <p className="text-2xl font-bold text-primary-600">1,204</p>
                </div>
              </div>

              <div className="flex-1">
                <h4 className="font-bold text-gray-800 mb-4">Top Sponsors by Reach</h4>
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b text-gray-500">
                      <th className="pb-2">Sponsor</th>
                      <th className="pb-2 text-right">Reach</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topSponsors.slice(0, 4).map((s, i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="py-2 font-medium">{s.name}</td>
                        <td className="py-2 text-right text-gray-600">{s.reach}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-auto text-center text-xs text-gray-400 border-t pt-4">
                Generated via SponsorVis on {new Date().toLocaleDateString()}
              </div>

            </div>

          </div>

        </div>
      </main>
    </>
  );
}
