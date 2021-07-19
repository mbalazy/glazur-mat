import Image from 'next/image'
import React, { useState } from 'react'
import { validateRealizationProps } from '../../../lib/validateRealizationProps'
import { ImageWrapper } from '../../molecues/RealizationThumblail/RealizationThumbnail.style'
import { GridWrapper } from '../../templates/GridWrapper.style'
import ImagesPreview from '../ImagesPreview/ImagesPreview'

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

  return (
    <>
      <GridWrapper>
        {images?.map(({ id, src }) => (
          <ImageWrapper key={id} onClick={() => handleOpenPreview(src as string)}>
            <Image src={src as string} layout="fill" objectFit="cover" />
          </ImageWrapper>
        ))}
      </GridWrapper>

      <ImagesPreview
        isPreviewOpen={isPreviewOpen}
        allImages={images}
        mainImageSrc={mainImageSrc}
        setMainImageSrc={setMainImageSrc}
        handleClosePreview={() => setIsPreviewOpen(false)}
      />
    </>
  )
}

export default ImagesGallery
