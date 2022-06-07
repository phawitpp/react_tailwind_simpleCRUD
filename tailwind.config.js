module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily:{
      sans: ['Inter var', 'sans-serif'],
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}
