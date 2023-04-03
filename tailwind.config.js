/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#99e56e",

          secondary: "#63ff99",

          accent: "#9bb4ff",

          neutral: "#2A273F",

          info: "#4373DB",

          success: "#0F5739",

          warning: "#F1AC4B",

          error: "#E64C6B",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
