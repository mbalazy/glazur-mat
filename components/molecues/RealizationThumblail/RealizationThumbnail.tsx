import Image from 'next/image'
import React from 'react'
import { IRealizations } from '../../../generated/graphql'
import validateRealizationImage from '../../../lib/validateRealizationImage'
import {
  DecoratedLine,
  ImageWrapper,
  RealizationName,
  RealizationThumbnailWrapper,
} from './RealizationThumbnail.style'

const RealizationThumbnail = ({ name, images }: IRealizations) => {
  const firstImageSrc = () => validateRealizationImage(images)
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
