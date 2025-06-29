import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { PlusCircle, Users, Building2, Briefcase } from "lucide-react";

const menuItems = [
  { icon: Briefcase, label: "Posted Jobs", path: "/recruiter/jobs" },
  { icon: PlusCircle, label: "Post Job", path: "/recruiter/post-job" },
  { icon: Users, label: "Applications", path: "/recruiter/applications" },
  { icon: Building2, label: "Company", path: "/recruiter/profile" },
];

const RecruiterGlowMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-[#1E40AF] text-white px-6 py-4 shadow-md backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide text-white font-sans">
          Zidio Dev Portal (Recruiter)
        </h1>

        <ul className="flex gap-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.startsWith(item.path);

            return (
              <motion.li key={item.label} className="relative">
                <button onClick={() => navigate(item.path)} className="block">
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                      isActive ? "bg-white text-blue-900 shadow-lg" : "hover:bg-white/10"
                    } transition`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </div>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
};

export default RecruiterGlowMenu;
