import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IRealizations } from '../../../generated/graphql'
import validateRealizationImage from '../../../lib/validateRealizationImage'
import { DecoratedLine, ImageWrapper, RealizationName } from './RealizationThumbnail.style'
import style from './RealizationThumbnail.module.scss'

const RealizationThumbnail = ({ name, images, slug }: IRealizations) => {
  const firstImageSrc = () => validateRealizationImage(images)
  return (
    <Link href={`/realizacje/${slug?.current}`} passHref>
      <div className={style.realizationThumbnailWrapper}>
        <ImageWrapper>
          <Image src={firstImageSrc()} layout="fill" objectFit="cover" alt="realizacja" />
        </ImageWrapper>
        <DecoratedLine />
        <RealizationName>{name}</RealizationName>
      </div>
    </Link>
  )
}

export default RealizationThumbnail
