import React from 'react'
import ReactModal from 'react-modal'
import Image from 'next/image'
import { ImagesGalleryProps } from '../ImagesGallery/ImagesGallery'
import {
  ImagesPreviewWrapper,
  MainImage,
  RestImagesWrapper,
  SmallImageWrapper,
  CloseButton,
} from './ImagesPreview.style'

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
    <ReactModal
      contentLabel="podgląd zdjeć"
      isOpen={isPreviewOpen}
      onRequestClose={() => handleClosePreview()}
    >
      <ImagesPreviewWrapper>
        <CloseButton onClick={() => handleClosePreview()} />

        <MainImage>
          <Image src={mainImageSrc as string} layout="fill" objectFit="contain" />
        </MainImage>

        <RestImagesWrapper>
          {allImages?.map(({ src, id }) => (
            <SmallImageWrapper key={id} onClick={() => setMainImageSrc(src as string)}>
              <Image src={src as string} layout="fill" objectFit="contain" />
            </SmallImageWrapper>
          ))}
        </RestImagesWrapper>
      </ImagesPreviewWrapper>
    </ReactModal>
  )
}

export default ImagesPreview
