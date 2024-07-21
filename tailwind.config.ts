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
      })
    },
  },
  plugins: [require('daisyui'),],
};
export default config;
