// src/pages/admin/AdminDashboard.jsx
import AdminGlowMenu from "../../components/ui/AdminGlowMenu";
import AdminSidebar from "../../components/ui/AdminSidebar";
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex text-white">
      {/* Sidebar (left) */}
      <AdminSidebar />

      {/* Main content area */}
      <div className="pl-[80px] flex-1 flex flex-col bg-gradient-to-br from-[#1E3A8A] to-[#60A5FA] relative">
        {/* Ensure navbar stays above */}
        <div className="z-50 relative">
          <AdminGlowMenu />
        </div>

        <main className="flex-1 p-6 mt-[64px] backdrop-blur-md">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
