import React from 'react'
import Link from 'next/link'
import logo from '../../../public/glazurmat_logo.svg'
import { useMobileMenu } from '../../../hooks/useMobileMenu'

type LogoProps = {
  height?: number
  className?: string
}

const Logo = ({ height = 85, className }: LogoProps) => {
  const { setOpenMobileMenu } = useMobileMenu()
  return (
    <Link href="/">
      <a onClick={() => setOpenMobileMenu(false)} role="link">
        <img src={logo} alt="logo firmowe" height={height} className={className} />
      </a>
    </Link>
  )
}

export default Logo
