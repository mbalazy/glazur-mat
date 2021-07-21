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
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [mainImageSrc, setMainImageSrc] = useState<string | null>(null)

  const handleOpenPreview = (src: string) => {
    setMainImageSrc(src)
    setIsPreviewOpen(true)
  }

  const { isOnDesktop } = useWindowDimensions()

  return (
    <>
      <GridWrapper isFullWidth={true}>
        {images?.map(({ id, src }) => (
          <GalleryImageStyles as="button" key={id} onClick={() => handleOpenPreview(src as string)}>
            <Image src={src as string} layout="fill" objectFit="cover" />
          </GalleryImageStyles>
        ))}
      </GridWrapper>

      {isOnDesktop && (
        <ImagesPreview
          isPreviewOpen={isPreviewOpen}
          allImages={images}
          mainImageSrc={mainImageSrc}
          setMainImageSrc={setMainImageSrc}
          handleClosePreview={() => setIsPreviewOpen(false)}
        />
      )}
    </>
  )
}

export default ImagesGallery
