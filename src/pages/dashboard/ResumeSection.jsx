import { useState } from "react";

export default function ResumeSection() {
  const [resumeFile, setResumeFile] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ["application/pdf", "application/msword", "text/plain", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (allowedTypes.includes(file.type)) {
        setResumeFile(file);
      } else {
        alert("Invalid file type. Only PDF, DOC, DOCX, and TXT allowed.");
      }
    }
  };

  const removeResume = () => setResumeFile(null);

  return (
    <div className="max-w-3xl mx-auto pt-20 text-white space-y-10">
      {/* Top Tabs */}
      <div className="flex gap-6 text-sm border-b border-white/20 pb-2">
        <span className="border-b-2 border-yellow-400 pb-1">Profile</span>
        <span className="text-gray-400 hover:text-yellow-400 cursor-pointer">Resume/CV</span>
        <span className="text-gray-400 hover:text-yellow-400 cursor-pointer">Projects</span>
        <span className="text-gray-400 hover:text-yellow-400 cursor-pointer">Culture</span>
      </div>

      {/* Resume Section */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold">📄 Upload your recent resume or CV</h2>
        <p className="text-sm text-gray-300">Upload your most up-to-date resume. File types: DOC, DOCX, PDF, TXT</p>

        {resumeFile ? (
          <div className="space-y-4">
            <div className="bg-white/10 border border-white/20 rounded-md p-4 text-sm">
              <p className="text-white font-medium">{resumeFile.name}</p>
              <p className="text-gray-400 text-xs mt-1">View your resume or upload a new one below</p>
            </div>

            <div className="flex gap-4">
              <button
                className="px-4 py-2 bg-yellow-400/90 text-black font-semibold rounded hover:bg-yellow-300 transition"
                onClick={() => window.open(URL.createObjectURL(resumeFile), "_blank")}
              >
                View Resume
              </button>
              <label className="px-4 py-2 bg-blue-500 text-white font-semibold rounded cursor-pointer hover:bg-blue-400">
                Upload New
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleUpload}
                  className="hidden"
                />
              </label>
              <button
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-400"
                onClick={removeResume}
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          <label className="flex flex-col items-start space-y-2">
            <span className="text-white font-medium">Upload new file</span>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleUpload}
              className="text-sm text-gray-300"
            />
          </label>
        )}
      </div>
    </div>
  );
}
