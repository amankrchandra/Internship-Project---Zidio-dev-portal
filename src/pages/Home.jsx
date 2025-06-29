import HeroSection from "../components/HeroSection";
import mockJobs from "../data/mockJobs";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      {/* Job Cards Section will follow this */}
      {/* Jobs Section */}
      <section id="jobs" className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
            Latest Job Openings
          </h2>

          {/* Job Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-blue-500/30 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  {job.company} • {job.location}
                </p>
                <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full border border-blue-200">
                  {job.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
