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
			light: {
                colors: {
                    background: "#FFFFFF", // or DEFAULT
                    foreground: "#000000", // or 50 to 900 DEFAULT
                    primary: {
                        //... 50 to 900
                        foreground: "#7828C8",
                        DEFAULT: "#7828C8",
                    },
                },
                //... rest of the colors
            },
			dark: {
				colors: {
					background: "#22272e", // or DEFAULT
					foreground: "#ECEDEE", // or 50 to 900 DEFAULT
					primary: {
						//... 50 to 900
						foreground: "#7828C8",
						DEFAULT: "#7828C8",
					},
				},
				// ... rest of the colors
			}
		}
	})],
}