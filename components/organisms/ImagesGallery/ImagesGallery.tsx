import Image from 'next/image'
import React, { useState } from 'react'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { validateRealizationProps } from '../../../lib/validateRealizationProps'
import { GridWrapper } from '../../templates/GridWrapper.style'
import ImagesPreview from '../ImagesPreview/ImagesPreview'
import { GalleryImageStyles } from './ImagesGallery.style'

export type ImagesGalleryProps = {
  images: ReturnType<typeof validateRealizationProps>['images']
}

const ImagesGallery = ({ images }: ImagesGalleryProps) => {
  if (!images) return <p>Brak zdjęć</p>

  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [mainImageIndex, setMainImageIndex] = useState<number>(0)

  const handleOpenPreview = (idx: number) => {
    setMainImageIndex(idx)
    setIsPreviewOpen(true)
  }

  const { isOnDesktop } = useWindowDimensions()

  return (
    <>
      <GridWrapper isFullWidth={true}>
        {images.map(
          ({ id, src }, index) =>
            src && (
              <GalleryImageStyles as="button" key={id} onClick={() => handleOpenPreview(index)}>
                <Image src={src} layout="fill" objectFit="cover" />
              </GalleryImageStyles>
            )
        )}
      </GridWrapper>

      {isOnDesktop && (
        <ImagesPreview
          isPreviewOpen={isPreviewOpen}
          allImages={images}
          mainImageIndex={mainImageIndex}
          setMainImageIndex={setMainImageIndex}
          handleClosePreview={() => setIsPreviewOpen(false)}
        />
      )}
    </>
  )
}

export default ImagesGallery
