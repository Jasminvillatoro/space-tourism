import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-bellefair)', 'ui-sans-serif', 'system-ui'],
        barlow: ['var(--font-barlow-condensed)'],
        bellefair: ['var(--font-bellefair)'],
      },
    },
  },
  plugins: [],
};
export default config;
