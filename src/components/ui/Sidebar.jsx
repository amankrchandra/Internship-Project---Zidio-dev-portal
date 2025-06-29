import {
  Home,
  User,
  Briefcase,
  Folder,
  MessageCircle,
  Search,
} from "lucide-react";
import { NavLink } from "react-router-dom";

// Fallback icon if any import is undefined
const FallbackIcon = (props) => (
  <span style={{ fontSize: props.size || 20 }}>?</span>
);

const navItems = [
  { label: "Home", icon: Home || FallbackIcon, path: "/dashboard/recommend" },
  { label: "Profile", icon: User || FallbackIcon, path: "/dashboard/profile" },
  { label: "Jobs", icon: Briefcase || FallbackIcon, path: "/dashboard/jobs" },
  { label: "Applied", icon: Folder || FallbackIcon, path: "/dashboard/applied" },
  { label: "Messages", icon: MessageCircle || FallbackIcon, path: "/dashboard/messages" },
  { label: "Discover", icon: Search || FallbackIcon, path: "/dashboard/discover" },
];

export default function Sidebar() {
  return (
    <aside className="w-[80px] h-screen fixed top-0 left-0 z-30 bg-white/10 backdrop-blur-xl border-r border-white/20 flex flex-col items-center shadow-lg">
      {/* Company Name */}
      <div className="pt-6 text-center">
        <h1 className="text-[11px] font-bold text-white leading-4">
          Zidio
          <br />
          Dev Portal
        </h1>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-6 mt-10">
        {navItems.map(({ label, icon: Icon, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 px-2 py-2 text-[10px] font-medium transition-all duration-200 ${
                isActive
                  ? "text-yellow-300 bg-white/10 rounded-md shadow-[0_0_10px_#FFD700]"
                  : "text-white hover:text-yellow-300"
              }`
            }
          >
            {Icon ? <Icon size={20} /> : <FallbackIcon size={20} />}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
