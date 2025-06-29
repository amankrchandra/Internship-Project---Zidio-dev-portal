// src/components/ui/RecruiterSidebar.jsx
import { useNavigate, useLocation } from "react-router-dom";
import {
  PlusCircle,
  Briefcase,
  Users,
  Building2,
} from "lucide-react";

const recruiterLinks = [
  {
    label: "Post Job",
    icon: PlusCircle,
    path: "/recruiter/post-job",
  },
  {
    label: "Posted Jobs",
    icon: Briefcase,
    path: "/recruiter/jobs",
  },
  {
    label: "Applications",
    icon: Users,
    path: "/recruiter/applications",
  },
  {
    label: "Company Profile",
    icon: Building2,
    path: "/recruiter/profile",
  },
];

export default function RecruiterSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 h-screen w-[80px] bg-blue-950 border-r border-white/10 py-6 flex flex-col items-center z-50">
      <div className="flex flex-col gap-8">
        {recruiterLinks.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(item.path);

          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`group flex flex-col items-center text-xs text-white transition-all duration-200 ${
                isActive
                  ? "text-white drop-shadow-[0_0_8px_white]"
                  : "opacity-70"
              } hover:scale-110`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-[10px] text-center">
                {item.label.split(" ")[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
