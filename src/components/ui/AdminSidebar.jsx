// ✅ AdminSidebar.jsx
// src/components/ui/AdminSidebar.jsx

import { useNavigate, useLocation } from "react-router-dom";
import { BarChart3, Users, Briefcase } from "lucide-react";

const adminLinks = [
  { label: "Dashboard", icon: BarChart3, path: "/admin" },
  { label: "Users", icon: Users, path: "/admin/users" },
  { label: "Jobs", icon: Briefcase, path: "/admin/jobs" },
];

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 h-screen w-[80px] bg-blue-950 border-r border-white/10 z-30 pt-[80px] flex flex-col items-center space-y-8">
      {adminLinks.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`group flex flex-col items-center text-xs text-white transition-all duration-200 ${
              isActive ? "text-white drop-shadow-[0_0_8px_white]" : "opacity-70"
            } hover:scale-110`}
          >
            <Icon className="w-6 h-6 mb-1" />
            <span className="text-[10px]">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
