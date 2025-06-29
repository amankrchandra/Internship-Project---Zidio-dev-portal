import { useState } from "react";

export default function Search() {
  const [filters, setFilters] = useState({
    role: "",
    location: "",
    type: "",
    mode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto pt-16 text-white">
      <h2 className="text-2xl font-bold mb-6">🔍 Search for Jobs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/10 p-6 rounded-xl backdrop-blur-lg shadow-md">
        <label className="block">
          Role:
          <input
            type="text"
            name="role"
            value={filters.role}
            onChange={handleChange}
            placeholder="e.g. Frontend Developer"
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-white"
          />
        </label>

        <label className="block">
          Location:
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleChange}
            placeholder="e.g. Bangalore"
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-white"
          />
        </label>

        <label className="block">
          Type:
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-white"
          >
            <option value="">Select</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Internship">Internship</option>
          </select>
        </label>

        <label className="block">
          Mode:
          <select
            name="mode"
            value={filters.mode}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-white"
          >
            <option value="">Select</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
        </label>
      </div>

      <div className="mt-6 text-sm text-gray-300">
        <p><strong>Search Filters Preview:</strong></p>
        <ul className="list-disc ml-6">
          {Object.entries(filters).map(([key, val]) =>
            val ? (
              <li key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}: {val}
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
}
