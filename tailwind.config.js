/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js,ts,tsx}","./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Alegreya Sans', 'ui-serif', 'Georgia'],
        mono: ['IBM Plex Sans Condensed', 'ui-monospace', 'SFMono-Regular'],
        inika: ["Inika", 'serif'], // Add el custom hna
        Lato: ["Lato", "sans-serif"],
        gujarati: [ "Noto  Sans Gujarati", "serif"],
        Encode:["Encode Sans Expanded", "sans-serif"],
      },
      backgroundColor: {
        headerColor : 'rgba(19, 25, 33, 1)',
        footerbg: 'rgba(35, 47, 62, 1)',
        Infobg: 'rgba(19, 26, 34, 1)',
        searchCategory: 'rgba(217, 217, 217, 1)',
        searchbtn: "rgba(255, 204, 0, 1)",
        upFooter:" rgba(55, 71, 90, 1)",
     
      },
      colors: {
        lightfont: "rgba(192, 204, 204, 1)",
        footerdark: "rgba(180, 180, 180, 1)",
        light: 'rgba(153, 153, 153, 1)',
        searchCategoryColor: "rgba(103, 103, 103, 1)",
        searchicon: ' rgba(33, 33, 33, 1)',
      },
      borderColor: {
        borderBottom: 'rgba(76, 76, 76, 1)',
        footerdark: "rgba(180, 180, 180, 1)",
      },
  
    },
  },
  plugins: [],
}

