import { css } from 'styled-components'

const mainTheme = {
  colors: {
    primary: '#D6A81A',
    secondary: '#DADAD8',
    tertinary: '#303030',
    primaryText: '#303030',
    white: '#FFFFFF',
    background: '#FAFAFA',
    black: '#0B0B0B',
    overlay: 'rgba(48, 48, 48, 0.9)',
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
    mainContentWidth: '120rem',
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

  boxShadow: '0px 34px 53px -7px rgba(0, 0, 0, 0.11)',
} as const

export type MainThemeType = typeof mainTheme
export default mainTheme

export const hoverEffect = css`
  transition: all 0.12s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02) translateY(-2px);
    box-shadow: 0px 36px 56px -8px rgba(0, 0, 0, 0.14);
  }
  &:active {
    transform: scale(1) translateY(0px);
    box-shadow: 0px 36px 56px -8px rgba(0, 0, 0, 0.1);
  }
`
