import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // ✅ for routing

function Header() {
  const [showSignupDropdown, setShowSignupDropdown] = useState(false);
  const signupRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (signupRef.current && !signupRef.current.contains(event.target)) {
        setShowSignupDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSignupDropdown = () => {
    setShowSignupDropdown((prev) => !prev);
  };

  return (
    <header className="bg-blue-900 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold tracking-wide text-white">Zidio Dev Portal</h1>
          <nav className="space-x-4 text-sm">
            <a href="#" className="hover:text-blue-300">For Job Seekers</a>
            <a href="#" className="hover:text-blue-300">For Companies</a>
          </nav>
        </div>

        {/* Right Side */}
        <div className="relative flex items-center space-x-4">
          {/* Login Button with Link */}
          <Link to="/login">
            <button className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold transition">
              Login
            </button>
          </Link>

          {/* Signup Dropdown */}
          <div className="relative" ref={signupRef}>
            <button
              onClick={toggleSignupDropdown}
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-lg text-sm font-semibold transition"
            >
              Signup
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg z-50 transform transition-all duration-200 origin-top ${
                showSignupDropdown
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <Link
                to="/signup/jobseeker"
                className="block px-5 py-3 hover:bg-blue-100 font-medium border-b"
              >
                I am looking for a job
              </Link>
              <Link
                to="/signup/recruiter"
                className="block px-5 py-3 hover:bg-blue-100 font-medium"
              >
                I am looking for candidates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
