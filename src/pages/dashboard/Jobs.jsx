import { useState } from "react";

const allJobs = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  title: i % 2 === 0 ? "Frontend Developer" : "Backend Developer",
  company: i % 3 === 0 ? "Zidio Tech" : "InnovateX",
  location: i % 2 === 0 ? "Remote" : "Bangalore",
  type: i % 2 === 0 ? "Internship" : "Full-Time",
  mode: i % 2 === 0 ? "Remote" : "Onsite",
  description: "Join our cutting-edge team working on scalable web applications.",
}));

export default function Jobs() {
  const [filters, setFilters] = useState({
    role: "",
    location: "",
    type: "",
    mode: "",
  });

  const [saved, setSaved] = useState([]);
  const [applied, setApplied] = useState([]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (id) => {
    if (!saved.includes(id)) setSaved([...saved, id]);
  };

  const handleApply = (id) => {
    if (!applied.includes(id)) setApplied([...applied, id]);
  };

  const filteredJobs = allJobs.filter((job) => {
    const roleMatch = filters.role === "" || job.title.toLowerCase().includes(filters.role.toLowerCase());
    const locationMatch = filters.location === "" || job.location.toLowerCase().includes(filters.location.toLowerCase());
    const typeMatch = filters.type === "" || job.type === filters.type;
    const modeMatch = filters.mode === "" || job.mode === filters.mode;
    return roleMatch && locationMatch && typeMatch && modeMatch;
  });

  return (
    <div className="max-w-6xl mx-auto text-white pt-20 space-y-8">
      <h2 className="text-2xl font-bold mb-2">🔍 Search for Jobs</h2>
      <p className="text-sm text-gray-300 mb-4">Browse opportunities that match your skills</p>

      {/* Search Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 p-4 rounded-xl backdrop-blur shadow-lg">
        <input
          name="role"
          value={filters.role}
          onChange={handleFilterChange}
          placeholder="Which role are you looking for?"
          className="p-2 rounded bg-white/10 border border-white/20 text-black"
        />
        <input
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          placeholder="Location (e.g. Remote, Bangalore)"
          className="p-2 rounded bg-white/10 border border-white/20 text-black"
        />
        <select
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          className="p-2 rounded bg-white/10 border border-white/20 text-black"
        >
          <option value="">Job Type</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Internship">Internship</option>
        </select>
        <select
          name="mode"
          value={filters.mode}
          onChange={handleFilterChange}
          className="p-2 rounded bg-white/10 border border-white/20 text-black"
        >
          <option value="">Work Mode</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
        </select>
      </div>

      {/* Job Cards */}
      <div className="space-y-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-md flex justify-between items-start"
          >
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-200">{job.company}</p>
              <p className="text-sm text-gray-400">{job.location}</p>
              <div className="text-sm mt-2 space-x-2">
                <span className="bg-blue-600/30 px-3 py-1 rounded-full">{job.type}</span>
                <span className="bg-purple-600/30 px-3 py-1 rounded-full">{job.mode}</span>
              </div>
              <p className="mt-3 text-sm text-gray-300">{job.description}</p>
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleSave(job.id)}
                disabled={saved.includes(job.id)}
                className={`px-4 py-1 rounded-md text-xs font-semibold ${
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
                className={`px-4 py-1 rounded-md text-xs font-semibold ${
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
