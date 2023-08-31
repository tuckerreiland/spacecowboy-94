/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'colt-soft': ['colt-soft'],
        'nitti': ['nitti'],
      },
      animation: {
				'blinking-cursor': 'blink .9s linear infinite',
			},
      keyframes: {
				blink: {
				  '0%': { opacity:  '100%'},
				  '49%': { opacity:  '100%'},
				  '50%': { opacity: '0%'},
				  '100%': { opacity: '0%'},
				},
			},
    },
  },
  plugins: [],
}
