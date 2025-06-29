import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditJob() {
  const { id } = useParams();

  const [jobData, setJobData] = useState({
    title: "",
    location: "",
    type: "",
    mode: "",
    salary: "",
  });

  useEffect(() => {
    const job = mockJobs.find((j) => j.id === parseInt(id));
    if (job) setJobData(job);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("✅ Job updated (mock only)");
  };

  return (
    <div className="min-h-screen mt-24 px-4 md:px-10 bg-gradient-to-br from-[#1E40AF] to-[#60A5FA] text-white py-10">
      <h2 className="text-3xl font-bold mb-6">✏️ Edit Job</h2>

      <form
        onSubmit={handleUpdate}
        className="bg-white/5 p-6 rounded-xl border border-white/20 max-w-2xl backdrop-blur-lg shadow-lg"
      >
        <div>
          <label className="block text-sm mb-1 text-white/80">Job Title</label>
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            className="bg-white/10 text-white placeholder:text-white/60 p-2 rounded-md w-full border border-white/20 focus:outline-none"
            placeholder="Frontend Developer"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm mb-1 text-white/80">Location</label>
          <input
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            className="bg-white/10 text-white placeholder:text-white/60 p-2 rounded-md w-full border border-white/20 focus:outline-none"
            placeholder="Remote"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm mb-1 text-white/80">Type</label>
            <input
              type="text"
              name="type"
              value={jobData.type}
              onChange={handleChange}
              className="bg-white/10 text-white placeholder:text-white/60 p-2 rounded-md w-full border border-white/20 focus:outline-none"
              placeholder="Full-Time"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-white/80">Mode</label>
            <input
              type="text"
              name="mode"
              value={jobData.mode}
              onChange={handleChange}
              className="bg-white/10 text-white placeholder:text-white/60 p-2 rounded-md w-full border border-white/20 focus:outline-none"
              placeholder="Onsite"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm mb-1 text-white/80">Salary</label>
          <input
            type="text"
            name="salary"
            value={jobData.salary}
            onChange={handleChange}
            className="bg-white/10 text-white placeholder:text-white/60 p-2 rounded-md w-full border border-white/20 focus:outline-none"
            placeholder="₹60,000/month"
          />
        </div>

        <button
          type="submit"
          className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold"
        >
          ✅ Update Job
        </button>
      </form>
    </div>
  );
}

const mockJobs = [
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
];
