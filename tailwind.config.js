import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        screens: {
            'lg': {'max': '992px'},
            'md': {'max': '768px'},
            'sm': {'max': '480px'},
        },
        container: {
            padding: '20px',
        },
        extend: {
            colors: {
                lightblack: '#4D4244',
                lightred: '#FF0D38',
                darkred: '#D70026',
                lightgray: '#747474',
                darkgray: '#272727',
            }
        },
    },

    plugins: [forms],
};
