import React from 'react'
import Link from 'next/link'
import { LinkStyles } from './Link.style'

type LinkProps = {
  href: string
  children: string
}

const BaseLink = ({ href, children, ...props }: LinkProps) => {
  return (
    <Link href={href} {...props}>
      <LinkStyles>{children}</LinkStyles>
    </Link>
  )
}

export default BaseLink
