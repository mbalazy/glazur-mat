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
    xxl: '2.4rem',
    mega: '3.4rem',
  },

  dimensions: {
    navbarHeight: '8rem',
    superNavbarHeight: '12rem',
    mainContentWidth: '110rem',
    mainContentGap: '10rem',
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
    xl: '1200px',
    l: '900px',
    m: '767px',
    s: '480px',
  },
} as const

export type MainThemeType = typeof mainTheme
export default mainTheme
