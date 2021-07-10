import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IRealizations } from '../../../generated/graphql'
import validateRealizationImage from '../../../lib/validateRealizationImage'
import {
  DecoratedLine,
  ImageWrapper,
  RealizationName,
  RealizationThumbnailWrapper,
} from './RealizationThumbnail.style'

const RealizationThumbnail = ({ name, images, slug }: IRealizations) => {
  const firstImageSrc = () => validateRealizationImage(images)
  return (
    <Link href={`/realizacje/${slug?.current}`}>
      <RealizationThumbnailWrapper>
        <ImageWrapper>
          <Image src={firstImageSrc()} layout="fill" objectFit="cover" alt="realizacja" />
        </ImageWrapper>
        <DecoratedLine />
        <RealizationName>{name}</RealizationName>
      </RealizationThumbnailWrapper>
    </Link>
  )
}

export default RealizationThumbnail
