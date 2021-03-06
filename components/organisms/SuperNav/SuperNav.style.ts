import styled, { css } from 'styled-components'
import Logo from '../../atoms/Logo/Logo'

export const SuperNavWrapper = styled.div`
  height: ${({ theme }) => theme.dimensions.superNavbarHeight};
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(7px);

  @supports not (backdrop-filter: blur(7px)) {
    background-color: rgba(255, 255, 255, 1);
  }

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      height: ${({ theme }) => theme.dimensions.superNavbarHeightOnMobile};
      position: fixed;
      z-index: 2;
      width: 100%;
    }
  `}
`
export const DesktopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 8%;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      & {
        display: none;
      }
    }
  `}
`
export const SuperNavInnerWrapper = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.xl)} {
      padding: 0 5%;
    }
    ${down(breakpoints.l)} {
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
  `}
`

export const LogoStyles = styled(Logo)`
  margin-right: 10%;
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.xl)} {
      margin-right: 5%;
    }
  `}
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      margin-left: 2rem;
      height: 50px;
    }
  `}
`
