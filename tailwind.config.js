/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./publice/*.html"],
    theme: {
        extend: {
            fontFamily: {
                'sans': ["Inter", "sans-serif"],
            },
            backgroundImage: {
                'login-bg': "url('/images/login-bg-img.jpg')",
            },
            boxShadow: {
                custom: "4px 4px 30px 0px rgba(84, 84, 84, 0.1)",
            },
            colors: {
                customGray: "#2A2B2E",
            },
        },
    },
    plugins: [],
}