/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        titleText: 'rgba(0, 0, 0, 0.87)',
        primaryText: 'rgba(0, 0, 0, 0.6)',
        secondaryText: 'rgba(0, 0, 0, 0.38)',
        disabledText: 'rgba(222, 222, 222, 1)',
        divider: 'rgba(222, 222, 222, 1)',

        bgPrimary: 'rgba(246, 246, 246, 1)',
        bgDisabled: 'rgba(245, 245, 245, 1)',
        bgTag: 'rgba(140, 62, 255, 0.1)',
        bgDarkmode: 'rgba(37, 37, 37, 1)',
        bgWarning: 'rgba(242,170,82,0.1)',
        bgError: 'rgba(252,201,204,0.25)',
        bgSuccess: 'rgba(71,184,129,0.1)',
        bgProcessing: 'rgba(47,128,237,0.1)',

        statusWarning: 'rgba(242, 170, 82, 1)',
        statusError: 'rgba(242, 100, 96, 1)',
        statusSuccess: 'rgba(71, 184, 129, 1)',
        statusProcessing: 'rgba(47, 128, 237, 1)',

        themePrimary: 'rgba(140, 62, 255, 1)',
        themeHover: 'rgba(166, 106, 255, 1)',
        themeActive: 'rgba(76, 4, 184, 1)',
        themeFocusStroke: 'rgba(221, 197, 255, 1)',

        disabledTheme: 'rgba(221, 210, 255, 1)',
        disabledError: 'rgba(252, 201, 204, 1)',

        darkPrimaryText: 'rgba(255, 255, 255, 1)',
        darkSecondaryText: 'rgba(255, 255, 255, 0.8)',
        darkDivider: 'rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
}
