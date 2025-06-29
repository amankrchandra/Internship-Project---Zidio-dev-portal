import { useState } from "react";

const sampleAppliedJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Zidio Tech",
    location: "Remote",
    status: "Pending",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "InnovateX",
    location: "Bangalore",
    status: "Under Review",
  },
  {
    id: 3,
    title: "Full Stack Intern",
    company: "DevLabs",
    location: "Remote",
    status: "Accepted",
  },
];

const sampleSavedJobs = [
  {
    id: 4,
    title: "Data Scientist",
    company: "Zidio Tech",
    location: "Delhi",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "InnovateX",
    location: "Remote",
  },
];

export default function AppliedSaved() {
  return (
    <div className="max-w-5xl mx-auto text-white pt-20 space-y-10">
      {/* Applied Jobs Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">✅ Applied Jobs</h2>
        <div className="space-y-4">
          {sampleAppliedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-5 shadow flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-300">{job.company} – {job.location}</p>
              </div>
              <div className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-400">
                {job.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Saved Jobs Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">💾 Saved for Later</h2>
        <div className="space-y-4">
          {sampleSavedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-5 shadow flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-300">{job.company} – {job.location}</p>
              </div>
              <button className="px-3 py-1 rounded-md bg-green-500/80 text-sm font-semibold hover:bg-green-400 text-black">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
