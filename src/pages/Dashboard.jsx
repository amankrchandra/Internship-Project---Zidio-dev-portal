import GlowMenu from "../components/ui/GlowMenu";
import Sidebar from "../components/ui/Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex text-white">
      {/* Sidebar (fixed left) */}
      <Sidebar />

      {/* Main Area */}
      <div className="pl-[80px] flex flex-col min-h-screen flex-1 bg-gradient-to-br from-[#1E40AF] to-[#60A5FA]">
        <GlowMenu />
        <main className="flex-1 p-6 backdrop-blur-md">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
