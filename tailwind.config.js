/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                'brand-yellow': '#FFD700', // Placeholder, user said "solido arredondado amarelo"
            }
        },
    },
    plugins: [],
}
