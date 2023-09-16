/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			pusans: ['"Public Sans"', 'sans-serif'],
			colors: {
				'grayish-blue': '#6a7b8a',
				'light-grayish-blue': '#f1f6f9',
				'very-light-gray': '#fafafa',
				white: '#ffffff',
				'dark-blue': '#1d324a',
				'lime-green': '#6ecb63',
				'bright-cyan': '#00e0e0',
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
	},
	plugins: [],
};
