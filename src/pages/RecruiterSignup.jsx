import { Link } from "react-router-dom";

const RecruiterSignup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20">
        <h2 className="text-2xl font-bold mb-6 text-center">Join as a Recruiter</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-2 bg-transparent border border-white/20 rounded text-white placeholder-gray-300" />
          <input type="email" placeholder="Company Email" className="w-full p-2 bg-transparent border border-white/20 rounded text-white placeholder-gray-300" />
          <input type="password" placeholder="Password" className="w-full p-2 bg-transparent border border-white/20 rounded text-white placeholder-gray-300" />
          <input type="text" placeholder="Company Name" className="w-full p-2 bg-transparent border border-white/20 rounded text-white placeholder-gray-300" />
          <input type="text" placeholder="Company Website (optional)" className="w-full p-2 bg-transparent border border-white/20 rounded text-white placeholder-gray-300" />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 transition py-2 rounded font-semibold">Sign Up</button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="underline hover:text-white font-medium">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RecruiterSignup;
