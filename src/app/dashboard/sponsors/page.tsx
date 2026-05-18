"use client";

import { useState } from "react";
import Header from "@/components/dashboard/Header";
import { Search, Plus, Filter, MoreVertical, Link as LinkIcon, Edit2, Trash2 } from "lucide-react";

// Mock Data
const sponsorsData = [
  { id: 1, name: "TechCorp", email: "contact@techcorp.com", tier: "Platinum", status: "Active", campaigns: 3 },
  { id: 2, name: "CloudScale", email: "marketing@cloudscale.io", tier: "Gold", status: "Active", campaigns: 2 },
  { id: 3, name: "DataFlow", email: "hello@dataflow.dev", tier: "Gold", status: "Paused", campaigns: 1 },
  { id: 4, name: "CyberShield", email: "info@cybershield.sec", tier: "Silver", status: "Active", campaigns: 1 },
  { id: 5, name: "NetSpeed", email: "sponsorships@netspeed.net", tier: "Silver", status: "Active", campaigns: 2 },
  { id: 6, name: "AI Dynamics", email: "partners@aidynamics.ai", tier: "Platinum", status: "Onboarding", campaigns: 0 },
];

export default function SponsorsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header title="Sponsor Management" />
      
      <main className="flex-1 overflow-y-auto p-8">
        
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search sponsors by name or email..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 w-full transition-all focus:bg-white/10"
            />
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <button className="glass px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2 flex-1 sm:flex-none justify-center">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="bg-gradient-premium hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-opacity flex items-center gap-2 flex-1 sm:flex-none justify-center">
              <Plus className="w-4 h-4" /> New Sponsor
            </button>
          </div>
        </div>

        {/* Sponsors Table */}
        <div className="glass rounded-2xl border border-white/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-black/40">
                  <th className="p-4 text-sm font-medium text-neutral-400">Sponsor Name</th>
                  <th className="p-4 text-sm font-medium text-neutral-400">Contact Email</th>
                  <th className="p-4 text-sm font-medium text-neutral-400">Tier</th>
                  <th className="p-4 text-sm font-medium text-neutral-400">Status</th>
                  <th className="p-4 text-sm font-medium text-neutral-400">Campaigns</th>
                  <th className="p-4 text-sm font-medium text-neutral-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sponsorsData.map((sponsor) => (
                  <tr key={sponsor.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm font-bold text-neutral-300">
                          {sponsor.name.charAt(0)}
                        </div>
                        <span className="font-medium text-white">{sponsor.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-neutral-400">{sponsor.email}</td>
                    <td className="p-4 text-sm">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        sponsor.tier === 'Platinum' ? 'bg-neutral-800 text-neutral-200 border border-neutral-700' :
                        sponsor.tier === 'Gold' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                        'bg-slate-500/10 text-slate-400 border border-slate-500/20'
                      }`}>
                        {sponsor.tier}
                      </span>
                    </td>
                    <td className="p-4 text-sm">
                      <span className={`flex items-center gap-1.5 ${
                        sponsor.status === 'Active' ? 'text-green-400' : 
                        sponsor.status === 'Paused' ? 'text-amber-400' : 'text-blue-400'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          sponsor.status === 'Active' ? 'bg-green-400' : 
                          sponsor.status === 'Paused' ? 'bg-amber-400' : 'bg-blue-400'
                        }`} />
                        {sponsor.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-neutral-300">{sponsor.campaigns} Active</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-white/10 rounded-md transition-colors text-neutral-400 hover:text-primary-400" title="Generate Tracking Link">
                          <LinkIcon className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-md transition-colors text-neutral-400 hover:text-white" title="Edit Sponsor">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-red-500/10 rounded-md transition-colors text-neutral-400 hover:text-red-400" title="Delete Sponsor">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Mock */}
          <div className="p-4 border-t border-white/5 flex items-center justify-between text-sm text-neutral-400">
            <span>Showing 1 to 6 of 6 entries</span>
            <div className="flex gap-1">
              <button className="px-3 py-1 rounded-md glass hover:bg-white/10 disabled:opacity-50" disabled>Previous</button>
              <button className="px-3 py-1 rounded-md bg-white/10 text-white">1</button>
              <button className="px-3 py-1 rounded-md glass hover:bg-white/10 disabled:opacity-50" disabled>Next</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
