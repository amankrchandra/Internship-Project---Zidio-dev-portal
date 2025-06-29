/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',   // Elegant deep blue
        accent: '#60A5FA',    // Soft sky blue
        background: '#F1F5F9' // Light gray-blue
      },
    },
  },
  plugins: [],
};
