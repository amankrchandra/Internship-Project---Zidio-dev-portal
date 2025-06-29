import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Bell, Search, User, LogOut } from "lucide-react";

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5 },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

// Menu items
const menuItems = [
  { icon: Search, label: "Search", path: "/dashboard/search" },
  { icon: Bell, label: "Notifications", path: "/dashboard/notifications" },
  { icon: User, label: "Profile", path: "/dashboard/profile" },
];

const GlowMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-[#1E40AF] text-white px-6 py-4 shadow-md backdrop-blur-sm border-b border-white/10"
      initial="initial"
      whileHover="hover"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Company Title */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide text-white font-sans">
          Zidio Dev Portal
        </h1>

        {/* Nav Items + Logout */}
        <div className="flex items-center gap-6">
          {/* Main nav icons */}
          <ul className="flex gap-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname.startsWith(item.path);

              return (
                <motion.li key={item.label} className="relative">
                  <button onClick={() => navigate(item.path)} className="block">
                    <motion.div
                      className="relative overflow-visible group rounded-xl"
                      style={{ perspective: "600px" }}
                      whileHover="hover"
                      initial="initial"
                    >
                      {/* White Glow */}
                      <motion.div
                        className="absolute inset-0 z-0 pointer-events-none blur-xl"
                        variants={glowVariants}
                        animate={isActive ? "hover" : "initial"}
                        style={{
                          background:
                            "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, transparent 100%)",
                          opacity: isActive ? 1 : 0,
                          borderRadius: "16px",
                        }}
                      />

                      {/* Front Face */}
                      <motion.div
                        className="flex items-center gap-2 px-4 py-2 z-10 relative text-white"
                        variants={itemVariants}
                        transition={{ type: "spring", stiffness: 100 }}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </motion.div>

                      {/* Back Face */}
                      <motion.div
                        className="absolute inset-0 flex items-center gap-2 px-4 py-2 z-10 text-white"
                        variants={backVariants}
                        transition={{ type: "spring", stiffness: 100 }}
                        style={{
                          rotateX: 90,
                          transformStyle: "preserve-3d",
                          transformOrigin: "center top",
                        }}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </motion.div>
                    </motion.div>
                  </button>
                </motion.li>
              );
            })}
          </ul>

          {/* 🚪 Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-red-600 rounded-full transition duration-200 text-sm"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default GlowMenu;
