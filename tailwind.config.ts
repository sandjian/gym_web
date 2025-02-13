import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"
import tailwindcssAnimate from "tailwindcss-animate"
import typography from "@tailwindcss/typography"
import svgToDataUri from "mini-svg-data-uri"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        custom: "cubic-bezier(0.68, -0.3, 0.32, 1)",
      },
      backgroundImage: {
      'noise-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 700'%3E%3Cdefs%3E%3Cfilter id='nnnoise-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='linearRGB'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.167' numOctaves='4' seed='15' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeSpecularLighting surfaceScale='28' specularConstant='0.75' specularExponent='20' lighting-color='%23fff' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='specularLighting'%3E%3CfeDistantLight azimuth='3' elevation='100'%3E%3C/feDistantLight%3E%3C/feSpecularLighting%3E%3C/filter%3E%3C/defs%3E%3Crect width='700' height='700' fill='%2309090B'%3E%3C/rect%3E%3Crect width='700' height='700' fill='%23ffffff' filter='url(%23nnnoise-filter)'%3E%3C/rect%3E%3C/svg%3E")`,
      'dot-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cg stroke-width='3.5' stroke='hsla(0, 0%25, 100%25, 1.00)' fill='none'%3E%3Ccircle r='4.29' cx='0' cy='0' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='400' cy='0' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='800' cy='0' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='0' cy='400' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='400' cy='400' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='800' cy='400' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='0' cy='800' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='400' cy='800' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='800' cy='800' fill='hsla(0, 0%25, 100%25, 1.00)' stroke='none'/%3E%3C/g%3E%3C/svg%3E")`,
      'dot-pattern-light': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cg stroke-width='3.5' stroke='hsla(215, 16%25, 47%25, 1.00)' fill='none'%3E%3Ccircle r='4.29' cx='0' cy='0' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='400' cy='0' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='800' cy='0' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='0' cy='400' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='400' cy='400' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='800' cy='400' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='0' cy='800' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='400' cy='800' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3Ccircle r='4.29' cx='800' cy='800' fill='hsla(215, 16%25, 47%25, 1.00)' stroke='none'/%3E%3C/g%3E%3C/svg%3E")`,
      },

      boxShadow: {
        input: "0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)",
      },
      colors: {
        brand: "hsl(var(--brand))",
        "brand-foreground": "hsl(var(--brand-foreground))",
        black: {
          100: "#181818",
          200: "#242424",
          300: "rgba(255, 255, 255, 0.125)",
          DEFAULT: "#000",
        },
        zinc: {
          950: "#1b1b1b",
          
        },
        white: {
          100: "#BEC1DD",
          200: "#C1C2D3",
          DEFAULT: "#FFF",
        },
        blue: {
          100: "#E4ECFF",
        },
        green: {
          700: "#00cc00",
          600: "#b1b1b1",
        },
        purple: "#CBACF9",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "background-position-spin":
        "background-position-spin 3000ms infinite alternate",
        "line-shadow": "line-shadow 15s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
        gradient: "gradient 8s linear infinite",
        appear: "appear 0.5s ease-out forwards",
        "appear-zoom": "appear-zoom 0.5s ease-out forwards",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        meteor: "meteor 5s linear infinite",
        shine: "shine var(--duration) infinite linear",
        grid: "grid 15s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        rainbow: "rainbow var(--speed, 3s) infinite linear",
        'pulse-hover': 'pulse-hover 8s ease-in-out infinite',
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
        "line-shadow": {
          "0%": { "background-position": "0 0" },
          "100%": { "background-position": "100% -100%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        },
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        'pulse-hover': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2%)' },
        },
        appear: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "appear-zoom": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shine: {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          "100%": {
            "background-position": "0% 0%",
          },
        },
        grid: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        rainbow: {
          "0%": {
            "background-position": "0%",
          },
          "100%": {
            "background-position": "200%",
          },
        },
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    typography,
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                width="32" height="32" fill="none" stroke="${value}">
                <path d="M0 .5H31.5V32"/>
              </svg>`
            )}")`,
          }),
        },
        {
          values: theme("colors"),
          type: "color",
        }
      )
    }),
  ],
}

export default config
