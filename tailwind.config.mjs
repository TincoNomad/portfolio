/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {},
		colors: {
			black: '#202020',
			white: '#F6F1E9',
			complementary: '#FFD93D',
			renzo: {
				100: '#fff5d3',
				200: '#ffe7a5',
				300: '#ffd46d',
				400: '#ffb532',
				500: '#ff9c0a',
				600: '#ff8400',
				700: '#cc6002',
				800: '#a14a0b',
				900: '#823f0c',
				950: '#461e04',
			},
		},
		fontFamily: {
			'impact': ['Impact', 'sans-serif'],
			'webcomic': ['Webcomic', 'sans-serif'],
			'quicksand': ['Quicksand', 'sans-serif'],
		  },
	},
	plugins: [],
}
