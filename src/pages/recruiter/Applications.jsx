// src/pages/recruiter/Applications.jsx

const mockApplications = [
  {
    id: 1,
    candidate: "Aman Chandra",
    jobTitle: "Frontend Developer",
    location: "Remote",
    resumeLink: "/Amankchandra.resume.pdf",
    message: "I’m excited to work on frontend at your company!",
  },
  {
    id: 2,
    candidate: "Isha Kapoor",
    jobTitle: "UI/UX Designer",
    location: "Pune, India",
    resumeLink: "#",
    message: "Looking forward to joining your creative design team.",
  },
    {
    id: 3,
    candidate: "Aman Chandra",
    jobTitle: "Frontend Developer",
    location: "Remote",
    resumeLink: "/Amankchandra.resume.pdf",
    message: "I’m excited to work on frontend at your company!",
  },
  {
    id: 4,
    candidate: "Isha Kapoor",
    jobTitle: "UI/UX Designer",
    location: "Pune, India",
    resumeLink: "#",
    message: "Looking forward to joining your creative design team.",
  },
  {
    id: 5,
    candidate: "Ravi Sharma",
    jobTitle: "Backend Developer",
    location: "Delhi",
    resumeLink: "#",
    message: "Experienced with Spring Boot and Node.js.",
  },
  {
    id: 6,
    candidate: "Neha Verma",
    jobTitle: "Product Manager",
    location: "Remote",
    resumeLink: "#",
    message: "Skilled in cross-functional product teams.",
  },
  {
    id: 7,
    candidate: "Harshit Patel",
    jobTitle: "Data Analyst Intern",
    location: "Mumbai",
    resumeLink: "#",
    message: "Love working with Python and Power BI.",
  },
  {
    id: 8,
    candidate: "Aarav Singh",
    jobTitle: "Full Stack Developer",
    location: "Bangalore",
    resumeLink: "#",
    message: "React + Spring Boot experience.",
  },
  {
    id: 9,
    candidate: "Kritika Gupta",
    jobTitle: "Graphic Designer",
    location: "Ahmedabad",
    resumeLink: "#",
    message: "Portfolio link included in resume.",
  },
  {
    id: 10,
    candidate: "Devansh Mehta",
    jobTitle: "Mobile Developer",
    location: "Hyderabad",
    resumeLink: "#",
    message: "React Native + Kotlin projects.",
  },
  {
    id: 11,
    candidate: "Sneha Dey",
    jobTitle: "Content Writer",
    location: "Remote",
    resumeLink: "#",
    message: "I write SEO-optimized tech content.",
  },
  {
    id: 12,
    candidate: "Yuvraj Chouhan",
    jobTitle: "DevOps Intern",
    location: "Indore",
    resumeLink: "#",
    message: "AWS, Docker, Jenkins enthusiast.",
  },
];

export default function Applications() {
  return (
    <div className="px-4 md:px-8 mt-24">
      <h2 className="text-3xl font-bold text-white mb-6">👥 Applications</h2>

      <div className="space-y-6">
        {mockApplications.map((app) => (
          <div
            key={app.id}
            className="bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-lg text-white border border-white/10 hover:shadow-2xl transition-all"
          >
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-semibold">{app.candidate}</h3>
                <p className="text-sm text-white/80">
                  Applied for: <strong>{app.jobTitle}</strong>
                </p>
                <p className="text-sm text-white/70">📍 {app.location}</p>
                <p className="text-sm mt-2 italic text-white/60">
                  “{app.message}”
                </p>
              </div>

              <div className="flex flex-col items-end gap-3">
                <a
                  href={app.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 rounded-md bg-white text-blue-900 font-semibold text-sm hover:bg-white/90 transition"
                >
                  View Resume
                </a>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm">
                    Accept
                  </button>
                  <button className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
