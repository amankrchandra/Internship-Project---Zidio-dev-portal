// src/pages/recruiter/PostedJobs.jsx
import { useNavigate } from "react-router-dom";

const mockPostedJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Bangalore, India",
    type: "Full-Time",
    mode: "Remote",
    salary: "₹60,000/month",
  },
  {
    id: 2,
    title: "Backend Developer Intern",
    location: "Pune, India",
    type: "Internship",
    mode: "Onsite",
    salary: "₹20,000/month",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Remote",
    type: "Part-Time",
    mode: "Remote",
    salary: "₹30,000/month",
  },
  {
    id: 4,
    title: "Data Analyst",
    location: "Delhi",
    type: "Full-Time",
    mode: "Hybrid",
    salary: "₹55,000/month",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-Time",
    mode: "Remote",
    salary: "₹75,000/month",
  },
];

export default function PostedJobs() {
  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-8 mt-24">
      {/* Title Row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">📋 Posted Jobs</h2>
        <button
          onClick={() => navigate("/recruiter/post-job")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm md:text-base transition shadow-lg"
        >
          ➕ Post New Job
        </button>
      </div>

      {/* Job Cards */}
      <div className="space-y-6">
        {mockPostedJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-lg text-white border border-white/10 hover:shadow-2xl transition-all"
          >
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-sm text-white/80">📍 {job.location}</p>
                <p className="text-sm text-white/70">
                  💼 {job.type} | {job.mode}
                </p>
                <p className="text-sm text-white/70">💰 {job.salary}</p>
              </div>

              <div className="flex flex-col items-end gap-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/recruiter/edit-job/${job.id}`)}
                    className="px-4 py-1 rounded-md bg-blue-600 hover:bg-blue-700 transition text-sm"
                  >
                    Edit
                  </button>
                  <button className="px-4 py-1 rounded-md bg-red-600 hover:bg-red-700 transition text-sm">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
