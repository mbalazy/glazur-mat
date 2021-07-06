import React from 'react'
import Link from 'next/link'
import { LinkStyles, LinkStylesProp } from './Link.style'

type LinkProps = {
  href: string
  children: string
} & LinkStylesProp

const BaseLink = ({ href, children, ...rest }: LinkProps) => {
  return (
    <Link href={href}>
      <LinkStyles {...rest}>{children}</LinkStyles>
    </Link>
  )
}

export default BaseLink
