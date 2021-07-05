import React from 'react'
import Link from 'next/link'
import { LinkStyles } from './Link.style'

type LinkProps = {
  href: string
  children: string
  simpler?: boolean
}

const BaseLink = ({ href, children, simpler, ...props }: LinkProps) => {
  return (
    <Link href={href} {...props}>
      <LinkStyles simpler={simpler}>{children}</LinkStyles>
    </Link>
  )
}

export default BaseLink
