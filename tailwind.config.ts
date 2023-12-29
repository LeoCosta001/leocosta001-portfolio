import type { Config } from 'tailwindcss';
import withMT from '@material-tailwind/react/utils/withMT';

const config: object = withMT({
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            primary: {
                lightness: '#ecfeff', // Cyan 100
                light: '#22d3ee', // Cyan 400
                DEFAULT: '#0891b2', // Cyan 600
                dark: '#155e75', // Cyan 800
                darkness: '#082f49', // Cyan 950
            },
        },
    },
    plugins: [],
} as Config);

export default config;
