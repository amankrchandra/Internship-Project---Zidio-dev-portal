import { useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: Date.now(),
      title: "",
      link: "",
      description: "",
      readme: "",
    },
  ]);

  const handleChange = (id, field, value) => {
    setProjects((prev) =>
      prev.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    );
  };

  const addProject = () => {
    setProjects((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: "",
        link: "",
        description: "",
        readme: "",
      },
    ]);
  };

  const removeProject = (id) => {
    setProjects((prev) => prev.filter((proj) => proj.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto text-white pt-20 space-y-8">
      <h2 className="text-2xl font-bold">📁 Projects</h2>

      {projects.map((project, index) => (
        <div
          key={project.id}
          className="bg-white/10 p-6 rounded-xl backdrop-blur-lg shadow-md space-y-4"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Project #{index + 1}</h3>
            {projects.length > 1 && (
              <button
                onClick={() => removeProject(project.id)}
                className="text-red-400 text-sm hover:underline"
              >
                Remove
              </button>
            )}
          </div>

          <label className="block">
            Project Title:
            <input
              type="text"
              value={project.title}
              onChange={(e) =>
                handleChange(project.id, "title", e.target.value)
              }
              placeholder="My Cool Project"
              className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-white"
            />
          </label>

          <label className="block">
            Project Link (GitHub or Live):
            <input
              type="url"
              value={project.link}
              onChange={(e) =>
                handleChange(project.id, "link", e.target.value)
              }
              placeholder="https://github.com/your-project"
              className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-white"
            />
          </label>

          <label className="block">
            Short Description:
            <input
              type="text"
              value={project.description}
              onChange={(e) =>
                handleChange(project.id, "description", e.target.value)
              }
              placeholder="Briefly describe what this project does"
              className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-white"
            />
          </label>

          <label className="block">
            README / Detailed Info:
            <textarea
              rows={6}
              value={project.readme}
              onChange={(e) =>
                handleChange(project.id, "readme", e.target.value)
              }
              placeholder="Explain everything about your project, challenges, learnings..."
              className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-white"
            />
          </label>
        </div>
      ))}

      <div className="pt-4">
        <button
          onClick={addProject}
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium shadow"
        >
          ➕ Add Another Project
        </button>
      </div>
    </div>
  );
}
