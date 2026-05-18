"use client";

import { Bell, Search } from "lucide-react";

export default function Header({ title }: { title: string }) {
  return (
    <header className="h-20 border-b border-white/10 bg-black/30 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
      <h1 className="text-2xl font-semibold text-white">{title}</h1>
      
      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search sponsors, campaigns..." 
            className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 w-64 transition-all focus:bg-white/10"
          />
        </div>
        
        <button className="relative text-neutral-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full ring-2 ring-black" />
        </button>
      </div>
    </header>
  );
}
