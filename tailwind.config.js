/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                opensans: ['"Open Sans"', 'sans-serif'],
            },
            colors: {
                primary: '#3A373D',
                secondary: '#898390',
                background: '#FCFAFA',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
