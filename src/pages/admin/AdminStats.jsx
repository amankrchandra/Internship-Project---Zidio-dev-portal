// src/pages/admin/AdminStats.jsx

export default function AdminStats() {
  // Dummy weekly data for stats
  const jobApplicationsTrend = [
    { week: "Week 1", applications: 520 },
    { week: "Week 2", applications: 740 },
    { week: "Week 3", applications: 860 },
    { week: "Week 4", applications: 980 },
  ];

  const jobPostingTrend = [
    { week: "Week 1", jobs: 120 },
    { week: "Week 2", jobs: 160 },
    { week: "Week 3", jobs: 210 },
    { week: "Week 4", jobs: 275 },
  ];

  return (
    <div className="mt-8 px-6 text-white">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        📊 Admin Dashboard Overview
      </h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow hover:shadow-xl transition">
          <h3 className="text-lg font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold">12,840</p>
          <p className="text-sm text-green-400 mt-1">+7.3% this month</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow hover:shadow-xl transition">
          <h3 className="text-lg font-semibold mb-2">Total Recruiters</h3>
          <p className="text-3xl font-bold">1,420</p>
          <p className="text-sm text-green-400 mt-1">+5.2% this month</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow hover:shadow-xl transition">
          <h3 className="text-lg font-semibold mb-2">Total Jobs Posted</h3>
          <p className="text-3xl font-bold">3,670</p>
          <p className="text-sm text-green-400 mt-1">+12.8% growth</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow hover:shadow-xl transition">
          <h3 className="text-lg font-semibold mb-2">Total Applications</h3>
          <p className="text-3xl font-bold">25,900</p>
          <p className="text-sm text-green-400 mt-1">+9.6% this month</p>
        </div>
      </div>

      {/* Trend Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Applications Trend */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
          <h3 className="text-lg font-semibold mb-4">
            📈 Weekly Job Applications
          </h3>
          <ul className="space-y-3">
            {jobApplicationsTrend.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between text-sm text-white/90 border-b border-white/10 pb-2"
              >
                <span>{item.week}</span>
                <span className="font-semibold text-green-400">
                  {item.applications} applied
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Job Posting Trend */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
          <h3 className="text-lg font-semibold mb-4">
            📊 Weekly Job Postings
          </h3>
          <ul className="space-y-3">
            {jobPostingTrend.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between text-sm text-white/90 border-b border-white/10 pb-2"
              >
                <span>{item.week}</span>
                <span className="font-semibold text-blue-400">
                  {item.jobs} jobs
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
