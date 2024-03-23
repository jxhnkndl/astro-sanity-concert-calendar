/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'dark': '#222325',
			'light': '#F2F2F2'
		},
		fontFamily: {
			primary: ['Poppins', 'sans-serif']
		},
		extend: {},
	},
	plugins: [],
}
