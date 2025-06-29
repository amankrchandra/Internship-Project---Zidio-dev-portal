import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// Public pages
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import JobSeekerSignup from "./pages/JobSeekerSignup";
import RecruiterSignup from "./pages/RecruiterSignup";

// Job Seeker Dashboard
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Jobs from "./pages/dashboard/Jobs";
import AppliedSaved from "./pages/dashboard/AppliedSaved";
import Messages from "./pages/dashboard/Messages";
import Discover from "./pages/dashboard/Discover";
import Search from "./pages/dashboard/Search";
import Notifications from "./pages/dashboard/Notifications";
import Profile from "./pages/dashboard/Profile";
import ProfileDetails from "./pages/dashboard/ProfileDetails";
import ResumeSection from "./pages/dashboard/ResumeSection";
import Projects from "./pages/dashboard/Projects";
import Culture from "./pages/dashboard/Culture";

// Recruiter Dashboard
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import PostedJobs from "./pages/recruiter/PostedJobs";
import PostNewJob from "./pages/recruiter/PostNewJob";
import Applications from "./pages/recruiter/Applications";
import CompanyProfile from "./pages/recruiter/CompanyProfile";
import EditJob from "./pages/recruiter/EditJob";

// Admin Dashboard
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminStats from "./pages/admin/AdminStats";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminJobs from "./pages/admin/AdminJobs";
import AdminLogin from "./pages/AdminLogin";


function App() {
  return (
    <Router>
      <Routes>
        {/* 🌐 Public Pages */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup/jobseeker"
          element={
            <>
              <Header />
              <JobSeekerSignup />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup/recruiter"
          element={
            <>
              <Header />
              <RecruiterSignup />
              <Footer />
            </>
          }
        />

        {/* 🧑‍💼 Job Seeker Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="recommend" element={<DashboardHome />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="applied" element={<AppliedSaved />} />
          <Route path="messages" element={<Messages />} />
          <Route path="discover" element={<Discover />} />
          <Route path="search" element={<Search />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<ProfileDetails />} />
            <Route path="resume" element={<ResumeSection />} />
            <Route path="projects" element={<Projects />} />
            <Route path="culture" element={<Culture />} />
          </Route>
        </Route>

        {/* 🏢 Recruiter Dashboard */}
        <Route path="/recruiter" element={<RecruiterDashboard />}>
          <Route path="jobs" element={<PostedJobs />} />
          <Route path="post-job" element={<PostNewJob />} />
          <Route path="applications" element={<Applications />} />
          <Route path="profile" element={<CompanyProfile />} />
          <Route path="edit-job/:id" element={<EditJob />} />
        </Route>
         <Route path="/admin/login" element={<AdminLogin />} />

        {/* 👨‍⚖️ Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<AdminStats />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="jobs" element={<AdminJobs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
