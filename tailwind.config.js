/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,css}'],
	theme: {
		extend: {
			fontFamily: {
				aileron: ['Aileron', 'sans-serif'],
			},
			colors: {
				primary: '#F56C24',
				theme_color: '#19458C',
				dark_text: '#0C0C0C',
			},
		},
	},
	plugins: [],
};
