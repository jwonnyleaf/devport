/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                opensans: ['"Open Sans"', 'sans-serif'],
                montserrat: ['"Montserrat"', 'sans-serif'],
            },
            colors: {
                primary: '#3A373D',
                secondary: '#726d79',
                background: '#FCFAFA',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
