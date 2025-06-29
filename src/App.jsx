import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public pages
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import JobSeekerSignup from "./pages/JobSeekerSignup";
import RecruiterSignup from "./pages/RecruiterSignup";

// Dashboard layout
import Dashboard from "./pages/Dashboard";

// Dashboard main pages
import DashboardHome from "./pages/dashboard/DashboardHome";
import Jobs from "./pages/dashboard/Jobs";
import AppliedSaved from "./pages/dashboard/AppliedSaved";
import Messages from "./pages/dashboard/Messages";
import Discover from "./pages/dashboard/Discover";
import Search from "./pages/dashboard/Search";
import Notifications from "./pages/dashboard/Notifications";

// Profile section
import Profile from "./pages/dashboard/Profile"; // Layout for tabs
import ProfileDetails from "./pages/dashboard/ProfileDetails"; // Default profile tab
import ResumeSection from "./pages/dashboard/ResumeSection";
import Projects from "./pages/dashboard/Projects";
import Culture from "./pages/dashboard/Culture";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
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

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="recommend" element={<DashboardHome />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="applied" element={<AppliedSaved />} />
          <Route path="messages" element={<Messages />} />
          <Route path="discover" element={<Discover />} />
          <Route path="search" element={<Search />} />
          <Route path="notifications" element={<Notifications />} />

          {/* Profile Section with nested tabs */}
          <Route path="profile" element={<Profile />}>
            <Route index element={<ProfileDetails />} />
            <Route path="resume" element={<ResumeSection />} />
            <Route path="projects" element={<Projects />} />
            <Route path="culture" element={<Culture />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
