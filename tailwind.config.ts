import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'blue-bg': '#00386f',
      },
      fontFamily: {
        pexico: ['pexico', 'sans'],
        proximaReg: ['proxima-reg', 'sans'],
        proximaBold: ['proxima-bold', 'sans'],
        proximaSemi: ['proxima-semi', 'sans']
      }
    },
  },
  plugins: [],
}
export default config
