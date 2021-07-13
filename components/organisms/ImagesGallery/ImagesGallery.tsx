import Image from 'next/image'
import React from 'react'
import { validateRealizationProps } from '../../../lib/validateRealizationProps'
import BaseLink from '../../atoms/Link/Link'
import { ImageWrapper } from '../../molecues/RealizationThumblail/RealizationThumbnail.style'
import { GridWrapper } from '../../templates/GridWrapper.style'

type ImagesGalleryProps = {
  images: ReturnType<typeof validateRealizationProps>['images']
}

const ImagesGallery = ({ images }: ImagesGalleryProps) => {
  return (
    <>
      <GridWrapper>
        {images?.map(({ id, src }) => (
          <ImageWrapper key={id}>
            <Image src={src as string} layout="fill" objectFit="cover" />
          </ImageWrapper>
        ))}
      </GridWrapper>
      <BaseLink href="/realizacje">Powrót</BaseLink>
    </>
  )
}

export default ImagesGallery
