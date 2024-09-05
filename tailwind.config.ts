import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/commons/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '8px 8px 15px 45px rgba(250, 250, 250, 0.35)', // light shadow with #FAFAFA color
      },
      colors: {
        secondary: "#7B88FD"
      },
      backgroundImage: theme => ({
        'tools-gradient': 'linear-gradient(to bottom, rgba(222, 224, 249, 0.1) 80%, #DEE0F9 90%)'
      }),
      
      keyframes: {
        'rotate-360': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },

        wobble: {
          '0%, 100%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(-3px) rotate(-9deg)' },
          '30%': { transform: 'translateX(3px) rotate(9deg)' },
          '45%': { transform: 'translateX(-3px) rotate(-9deg)' },
          '60%': { transform: 'translateX(3px) rotate(9deg)' },
          '75%': { transform: 'translateX(-3px) rotate(-9deg)' },
        },

        bounceInRotate: {
          '0%': {
            transform: 'translateY(100%) rotateY(-45deg)',
            opacity: '0',
          },
          '60%': {
            transform: 'translateY(0) rotateX(0deg)',
            opacity: '1',
          },
          '80%': {
            transform: 'translateY(-15%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '25%': {
            transform: 'translateY(-80%)',
          },
          '50%': {
            transform: 'translateY(35%)',
          },
          '75%': {
            transform: 'translateY(-35%)',
          },
        },
        dot_bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '25%': {
            transform: 'translateY(-650%)',
          },
          '50%': {
            transform: 'translateY(35%)',
          },
          '75%': {
            transform: 'translateY(-35%)',
          },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        
      },
      animation: {
        'rotate-360': 'rotate-360 2s linear infinite',
        wobble: 'wobble 3s ease-in-out infinite',
        combinedAnimation: 'bounceInRotate 1s ease-out, bounce 0.8s ease-out 1 1s',
        dot_bounce: 'dot_bounce 1.5s ease-out 3 ',
        grey_dot: 'dot_bounce 1.5s ease-out 2 ',
        slideUp: ' slideUp 0.7s ease-in-out',
        slideUp1: ' slideUp 0.7s ease-in-out 0.5s',
        slideUp2: ' slideUp 0.7s ease-in-out 0.9s',
        slideUp3: ' slideUp 0.7s ease-in-out 1.1s',

      },
    },
  },
  plugins: [require('daisyui'),],
};
export default config;
