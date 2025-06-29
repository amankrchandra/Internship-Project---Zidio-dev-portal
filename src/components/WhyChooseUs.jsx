const WhyChooseUs = () => {
  return (
    <section className="text-white">
      {/* Job Seekers Block */}
      <div className="bg-gradient-to-b from-[#0f172a] to-[#1E3A8A] py-12 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Job Seekers Love Us
        </h2>
        <p className="text-lg text-blue-100 max-w-xl mx-auto">
          Discover top opportunities with verified companies. Built for your career growth.
        </p>
      </div>

      {/* Recruiters Block */}
      <div className="bg-gradient-to-t from-[#000000] to-[#1E3A8A] py-12 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Recruiters Choose Zidio
        </h2>
        <p className="text-lg text-blue-100 max-w-xl mx-auto">
          Access India’s smartest talent pool. Post jobs, review applications, and hire faster.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
