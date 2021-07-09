import Image from 'next/image'
import React from 'react'
import { IRealizations } from '../../../generated/graphql'
import {
  DecoratedLine,
  ImageWrapper,
  RealizationName,
  RealizationThumbnailWrapper,
} from './RealizationThumbnail.style'

const RealizationThumbnail = ({ name, images }: IRealizations) => {
  if (!images) {
    return <p>Brakuje zdjec</p>
  }
  const firstImageSrc = () => images[0]?.asset?.url || '/lazienka1.jpg'

  return (
    <RealizationThumbnailWrapper>
      <ImageWrapper>
        <Image src={firstImageSrc()} layout="fill" objectFit="cover" alt="realizacja" />
      </ImageWrapper>
      <DecoratedLine />
      <RealizationName>{name}</RealizationName>
    </RealizationThumbnailWrapper>
  )
}

export default RealizationThumbnail
