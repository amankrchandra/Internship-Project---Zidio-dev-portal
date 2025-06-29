import { Outlet } from "react-router-dom";
import ProfileTabs from "../../components/ProfileTabs";

export default function Profile() {
  return (
    <div className="max-w-5xl mx-auto pt-20 px-4 text-white">
      <ProfileTabs />
      <Outlet />
    </div>
  );
}
