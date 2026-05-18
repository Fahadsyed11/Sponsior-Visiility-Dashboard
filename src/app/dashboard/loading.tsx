export default function Loading() {
  return (
    <div className="flex-1 p-8 overflow-hidden animate-pulse">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="h-6 w-48 bg-white/10 rounded mb-2"></div>
          <div className="h-4 w-64 bg-white/5 rounded"></div>
        </div>
        <div className="flex gap-3">
          <div className="h-10 w-32 bg-white/10 rounded-lg"></div>
          <div className="h-10 w-32 bg-primary-500/20 rounded-lg"></div>
        </div>
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass p-6 rounded-2xl border border-white/5">
            <div className="h-4 w-24 bg-white/10 rounded mb-4"></div>
            <div className="flex items-baseline gap-3">
              <div className="h-8 w-20 bg-white/10 rounded"></div>
              <div className="h-4 w-12 bg-white/5 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 glass rounded-2xl border border-white/5 p-6 h-[400px]">
          <div className="h-6 w-48 bg-white/10 rounded mb-6"></div>
          <div className="w-full h-[300px] bg-white/5 rounded-lg"></div>
        </div>
        <div className="glass rounded-2xl border border-white/5 p-6 h-[400px]">
          <div className="h-6 w-32 bg-white/10 rounded mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-white/10 shrink-0"></div>
                <div className="flex-1">
                  <div className="h-4 w-full bg-white/10 rounded mb-2"></div>
                  <div className="h-3 w-16 bg-white/5 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
