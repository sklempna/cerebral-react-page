/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["helpme"],
      },
      backgroundImage: {
        skulls: "url('../src/assets/img/skulls(2).png')",
        demon: "url('../src/assets/img/demon.jpg')",
        blood: "url('../src/assets/img/blood(1).png')",
      },
      keyframes: {
        jitter: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "10%, 30%, 50%, 70%, 90%": {
            transform: "translateX(-4px)",
          },
          "20%, 40%, 60%, 80%": {
            transform: "translateX(4px)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        jitter: "jitter 0.4s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
