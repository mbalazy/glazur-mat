import React from 'react'
import Image from 'next/image'
import ClientOnlyPortal from '../../templates/ClientOnlyPortal'
import { ImagesGalleryProps } from '../ImagesGallery/ImagesGallery'
import { ImagesPreviewWrapper, MainImage, RestImages } from './ImagesPreview.style'
import { ImageWrapper } from '../../molecues/RealizationThumblail/RealizationThumbnail.style'

type ImagesPreviewProps = {
  mainImageSrc: string | null
  allImages?: ImagesGalleryProps['images']
  handleClosePreview: () => void
  setMainImageSrc: (src: string) => void
}

const ImagesPreview = ({
  mainImageSrc,
  allImages,
  handleClosePreview,
  setMainImageSrc,
}: ImagesPreviewProps) => {
  return (
    <ClientOnlyPortal>
      <ImagesPreviewWrapper>
        <button onClick={() => handleClosePreview()}>ZAMKNIJ</button>

        <MainImage>
          <Image src={mainImageSrc as string} layout="fill" objectFit="cover" />
        </MainImage>

        <RestImages>
          {allImages?.map(({ src, id }) => (
            <ImageWrapper key={id} onClick={() => setMainImageSrc(src as string)}>
              <Image src={src as string} layout="fill" objectFit="cover" />
            </ImageWrapper>
          ))}
        </RestImages>
      </ImagesPreviewWrapper>
    </ClientOnlyPortal>
  )
}

export default ImagesPreview
