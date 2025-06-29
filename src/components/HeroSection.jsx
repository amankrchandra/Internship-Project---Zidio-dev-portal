const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#60A5FA] text-white py-24 px-6 overflow-hidden">
      {/* Subtle Blob Background Decoration */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-300 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-blue-100 opacity-20 rounded-full blur-2xl z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Your Dream Job with <span className="text-white">Zidio</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Join thousands of job seekers and companies connecting daily.
        </p>
        <div className="flex justify-center gap-4 flex-wrap mb-6">
          <a
            href="/signup/jobseeker"
            className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-100 transition"
          >
            I’m looking for a job
          </a>
          <a
            href="/signup/recruiter"
            className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-100 transition"
          >
            I’m looking to hire
          </a>
        </div>

        {/* ↓ Scroll to Jobs Button */}
        <a
          href="#jobs"
          className="mt-4 inline-block text-white text-base underline underline-offset-4 hover:text-blue-200 transition"
        >
          ↓ Browse Jobs
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
