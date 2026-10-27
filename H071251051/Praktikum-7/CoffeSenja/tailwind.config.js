/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: ['Outfit', 'sans-serif'],
                display: ['Fraunces', 'serif'],
            },
            colors: {
                noir: '#4C3D19',
                kombu: '#354024',
                moss: '#889063',
                tan: '#CFBB99',
                bone: '#E5D7C4',
            },
        },
    },
    plugins: [],
}