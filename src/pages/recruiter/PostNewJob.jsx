import { useState } from "react";

export default function PostNewJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "Full-Time",
    mode: "Onsite",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Submitted:", formData);

    // TODO: connect to backend API here
    alert("✅ Job posted successfully!");
    setFormData({
      title: "",
      company: "",
      location: "",
      salary: "",
      type: "Full-Time",
      mode: "Onsite",
      description: "",
    });
  };

  return (
   <div className="max-w-3xl mx-auto bg-white/5 p-6 rounded-2xl shadow-xl backdrop-blur-md mt-24">

      <h2 className="text-2xl font-bold mb-4 text-white">📝 Post a New Job</h2>

      <form onSubmit={handleSubmit} className="space-y-5 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            className="p-3 rounded-xl bg-white/10 placeholder-white/70 focus:outline-none"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="p-3 rounded-xl bg-white/10 placeholder-white/70 focus:outline-none"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="p-3 rounded-xl bg-white/10 placeholder-white/70 focus:outline-none"
            required
          />
          <input
            type="text"
            name="salary"
            placeholder="Salary (e.g. ₹40,000/month)"
            value={formData.salary}
            onChange={handleChange}
            className="p-3 rounded-xl bg-white/10 placeholder-white/70 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="p-3 rounded-xl bg-white/10 text-white"
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Internship">Internship</option>
            <option value="Part-Time">Part-Time</option>
          </select>

          <select
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            className="p-3 rounded-xl bg-white/10 text-white"
          >
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <textarea
          name="description"
          rows="5"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-white/10 placeholder-white/70 focus:outline-none"
          required
        />

        <button
          type="submit"
          className="bg-white text-blue-900 px-6 py-3 rounded-xl hover:bg-white/90 transition-all font-semibold"
        >
          🚀 Post Job
        </button>
      </form>
      <div className="mt-6 text-center">
  <a
    href="/recruiter/jobs"
    className="inline-block text-sm px-5 py-2 rounded-xl bg-white text-blue-900 hover:bg-white/90 transition"
  >
    📋 View Posted Jobs
  </a>
</div>

    </div>
  );
}
