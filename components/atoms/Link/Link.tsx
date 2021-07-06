import React from 'react'
import Link from 'next/link'
import { LinkStyles, LinkStylesProp } from './Link.style'

type LinkProps = {
  href: string
  children: string
} & LinkStylesProp

const BaseLink = ({ href, children, variant, ...props }: LinkProps) => {
  return (
    <Link href={href} {...props}>
      <LinkStyles variant={variant}>{children}</LinkStyles>
    </Link>
  )
}

export default BaseLink
