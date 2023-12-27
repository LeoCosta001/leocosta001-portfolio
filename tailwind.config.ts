import type { Config } from 'tailwindcss'
import withMT from '@material-tailwind/react/utils/withMT'

const config: object = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
} as Config);

export default config;
