import React from 'react'
import ReactModal from 'react-modal'
import Image from 'next/image'
import { ImagesGalleryProps } from '../ImagesGallery/ImagesGallery'
import { ImagesPreviewWrapper, MainImage, RestImages } from './ImagesPreview.style'
import { ImageWrapper } from '../../molecues/RealizationThumblail/RealizationThumbnail.style'

type ImagesPreviewProps = {
  mainImageSrc: string | null
  allImages?: ImagesGalleryProps['images']
  setMainImageSrc: (src: string) => void
  handleClosePreview: () => void
  isPreviewOpen: boolean
}

const ImagesPreview = ({
  mainImageSrc,
  allImages,
  handleClosePreview,
  setMainImageSrc,
  isPreviewOpen,
}: ImagesPreviewProps) => {
  return (
    <ReactModal isOpen={isPreviewOpen}>
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
    </ReactModal>
  )
}

export default ImagesPreview
