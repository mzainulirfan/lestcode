/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["app/Views/**/*.php", "node_modules/preline/dist/*.js"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [require("preline/plugin")],
};
