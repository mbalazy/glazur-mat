import React from 'react'
import Image from 'next/image'

type ImageCoverFitProps = {
  src: string
  quality?: number
  alt?: string
  priority?: boolean
}
const ImageCoverFit = ({ src, alt, quality = 75, priority = false }: ImageCoverFitProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      quality={quality}
      layout="fill"
      objectFit="cover"
      priority={priority}
    />
  )
}
export default ImageCoverFit
