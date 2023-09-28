/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paleViolet: 'hsl(var(--paleViolet) / <alpha-value>)',
        moderateViolet: 'hsl(var(--moderateViolet) / <alpha-value>)',
        desaturatedDarkViolet: 'hsl(var(--desaturatedDarkViolet) / <alpha-value>)',
        grayishBlue: 'hsl(var(--grayishBlue) / <alpha-value>)',
        veryDarkDesaturatedViolet: 'hsl(var(--veryDarkDesaturatedViolet) / <alpha-value>)',
        darkGrayishViolet: 'hsl(var(--darkGrayishViolet) / <alpha-value>)',
        lightMagenta: 'hsl(var(--lightMagenta) / <alpha-value>)',
        lightViolet: 'hsl(var(--lightViolet) / <alpha-value>)',
        white: 'hsl(var(--white) / <alpha-value>)',
        lightGrayishViolet: 'hsl(var(--lightGrayishViolet) / <alpha-value>)',
        veryLightMagenta: 'hsl(var(--veryLightMagenta) / <alpha-value>)',
        messageContainerColor: 'hsl(var(--messageContainerColor) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}