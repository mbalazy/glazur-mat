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
    return <p>no img</p>
  }
  const firstImgSrc = () => images[0]?.asset?.url || '/lazienka1.jpg'

  console.log(firstImgSrc())
  return (
    <RealizationThumbnailWrapper>
      <ImageWrapper>
        <Image src={firstImgSrc()} layout="fill" objectFit="cover" alt="realizacja" />
      </ImageWrapper>
      <DecoratedLine />
      <RealizationName>{name}</RealizationName>
    </RealizationThumbnailWrapper>
  )
}

export default RealizationThumbnail
