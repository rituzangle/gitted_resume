// Tailwind new version wants you to:
// Create your own config manually - // tailwind.config.js
// Use @import directives in your CSS to control behavior

import typography from '@tailwindcss/typography'

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"
    ],
  theme: {
    extend: {
      colors: {
        blush: "#ffe4e6",
        goldenDaisy: "#fff9c4",
        periwinkle: "#d0d1ff"
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"Nunito"', "sans-serif"]
      }
    }
  },

  plugins: [ typography ]

}

