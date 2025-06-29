// src/pages/recruiter/CompanyProfile.jsx

import { useState } from "react";

export default function CompanyProfile() {
  const [companyInfo, setCompanyInfo] = useState({
    name: "",
    tagline: "",
    website: "",
    size: "",
    location: "",
    industry: "",
    founded: "",
    description: "",
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo") {
      setCompanyInfo((prev) => ({ ...prev, logo: files[0] }));
    } else {
      setCompanyInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", companyInfo);
    alert("Company profile saved ✅");
  };

  return (
    <div className="mt-24 px-4 md:px-10 text-white">
      <h2 className="text-3xl font-bold mb-6">🏢 Company Profile</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 space-y-6 max-w-4xl"
      >
        {/* Logo Upload */}
        <div>
          <label className="block text-sm mb-1">Company Logo</label>
          <input
            type="file"
            name="logo"
            accept="image/*"
            onChange={handleChange}
            className="text-sm bg-white/10 p-2 rounded-md border border-white/20 w-full"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-sm mb-1">Company Name</label>
          <input
            type="text"
            name="name"
            value={companyInfo.name}
            onChange={handleChange}
            className="bg-white/10 p-2 rounded-md w-full border border-white/20"
          />
        </div>

        {/* Tagline + Website */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Tagline</label>
            <input
              type="text"
              name="tagline"
              value={companyInfo.tagline}
              onChange={handleChange}
              className="bg-white/10 p-2 rounded-md w-full border border-white/20"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Website</label>
            <input
              type="url"
              name="website"
              value={companyInfo.website}
              onChange={handleChange}
              className="bg-white/10 p-2 rounded-md w-full border border-white/20"
            />
          </div>
        </div>

        {/* Size, Industry, Founded, Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Company Size</label>
            <input
              type="text"
              name="size"
              placeholder="e.g., 1-10, 11-50, 100+"
              value={companyInfo.size}
              onChange={handleChange}
              className="bg-white/10 p-2 rounded-md w-full border border-white/20"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Industry</label>
            <input
              type="text"
              name="industry"
              value={companyInfo.industry}
              onChange={handleChange}
              className="bg-white/10 p-2 rounded-md w-full border border-white/20"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Founded Year</label>
            <input
              type="number"
              name="founded"
              value={companyInfo.founded}
              onChange={handleChange}
              className="bg-white/10 p-2 rounded-md w-full border border-white/20"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Headquarters Location</label>
            <input
              type="text"
              name="location"
              value={companyInfo.location}
              onChange={handleChange}
              className="bg-white/10 p-2 rounded-md w-full border border-white/20"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm mb-1">Company Description</label>
          <textarea
            name="description"
            value={companyInfo.description}
            onChange={handleChange}
            rows="5"
            className="bg-white/10 p-2 rounded-md w-full border border-white/20"
            placeholder="Tell job seekers what your company is about..."
          ></textarea>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm md:text-base transition shadow-lg"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}
