"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Share2, 
  Target, 
  BarChart3, 
  Settings,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Sponsors", href: "/dashboard/sponsors", icon: Users },
  { name: "Social Tracking", href: "/dashboard/social", icon: Share2 },
  { name: "Leads", href: "/dashboard/leads", icon: Target },
  { name: "Reports", href: "/dashboard/reports", icon: BarChart3 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-white/10 bg-black/50 backdrop-blur-xl flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-premium flex items-center justify-center">
            <span className="text-white text-sm">SV</span>
          </div>
          <span>Sponsor<span className="text-primary-500">Vis</span></span>
        </Link>
      </div>

      <div className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4 px-2">
          Organizer Menu
        </div>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-primary-500/10 text-primary-400" 
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-primary-400" : "text-neutral-500")} />
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-3 py-3 rounded-lg glass border-none">
          <div className="w-8 h-8 rounded-full bg-gradient-premium flex items-center justify-center text-white font-bold text-xs">
            AL
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Alex Local</p>
            <p className="text-xs text-neutral-500 truncate">Organizer</p>
          </div>
          <button className="text-neutral-500 hover:text-white transition-colors">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
