"use client";

import Header from "@/components/dashboard/Header";
import { Instagram, Linkedin, Twitter, MessageCircle, Heart, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const socialPosts = [
  {
    id: 1,
    platform: "linkedin",
    sponsor: "TechCorp",
    content: "Excited to partner with the upcoming TechSummit 2026! We'll be showcasing our latest AI innovations at Booth A1. Drop by to say hi! 🚀 #TechSummit #AI #Innovation",
    date: "2 hours ago",
    metrics: { likes: 1245, comments: 84, shares: 215, reach: "45K" },
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
  },
  {
    id: 2,
    platform: "instagram",
    sponsor: "CloudScale",
    content: "The main stage is set! Proud to be the Platinum sponsor for this year's developer conference. Swipe to see what we're building. ☁️✨",
    date: "5 hours ago",
    metrics: { likes: 3840, comments: 142, shares: 89, reach: "120K" },
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
  },
  {
    id: 3,
    platform: "twitter",
    sponsor: "CyberShield",
    content: "Security is non-negotiable. Catch our keynote tomorrow at 10 AM on the main stage to learn about zero-trust architectures. 🛡️",
    date: "1 day ago",
    metrics: { likes: 856, comments: 45, shares: 312, reach: "85K" },
  }
];

const platformIcons = {
  linkedin: <Linkedin className="w-5 h-5 text-[#0A66C2]" />,
  instagram: <Instagram className="w-5 h-5 text-[#E4405F]" />,
  twitter: <Twitter className="w-5 h-5 text-[#1DA1F2]" />,
};

export default function SocialTrackingPage() {
  return (
    <>
      <Header title="Social Media Tracking" />
      <main className="flex-1 overflow-y-auto p-8">
        
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass p-6 rounded-2xl border border-white/5">
            <p className="text-sm text-neutral-400 mb-1">Total Social Reach</p>
            <h3 className="text-2xl font-bold">1.2M</h3>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/5">
            <p className="text-sm text-neutral-400 mb-1">Total Engagement</p>
            <h3 className="text-2xl font-bold">148K</h3>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/5">
            <p className="text-sm text-neutral-400 mb-1">Posts Tracked</p>
            <h3 className="text-2xl font-bold">84</h3>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/5">
            <p className="text-sm text-neutral-400 mb-1">Avg. ER</p>
            <h3 className="text-2xl font-bold text-primary-400">4.2%</h3>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-6">Recent Sponsor Posts</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {socialPosts.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl border border-white/5 overflow-hidden flex flex-col"
            >
              <div className="p-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs">
                    {post.sponsor.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-white">{post.sponsor}</p>
                    <p className="text-xs text-neutral-500">{post.date}</p>
                  </div>
                </div>
                {platformIcons[post.platform as keyof typeof platformIcons]}
              </div>
              
              {post.image && (
                <div className="h-48 w-full overflow-hidden">
                  <img src={post.image} alt="Post media" className="w-full h-full object-cover" />
                </div>
              )}
              
              <div className="p-4 flex-1">
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">{post.content}</p>
              </div>

              <div className="p-4 bg-black/40 border-t border-white/5 mt-auto">
                <div className="flex items-center justify-between text-sm text-neutral-400 mb-2">
                  <span className="font-medium text-white text-xs px-2 py-1 bg-white/10 rounded-md">Reach: {post.metrics.reach}</span>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5"><Heart className="w-4 h-4" /> {post.metrics.likes}</div>
                  <div className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" /> {post.metrics.comments}</div>
                  <div className="flex items-center gap-1.5"><Share2 className="w-4 h-4" /> {post.metrics.shares}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
