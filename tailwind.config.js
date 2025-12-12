/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // ✅ include all files in app folder
    "./components/**/*.{js,ts,jsx,tsx}", // if you have a components folder
    "./screens/**/*.{js,ts,jsx,tsx}",    // optional
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
