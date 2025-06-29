// src/pages/AdminLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ⚠️ Dummy Login Check — Replace with API call later
    if (email === "admin@zidio.com" && password === "admin123") {
      navigate("/admin");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E3A8A] to-[#60A5FA] text-white">
      <form
        onSubmit={handleLogin}
        className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-md w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">🔐 Admin Login</h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-white/20 focus:outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-white/20 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 transition p-3 rounded-md font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
