import React from 'react'
import Link from 'next/link'
import { LinkStyles, LinkStylesProp } from './Link.style'

type LinkProps = {
  href: string
  children: string
  onClick?: () => void
} & LinkStylesProp

const BaseLink = ({ href, children, ...rest }: LinkProps) => {
  return (
    <Link href={href} passHref>
      <LinkStyles {...rest}>{children}</LinkStyles>
    </Link>
  )
}

export default BaseLink
