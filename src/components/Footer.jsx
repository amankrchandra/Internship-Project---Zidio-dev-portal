import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* 1. Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            Zidio Development
          </h2>
          <p className="text-sm text-gray-400">
            Powering job seekers and recruiters with a simple, scalable hiring
            platform.
          </p>
        </div>

        {/* 2. Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Terms & Conditions</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Privacy & Cookies</a>
            </li>
          </ul>
        </div>

        {/* 3. Contact Us with Toggle Form */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2 mb-4">
            <li>
              Email:{" "}
              <a
                href="mailto:Amankrchandra@proton.me"
                className="hover:text-white"
              >
                Amankrchandra@proton.me
              </a>
            </li>
           
            <li>Location: New Delhi, India</li>
          </ul>
          <button
            onClick={() => setShowForm(!showForm)}
            className="text-blue-400 text-sm underline hover:text-blue-300 transition"
          >
            {showForm ? "Close Form" : "Send a Message"}
          </button>

          {showForm && (
            <div className="space-y-2 mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-1.5 rounded bg-gray-800 text-white border border-gray-600 text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-1.5 rounded bg-gray-800 text-white border border-gray-600 text-sm"
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-3 py-1.5 rounded bg-gray-800 text-white border border-gray-600 text-sm"
                rows="3"
              ></textarea>
              <button
                type="submit"
                disabled
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded text-sm font-medium transition"
                title="Functionality coming soon"
              >
                Send
              </button>
            </div>
          )}
        </div>

        {/* 4. Developer Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Developer</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                className="hover:text-white"
              >
                View My Resume
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition duration-300">
              <FaLinkedin className="text-xl hover:scale-110 transition-transform" />
              <a
                href="https://www.linkedin.com/in/amankrchandra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition duration-300">
              <FaGithub className="text-xl hover:scale-110 transition-transform" />
              <a
                href="https://github.com/amankrchandra"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition duration-300">
              <FaTwitter className="text-xl hover:scale-110 transition-transform" />
              <a
                href="https://x.com/Amankrchandra"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter / X
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Zidio Dev Portal. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
