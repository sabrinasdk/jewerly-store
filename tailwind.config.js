/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure Tailwind CSS scans your files for class names
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Add DaisyUI plugin here
};
