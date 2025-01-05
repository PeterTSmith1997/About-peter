module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#E3F2FD', // Light Blue
            DEFAULT: '#2196F3', // Primary Blue
            dark: '#0B79D0', // Dark Blue
          },
          secondary: '#FFFFFF', // White
          textPrimary: '#333333', // Dark text
          textSecondary: '#555555', // Light text
        },
      },
    },
  plugins: [],
};