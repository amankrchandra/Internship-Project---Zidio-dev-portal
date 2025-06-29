import { useState } from "react";

export default function ProfileDetails() {
  const [profile, setProfile] = useState({
    name: "",
    location: "",
    role: "",
    experience: "",
    openToRoles: [],
    bio: "",
    photo: null,
    website: "",
    linkedin: "",
    github: "",
    twitter: "",
    skills: [],
    achievements: "",
    gender: "",
    pronouns: "",
  });

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "DevOps Engineer",
    "Data Scientist",
  ];

  const experiences = ["0-1", "1-2", "2-4", "4-6", "6+"];
  const genderOptions = ["Male", "Female", "Non-binary", "Prefer not to say"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    setProfile((prev) => ({ ...prev, photo: e.target.files[0] }));
  };

  const toggleRole = (role) => {
    setProfile((prev) => ({
      ...prev,
      openToRoles: prev.openToRoles.includes(role)
        ? prev.openToRoles.filter((r) => r !== role)
        : [...prev.openToRoles, role],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto text-white space-y-10 pt-10">
      <h2 className="text-2xl font-bold">👤 Tell us about yourself</h2>

      {/* Name and Photo */}
      <div className="bg-white/10 p-6 rounded-xl space-y-4 backdrop-blur-lg shadow-md">
        <label className="block">
          Full Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-black"
          />
        </label>

        <label className="block">
          Upload Profile Photo:
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="mt-2 block text-sm text-gray-300"
          />
        </label>
      </div>

      {/* Location, Role, Experience */}
      <div className="bg-white/10 p-6 rounded-xl space-y-4 backdrop-blur-lg shadow-md">
        <label className="block">
          Where are you based?
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleChange}
            placeholder="City, Country"
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-black"
          />
        </label>

        <label className="block">
          Primary Role:
          <select
            name="role"
            value={profile.role}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-black"
          >
            <option value="">-- Select a role --</option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          Years of Experience:
          <select
            name="experience"
            value={profile.experience}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-black"
          >
            <option value="">-- Select years --</option>
            {experiences.map((exp) => (
              <option key={exp} value={exp}>
                {exp} years
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Open to Roles + Bio */}
      <div className="bg-white/10 p-6 rounded-xl space-y-4 backdrop-blur-lg shadow-md">
        <div>
          <p className="mb-2 font-semibold">Open to the following roles:</p>
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => {
              const isSelected = profile.openToRoles.includes(role);
              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => toggleRole(role)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition ${
                    isSelected
                      ? "bg-yellow-400 text-black border-yellow-300"
                      : "bg-white/10 text-white border-white/20 hover:bg-yellow-400/30"
                  }`}
                >
                  {role}
                </button>
              );
            })}
          </div>
        </div>

        {profile.openToRoles.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {profile.openToRoles.map((role) => (
              <div
                key={role}
                className="flex items-center gap-2 bg-blue-500/30 text-white text-xs px-3 py-1 rounded-full border border-blue-400"
              >
                <span>{role}</span>
                <button
                  type="button"
                  onClick={() =>
                    setProfile((prev) => ({
                      ...prev,
                      openToRoles: prev.openToRoles.filter((r) => r !== role),
                    }))
                  }
                  className="text-white hover:text-red-300"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}

        <label className="block">
          Your Bio:
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            placeholder="Tell us about your background and interests..."
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-black h-28"
          />
        </label>
      </div>

      {/* Social Links */}
      <div className="bg-white/10 p-6 rounded-xl space-y-4 backdrop-blur-lg shadow-md">
        <h2 className="text-xl font-semibold text-white mb-4">🌐 Social Profiles</h2>

        <label className="block">
          Website:
          <input
            type="url"
            name="website"
            value={profile.website}
            onChange={handleChange}
            placeholder="https://yourwebsite.com"
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-black"
          />
        </label>

        <label className="block">
          LinkedIn:
          <input
            type="url"
            name="linkedin"
            value={profile.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/username"
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-black"
          />
        </label>

        <label className="block">
          GitHub:
          <input
            type="url"
            name="github"
            value={profile.github}
            onChange={handleChange}
            placeholder="https://github.com/username"
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-black"
          />
        </label>

        <label className="block">
          Twitter:
          <input
            type="url"
            name="twitter"
            value={profile.twitter}
            onChange={handleChange}
            placeholder="https://twitter.com/username"
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-black"
          />
        </label>
      </div>

      {/* Identity Section */}
      <div className="bg-white/10 p-6 rounded-xl space-y-4 backdrop-blur-lg shadow-md">
        <h2 className="text-xl font-semibold text-white mb-4">👥 Identity</h2>

        <label className="block">
          Gender:
          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-black"
          >
            <option value="">-- Select gender --</option>
            {genderOptions.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          Pronouns:
          <input
            type="text"
            name="pronouns"
            value={profile.pronouns}
            onChange={handleChange}
            placeholder="e.g., He/Him, She/Her, They/Them"
            className="w-full mt-1 p-2 rounded bg-white/10 border border-white/20 text-black"
          />
        </label>
      </div>
    </div>
  );
}
