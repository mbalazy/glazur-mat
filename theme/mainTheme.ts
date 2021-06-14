const mainTheme = {
  colors: {
    primary: '#D6A81A',
    secondary: '#DADAD8',
    tertinary: '#303030',
    primaryText: '#303030',
    white: '#FFFFFF',
    background: '#FAFAFA',
    black: '#0B0B0B',
  },

  fontSize: {
    s: '1.5rem',
    m: '1.6rem',
    l: '1.8rem',
    xl: '2rem',
    '2xl': '2.4rem',
    '3xl': '3.4rem',
  },

  fontWeight: {
    light: 300,
    regular: 400,
    bold: 600,
    extrabold: 900,
  },

  border: {
    standard: '20px',
    light: '15px',
  },

  dimensions: {
    navbarHeight: '70px',
    mainContentWidth: '1100px',
    mainContentGap: '10rem',
    equipmentMargin: '6rem',
    equipmentGap: '4rem',
  },

  up: (breakpoint: string, vertical = false) =>
    `@media (min-${vertical ? 'height' : 'width'}: calc(${breakpoint} + 1px))`,
  down: (breakpoint: string, vertical = false) =>
    `@media (max-${vertical ? 'height' : 'width'}: ${breakpoint})`,
  between: (breakpointMin: string, breakpointMax: string, vertical = false) =>
    `@media (max-${vertical ? 'height' : 'width'}: ${breakpointMax}) and (min-${
      vertical ? 'height' : 'width'
    }: calc(${breakpointMin} + 1px))`,

  breakpoints: {
    l: '900px',
    m: '767px',
    s: '450px',
  },
} as const

export type MainThemeType = typeof mainTheme
export default mainTheme
