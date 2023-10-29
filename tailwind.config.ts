import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image-lg': "url('/HeroImagelg.png')",
        'hero-image-md': "url('/HeroImagemd.png')",
        'hero-image-sm': "url('/HeroImagesm.png')",
      },
    },
  },
  plugins: [],
};
export default config;
