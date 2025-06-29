// src/components/ui/AdminGlowMenu.jsx
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function AdminGlowMenu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // optional
    navigate("/admin-login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-blue-950 border-b border-white/10 px-6 py-4 flex items-center justify-between">
      {/* Left: Admin Dashboard Title */}
      <h1 className="text-xl md:text-2xl font-bold tracking-wide text-white font-sans">
        Admin Dashboard
      </h1>

      {/* Right: Welcome + Logout */}
      <div className="flex items-center gap-6">
        <span className="text-white text-sm font-medium hidden sm:inline">
          Welcome, Admin! 😎
        </span>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-all duration-200"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </nav>
  );
}
