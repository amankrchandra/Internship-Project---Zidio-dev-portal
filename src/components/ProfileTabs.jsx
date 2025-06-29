import { NavLink, useLocation } from "react-router-dom";

const tabs = [
  { label: "Profile", path: "/dashboard/profile" },
  { label: "Resume/CV", path: "/dashboard/profile/resume" },
  { label: "Projects", path: "/dashboard/profile/projects" },
  { label: "Culture", path: "/dashboard/profile/culture" },
];

export default function ProfileTabs() {
  const location = useLocation();

  return (
    <div className="flex gap-6 text-sm border-b border-white/20 pb-2 mt-6">
      {tabs.map(({ label, path }) => {
        const isActive =
          path === "/dashboard/profile"
            ? location.pathname === "/dashboard/profile"
            : location.pathname.startsWith(path);

        return (
          <NavLink
            key={path}
            to={path}
            className={`pb-1 transition ${
              isActive
                ? "text-yellow-300 border-b-2 border-yellow-300"
                : "text-gray-400 hover:text-yellow-300"
            }`}
          >
            {label}
          </NavLink>
        );
      })}
    </div>
  );
}
