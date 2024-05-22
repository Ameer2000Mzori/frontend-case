import { withTV } from 'tailwind-variants/transformer';

const config = withTV({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      Barlow: ['Barlow'],
      firaSans: ['"Fira Sans"', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      screens: {
        '2xs': '320px',
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xlg: '1180px',
        xl: '1480px',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
});

export default config;
