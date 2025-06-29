import { useState } from "react";

export default function Culture() {
  const [culture, setCulture] = useState({
    teamSize: "",
    environment: "",
    leadership: "",
    nextJobGoals: "",
    communicationStyle: "",
    flexibility: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCulture((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto text-white space-y-10 pt-10">
      <h2 className="text-2xl font-bold mb-6">🌱 Culture Fit</h2>

      <div className="bg-white/10 p-6 rounded-xl space-y-6 backdrop-blur-lg shadow-md">
        {/* Team size */}
        <label className="block">
          Preferred Team Size:
          <select
            name="teamSize"
            value={culture.teamSize}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-white"
          >
            <option value="">-- Select --</option>
            <option value="Solo / Independent">Solo / Independent</option>
            <option value="Small Team (2–5)">Small Team (2–5)</option>
            <option value="Medium Team (6–15)">Medium Team (6–15)</option>
            <option value="Large Team (16+)">Large Team (16+)</option>
          </select>
        </label>

        {/* Work environment */}
        <label className="block">
          Preferred Work Environment:
          <select
            name="environment"
            value={culture.environment}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-white"
          >
            <option value="">-- Select --</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="On-site">On-site</option>
          </select>
        </label>

        {/* Leadership style */}
        <label className="block">
          Preferred Leadership Style:
          <select
            name="leadership"
            value={culture.leadership}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-white"
          >
            <option value="">-- Select --</option>
            <option value="Collaborative">Collaborative</option>
            <option value="Hands-off">Hands-off</option>
            <option value="Structured">Structured</option>
            <option value="Mentorship-oriented">Mentorship-oriented</option>
          </select>
        </label>

        {/* Goals for next job */}
        <label className="block">
          What are you looking for in your next job?
          <textarea
            name="nextJobGoals"
            value={culture.nextJobGoals}
            onChange={handleChange}
            placeholder="Share your expectations, goals, and what motivates you..."
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-white h-24"
          />
        </label>

        {/* Communication style */}
        <label className="block">
          Preferred Communication Style:
          <select
            name="communicationStyle"
            value={culture.communicationStyle}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-white"
          >
            <option value="">-- Select --</option>
            <option value="Frequent & Transparent">
              Frequent & Transparent
            </option>
            <option value="Structured Updates">Structured Updates</option>
            <option value="Async Communication">Async Communication</option>
            <option value="Minimal & Direct">Minimal & Direct</option>
          </select>
        </label>

        {/* Flexibility */}
        <label className="block">
          What does flexibility mean to you?
          <textarea
            name="flexibility"
            value={culture.flexibility}
            onChange={handleChange}
            placeholder="Is it about time, location, work-life balance, etc.?"
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-white h-20"
          />
        </label>
      </div>
    </div>
  );
}
