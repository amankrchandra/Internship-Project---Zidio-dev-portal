import { useState } from "react";

const sampleJobs = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  title: i % 2 === 0 ? "Frontend Developer" : "Backend Developer",
  company: i % 3 === 0 ? "Zidio Tech" : "InnovateX",
  location: i % 2 === 0 ? "Remote" : "Bangalore",
  type: i % 2 === 0 ? "Internship" : "Full-Time",
  description: "Join a fast-paced tech team building modern web apps.",
}));

export default function DashboardHome() {
  const [saved, setSaved] = useState([]);
  const [applied, setApplied] = useState([]);

  const handleSave = (id) => {
    if (!saved.includes(id)) setSaved([...saved, id]);
  };

  const handleApply = (id) => {
    if (!applied.includes(id)) setApplied([...applied, id]);
  };

  return (
    <div className="space-y-8 pt-20"> {/* ✅ This line fixed the hidden content issue */}
      
      {/* 👤 Profile Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md text-white">
        <img
          src="/PROFILE_PIC_GHIBLI.jpg"  // ✅ Relative to public folder"
          alt="User Avatar"
          className="w-24 h-24 rounded-full object-cover border-4 border-white/30"
        />
        <div>
          <h2 className="text-2xl font-bold">Aman Kumar Chandra</h2>
          <p className="text-sm text-gray-300 mt-1">Full Stack Developer</p>
          <p className="text-sm text-gray-400 mt-2">
            Passionate about building modern web platforms using React, Spring Boot, and cutting-edge UI.
          </p>
          <p className="text-sm mt-2">
            📍 Based in: <span className="text-blue-300">New Delhi, India</span>
          </p>
          <p className="text-sm mt-2">
            💡 Skills: <span className="text-blue-200">Java ,React, Tailwind CSS, Spring Boot, MySQL, JWT , Node.js , Express.js</span>
          </p>
        </div>
      </div>

      {/* 💼 Job Listings */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white">Recommended for You</h2>

        {sampleJobs.map((job) => (
          <div
            key={job.id}
            className="w-full bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-200">{job.company}</p>
              <p className="text-xs text-gray-300">{job.location}</p>
              <span className="text-xs inline-block bg-blue-500/30 px-2 py-1 rounded mt-2">
                {job.type}
              </span>
              <p className="text-sm mt-3">{job.description}</p>
            </div>

            <div className="flex gap-3 self-end md:self-center">
              <button
                onClick={() => handleSave(job.id)}
                disabled={saved.includes(job.id)}
                className={`px-4 py-2 rounded-md text-sm font-semibold ${
                  saved.includes(job.id)
                    ? "bg-yellow-400 text-black"
                    : "bg-yellow-500/80 hover:bg-yellow-400"
                }`}
              >
                {saved.includes(job.id) ? "Saved" : "Save"}
              </button>
              <button
                onClick={() => handleApply(job.id)}
                disabled={applied.includes(job.id)}
                className={`px-4 py-2 rounded-md text-sm font-semibold ${
                  applied.includes(job.id)
                    ? "bg-green-400 text-black"
                    : "bg-green-500/80 hover:bg-green-400"
                }`}
              >
                {applied.includes(job.id) ? "Applied" : "Apply"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
