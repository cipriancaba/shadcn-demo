import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern:
        /bg-(yellow|orange|purple|blue|teal|emerald|cyan|indigo|violet|fuchsia|red|rose|green|amber|slate|sky|pink|lime)-(50|100|500)/,
    },
    {
      pattern:
        /border-(yellow|orange|purple|blue|teal|emerald|cyan|indigo|violet|fuchsia|red|rose|green|amber|slate|sky|pink|lime)-300/,
    },
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        24: "repeat(24, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-24": "span 24 / span 24",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          DEFAULT: "hsl(var(--brand))",
          foreground: "hsl(var(--brand-foreground))",
        },
        brandSecondary: {
          DEFAULT: "hsl(var(--brand-secondary))",
          foreground: "hsl(var(--brand-secondary-foreground))",
        },
        brandAction: {
          DEFAULT: "hsl(var(--brand-action))",
          foreground: "hsl(var(--brand-action))",
        },
        brandActionBorder: {
          DEFAULT: "hsl(var(--brand-action-border))",
          foreground: "hsl(var(--brand-action-border))",
        },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: ({ theme: _ }: { theme: any }) => ({
        h1: {
          css: {
            fontSize: "var(--typography-h1-font-size)",
            fontWeight: "var(--typography-h1-font-weight)",
            lineHeight: "var(--typography-h1-line-height)",
            leterSpacing: "var(--typography-h1-letter-spacing)",
          },
        },
        h2: {
          css: {
            fontSize: "var(--typography-h2-font-size)",
            fontWeight: "var(--typography-h2-font-weight)",
            lineHeight: "var(--typography-h2-line-height)",
            leterSpacing: "var(--typography-h2-letter-spacing)",
          },
        },
        h3: {
          css: {
            fontSize: "var(--typography-h3-font-size)",
            fontWeight: "var(--typography-h3-font-weight)",
            lineHeight: "var(--typography-h3-line-height)",
            leterSpacing: "var(--typography-h3-letter-spacing)",
          },
        },
        h4: {
          css: {
            fontSize: "var(--typography-h4-font-size)",
            fontWeight: "var(--typography-h4-font-weight)",
            lineHeight: "var(--typography-h4-line-height)",
            leterSpacing: "var(--typography-h4-letter-spacing)",
          },
        },
        large: {
          css: {
            fontSize: "var(--typography-h4-font-size)",
            fontWeight: "var(--typography-h4-font-weight)",
            lineHeight: "var(--typography-h4-line-height)",
          },
        },
        p: {
          css: {
            fontSize: "var(--typography-p-font-size)",
            fontWeight: "var(--typography-p-font-weight)",
            lineHeight: "var(--typography-p-line-height)",
          },
        },
        pe: {
          css: {
            fontSize: "var(--typography-pe-font-size)",
            fontWeight: "var(--typography-pe-font-weight)",
            lineHeight: "var(--typography-pe-line-height)",
          },
        },
        blockquote: {
          css: {
            fontSize: "var(--typography-blockquote-font-size)",
            fontWeight: "var(--typography-blockquote-font-weight)",
            fontStyle: "var(--typography-blockquote-font-style)",
            lineHeight: "var(--typography-blockquote-line-height)",
            leterSpacing: "var(--typography-blockquote-letter-spacing)",
          },
        },
        lead: {
          css: {
            fontSize: "var(--typography-lead-font-size)",
            fontWeight: "var(--typography-lead-font-weight)",
            lineHeight: "var(--typography-lead-line-height)",
            leterSpacing: "var(--typography-lead-letter-spacing)",
          },
        },
        small: {
          css: {
            fontSize: "var(--typography-small-font-size)",
            fontWeight: "var(--typography-small-font-weight)",
            lineHeight: "var(--typography-small-line-height)",
            leterSpacing: "var(--typography-small-letter-spacing)",
          },
        },
        subtle: {
          css: {
            fontSize: "var(--typography-subtle-font-size)",
            fontWeight: "var(--typography-subtle-font-weight)",
            lineHeight: "var(--typography-subtle-line-height)",
            color: "var(--typography-subtle-color)",
          },
        },
        detail: {
          css: {
            fontSize: "var(--typography-detail-font-size)",
            fontWeight: "var(--typography-detail-font-weight)",
            lineHeight: "var(--typography-detail-line-height)",
          },
        },
      }),
    },
  },
  plugins: [],
}

export default config
