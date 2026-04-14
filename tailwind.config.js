module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,md}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary_teal_green: '#00b2bd',
        secondary_teal_green: '#09c0a1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
