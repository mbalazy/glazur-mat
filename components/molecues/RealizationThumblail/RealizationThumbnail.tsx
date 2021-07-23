import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IRealizations } from '../../../generated/graphql'
import validateRealizationImage from '../../../lib/validateRealizationImage'
import style from './RealizationThumbnail.module.scss'

const RealizationThumbnail = ({ name, images, slug }: IRealizations) => {
  const firstImageSrc = () => validateRealizationImage(images)
  return (
    <Link href={`/realizacje/${slug?.current}`} passHref>
      <div className={style.realizationThumbnailWrapper}>
        <div className={style.imageWrapper}>
          <Image src={firstImageSrc()} layout="fill" objectFit="cover" alt="realizacja" />
        </div>
        <div className={style.decoratedLine} />
        <span className={style.realizationName}>{name}</span>
      </div>
    </Link>
  )
}

export default RealizationThumbnail
