import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        forest: {
          50: "#EFF7F1",
          100: "#DDEDE3",
          200: "#B5D6C5",
          300: "#7DB79C",
          400: "#4B9375",
          500: "#2A7357",
          600: "#1E5C45",
          700: "#164936",
          800: "#10392B",
          900: "#0B2B20",
          950: "#071F17",
        },
        cream: {
          50: "#FEFBF5",
          100: "#FBF5E9",
          200: "#F6EBD8",
          300: "#EFDCC0",
          400: "#E5CBA7",
        },
        ember: {
          50: "#FEF3E9",
          100: "#FDE5CE",
          200: "#FAC9A0",
          300: "#F6A96E",
          400: "#F08A4B",
          500: "#E8762F",
          600: "#D65E1E",
          700: "#B14719",
        },
        ink: "#12211B",
        clay: "#C98A5B",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(18, 33, 27, 0.04), 0 18px 40px -18px rgba(18, 33, 27, 0.16)",
        lift: "0 4px 12px rgba(18, 33, 27, 0.05), 0 32px 64px -24px rgba(18, 33, 27, 0.28)",
        glow: "0 0 0 1px rgba(240, 138, 75, 0.25), 0 20px 60px -20px rgba(240, 138, 75, 0.55)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(-1deg)" },
          "50%": { transform: "translateY(-18px) rotate(1.5deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        wag: {
          "0%, 100%": { transform: "rotate(-7deg)" },
          "50%": { transform: "rotate(9deg)" },
        },
        blink: {
          "0%, 92%, 100%": { transform: "scaleY(1)" },
          "95%": { transform: "scaleY(0.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.85)", opacity: "0.7" },
          "80%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "treat-drop": {
          "0%": { transform: "translateY(-28px) scale(0.7)", opacity: "0" },
          "25%": { opacity: "1" },
          "70%": { transform: "translateY(10px) scale(1)" },
          "85%": { transform: "translateY(4px)" },
          "100%": { transform: "translateY(8px) scale(1)", opacity: "1" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0,0) rotate(0deg)" },
          "33%": { transform: "translate(8px,-10px) rotate(4deg)" },
          "66%": { transform: "translate(-6px,6px) rotate(-3deg)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        bob: "bob 3.2s ease-in-out infinite",
        wag: "wag 0.9s ease-in-out infinite",
        blink: "blink 6s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        marquee: "marquee 32s linear infinite",
        "pulse-ring": "pulse-ring 2.6s cubic-bezier(0.24, 0.6, 0.35, 1) infinite",
        "treat-drop": "treat-drop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        wave: "wave 1s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
        "spin-slow": "spin-slow 26s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
