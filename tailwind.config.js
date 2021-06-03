module.exports = {
  // darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  },
}
