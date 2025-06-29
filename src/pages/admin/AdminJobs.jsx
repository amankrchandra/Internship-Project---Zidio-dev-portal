// src/pages/admin/AdminJobs.jsx
import { useState } from "react";

const allJobs = Array.from({ length: 60 }, (_, i) => ({
  id: i + 1,
  title: `Job Title ${i + 1}`,
  company: `Company ${Math.floor(i / 5) + 1}`,
  location: ["Delhi", "Bangalore", "Remote", "Mumbai", "Pune"][i % 5],
  type: i % 2 === 0 ? "Full-Time" : "Internship",
  postedOn: `2025-06-${(i % 28 + 1).toString().padStart(2, "0")}`,
}));

export default function AdminJobs() {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  const filteredJobs =
    filter === "All" ? allJobs : allJobs.filter((job) => job.type === filter);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  return (
    <div className="px-4 md:px-8 mt-24 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">💼 All Job Postings</h2>
        <div>
          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-blue-900 text-white px-3 py-1 rounded-md border border-white/20"
          >
            <option value="All">All</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-white/10">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-white/10">
            <tr>
              <th className="px-4 py-3">Job Title</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Posted On</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 bg-white/5">
            {paginatedJobs.map((job) => (
              <tr key={job.id} className="hover:bg-white/10">
                <td className="px-4 py-3">{job.title}</td>
                <td className="px-4 py-3">{job.company}</td>
                <td className="px-4 py-3">{job.location}</td>
                <td className="px-4 py-3">{job.type}</td>
                <td className="px-4 py-3">{job.postedOn}</td>
                <td className="px-4 py-3 space-x-2">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs">
                    View
                  </button>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded text-xs">
                    Edit
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
              currentPage === index + 1
                ? "bg-white text-blue-900"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
