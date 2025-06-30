// src/pages/recruiter/RecruiterDashboard.jsx
import RecruiterGlowMenu from "../../components/ui/RecruiterGlowMenu";
import RecruiterSidebar from "../../components/ui/RecruiterSidebar";
import { Outlet } from "react-router-dom";

const RecruiterDashboard = () => {
  return (
    <div className="min-h-screen flex text-white">
      {/* Sidebar */}
      <RecruiterSidebar />

      {/* Main Area */}
      <div className="pl-[80px] flex flex-col min-h-screen flex-1 bg-gradient-to-br from-[#1E40AF] to-[#60A5FA]">
        {/* Navbar */}
        <div className="z-50 relative">
          <RecruiterGlowMenu />
        </div>

        {/* Page Content */}
        <main className="flex-1 p-6 mt-[64px] backdrop-blur-md">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
