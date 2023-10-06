/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite-datepicker/dist/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ebf5ff',
          100: '#e1effe',
          600: '#1c64f2',
          700: '#1a56db',
          800: '#1e429f'
        },
        gray: {
          b1: '#b1b5bd',
          d9: '#d9d9d9',
          f3: '#f3f4f6',
          f9: '#f9f9f9',
          50: '#f9fafb',
          100: '#f1f1f4',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          800: '#1f2a37',
          900: '#111928'
        },
        red: {
          50: '#fdf2f2',
          100: '#fde8e8',
          600: '#e02424',
          800: '#9b1c1c',
          ff: '#ff0000'
        },
        green: {
          100: '#def7ec',
          700: '#046c4e',
          800: '#03543f'
        },
        yellow: {
          100: '#fdf6b2',
          500: '#c27803'
        },
        purple: {
          100: '#edebfe',
          600: '#7e3af2'
        }
      },
      fontSize: {
        xs: ['var(--fs-xs)', 'var(--lh-19)'],
        s: ['var(--fs-s)', 'var(--lh-21)'],
        m: ['var(--fs-m)', 'var(--lh-24)'],
        l: ['var(--fs-l)', 'var(--lh-27)'],
        xl: ['var(--fs-xl)', 'var(--lh-30)'],
        '2xl': ['var(--fs-2xl)', 'var(--lh-36)'],
        '3xl': ['var(--fs-3xl)', 'var(--lh-45)'],
        '4xl': ['var(--fs-4xl)', 'var(--lh-54)'],
        '5xl': ['var(--fs-5xl)', 'var(--lh-72)']
      },
      boxShadow: {
        md: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.05)',
        focus: '0px 0px 0px 3px rgba(164, 202, 254, 1)'
      }
    }
  }
};
