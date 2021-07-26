import React from 'react'
import Image from 'next/image'

type ImageContainFitProps = {
  src: string
  quality?: number
  alt?: string
}
const ImageContainFit = ({ src, alt, quality = 75 }: ImageContainFitProps) => {
  return <Image src={src} alt={alt} quality={quality} layout="fill" objectFit="contain" />
}
export default ImageContainFit
