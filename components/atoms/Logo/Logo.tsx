import React from 'react'
import Link from 'next/link'
import logo from '../../../public/glazurmat_logo.svg'
import { useMobileMenu } from '../../../hooks/useMobileMenu'
import { StyledLogoButton } from './Logo.style'

type LogoProps = {
  height?: number
  className?: string
}

const Logo = ({ height = 85, className }: LogoProps) => {
  const { setOpenMobileMenu } = useMobileMenu()
  return (
    <Link href="/">
      <StyledLogoButton
        onClick={() => setOpenMobileMenu(false)}
        role="link"
        aria-label="przejdź na stronę główną"
      >
        <img
          src={logo}
          alt="logo firmowe, trzy domki z nazwą firmy"
          height={height}
          className={className}
        />
      </StyledLogoButton>
    </Link>
  )
}

export default Logo
