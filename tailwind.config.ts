import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",  // Ensure all relevant files are included
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'forest-pattern': "url('/rain-4431.gif')",
        'forest-gradient': 'linear-gradient(135deg, #252d36, #506a64)',
        'earth-gradient': 'linear-gradient(135deg, #344942, #48664b)',
        'sea-gradient': 'linear-gradient(135deg, #2A4D77, #F9A1A1)',
        'sky-gradient': 'linear-gradient(135deg, #4F8AB1, #F4E375)',
        'fire-gradient': 'linear-gradient(135deg, #D9451B, #F68E2F)',
        'wind-gradient': 'linear-gradient(135deg, #E2E4E8, #8EB1E6)',
      },
      colors: {
        forest: {
          primary: '#252d36',    // Darker green for contrast
          secondary: '#506a64',  // Even darker green for deeper contrast
          accent: '#9BCE6A',     // Light green for highlights
        },
        earth: {
          primary: '#5A8A5B',    // Rich, contrasting green
          secondary: '#3D3D3B',  // Darker, earthy tone
          accent: '#D4E6A5',     // Soft, earthy highlight
        },
        sea: {
          primary: '#2A4D77',    // Deep blue for high contrast
          secondary: '#1A9A8F',  // Aqua green for accent
          accent: '#F9A1A1',     // Light coral for highlights
        },
        sky: {
          primary: '#4F8AB1',    // Bright, contrasting blue
          secondary: '#C4D4E0',  // Soft, light blue
          accent: '#F4E375',     // Warm yellow for contrast
        },
        fire: {
          primary: '#D9451B',    // Strong, vivid red
          secondary: '#F68E2F',  // Bright orange for contrast
          accent: '#B1B5B5',     // Soft gray for highlights
        },
        wind: {
          primary: '#E2E4E8',    // Light, airy gray
          secondary: '#8EB1E6',  // Soft blue for contrast
          accent: '#A0AAB4',     // Muted gray for highlights
        },
      },
      textShadow: {
        default: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        borderAnimation: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        'running-border': 'borderAnimation 5s linear infinite',
      },
    },
  },
  plugins: [
    
  ],
};

export default config;
