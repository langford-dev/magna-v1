module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/public/hero.png')",
        'hero2': "url('/public/hero2.png)",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
