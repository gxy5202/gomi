/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {},
	},
	plugins: [nextui({
		themes: {
			dark: {
				colors: {
					background: "#000000", // or DEFAULT
					foreground: "#ECEDEE", // or 50 to 900 DEFAULT
					primary: {
						//... 50 to 900
						foreground: "#FFFFFF",
						DEFAULT: "#006FEE",
					},
				},
				// ... rest of the colors
			}
		}
	})],
}