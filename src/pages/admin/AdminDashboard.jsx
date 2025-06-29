// src/pages/admin/AdminDashboard.jsx
import AdminGlowMenu from "../../components/ui/AdminGlowMenu";
import AdminSidebar from "../../components/ui/AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex text-white">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Area */}
      <div className="pl-[80px] flex flex-col min-h-screen flex-1 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
        <AdminGlowMenu />
        <main className="flex-1 p-6 mt-20 backdrop-blur-md">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
