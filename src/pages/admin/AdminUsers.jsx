// src/pages/admin/AdminUsers.jsx
import { useState } from "react";

const jobSeekers = Array.from({ length: 101 }, (_, i) => ({
  id: i + 1,
  name: `Job Seeker ${i + 1}`,
  email: `jobseeker${i + 1}@example.com`,
  location: "India",
  role: "Job Seeker",
}));

const recruiters = Array.from({ length: 41 }, (_, i) => ({
  id: i + 1,
  name: `Recruiter ${i + 1}`,
  email: `recruiter${i + 1}@example.com`,
  location: "India",
  role: "Recruiter",
}));

export default function AdminUsers() {
  const [activeTab, setActiveTab] = useState("seekers");

  const currentData = activeTab === "seekers" ? jobSeekers : recruiters;

  return (
    <div className="px-4 md:px-8 mt-24 text-white">
      <h2 className="text-3xl font-bold mb-6">👥 Users</h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("seekers")}
          className={`px-4 py-2 rounded-md ${
            activeTab === "seekers"
              ? "bg-white text-blue-900 font-semibold"
              : "bg-white/10 text-white"
          }`}
        >
          Job Seekers ({jobSeekers.length})
        </button>
        <button
          onClick={() => setActiveTab("recruiters")}
          className={`px-4 py-2 rounded-md ${
            activeTab === "recruiters"
              ? "bg-white text-blue-900 font-semibold"
              : "bg-white/10 text-white"
          }`}
        >
          Recruiters ({recruiters.length})
        </button>
      </div>

      {/* Table Header */}
      <div className="overflow-x-auto rounded-lg border border-white/10">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-white/10 text-white">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 bg-white/5">
            {currentData.map((user) => (
              <tr key={user.id} className="hover:bg-white/10">
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.location}</td>
                <td className="px-4 py-3">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
