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
        },
        fontFamily: {
            spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        }
    },
    plugins: [],
}
