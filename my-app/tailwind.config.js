/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    boxShadow: {
      DEFAULT: '2px 4px 10px rgba(0, 0, 0, 0.5)',
    }
  },
  plugins: [],
}

