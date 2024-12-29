/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                "per-primary": "var(--color-primary)",
                "per-secundary": "var(--color-secondary)",
                "per-tertiary": "var(--color-tertiary)",
                "per-quaternary": "var(--color-quaternary)",
                "per-quinary": "var(--color-quinary)",
                "per-light": "var(--color-light)"
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
            }
        },
        fontFamily: {
            spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        },
        backgroundImage: {
            astroGradient: 'linear-gradient(135deg, #FF5D01, #FFD600, #FF2A00)',
        },
    },
    plugins: [],
}
