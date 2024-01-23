/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'h-[48px]',     'bg-red-500',
    'h-[48px]',     'bg-black',
    'h-[48px]',     'bg-blue-500',
    'fixed',        'bottom-0',
    'z-50',         'w-screen',
    'h-screen',     'top-[48px]',
    'bg-green-500', 'fixed',
    'top-0',        'z-50',
    'top-0',        'overflow-scroll',
    'w-screen'
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
