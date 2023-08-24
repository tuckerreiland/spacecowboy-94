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
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
