/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
       'bg-red-500',
       'bg-black',
    'h-[48px]',     'bg-blue-500',
          'bottom-0',
          'left-0',
          'pr-4',
          'right-0',
    'z-50',         'w-screen',
    'h-screen',     'pt-[48px]',
    'bg-green-500', 'fixed',       'z-50',
    'top-0',        'overflow-scroll',
    'max-w-50',
    'self-end',
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
