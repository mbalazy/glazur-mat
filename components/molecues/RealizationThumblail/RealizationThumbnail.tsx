import Image from 'next/image'
import React from 'react'
import {
  DecoratedLine,
  ImageWrapper,
  RealizationName,
  RealizationThumbnailWrapper,
} from './RealizationThumbnail.style'

type RealizationThumbnailProps = {
  name: string
  image: string
}

const RealizationThumbnail = ({ name, image }: RealizationThumbnailProps) => {
  return (
    <RealizationThumbnailWrapper>
      <ImageWrapper>
        <Image src={image} layout="fill" objectFit="cover" />
      </ImageWrapper>
      <DecoratedLine />
      <RealizationName>{name}</RealizationName>
    </RealizationThumbnailWrapper>
  )
}

export default RealizationThumbnail
