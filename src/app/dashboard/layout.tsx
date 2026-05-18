import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-black overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Ambient background effect for dashboard */}
        <div className="absolute top-0 left-1/2 w-full h-[500px] bg-primary-900/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-breathe" />
        {children}
      </div>
    </div>
  );
}
