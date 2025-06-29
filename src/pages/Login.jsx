import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    alert("Login clicked! (Backend will be added later)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E40AF] to-[#60A5FA] text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Zidio</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 bg-transparent border border-white/20 rounded text-white placeholder-gray-300" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 bg-transparent border border-white/20 rounded text-white placeholder-gray-300" required />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 transition py-2 rounded font-semibold">Log In</button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-300">
          Don’t have an account?{" "}
          <Link to="/signup/jobseeker" className="underline hover:text-white font-medium">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
