import React from 'react'
import ReactModal from 'react-modal'
import Image from 'next/image'
import { ImagesGalleryProps } from '../ImagesGallery/ImagesGallery'
import {
  ImagesPreviewWrapper,
  MainImage,
  RestImages,
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
      contentLabel="podgląd zdjeć z tej realizacji"
      isOpen={isPreviewOpen}
      onRequestClose={() => handleClosePreview()}
      closeTimeoutMS={200}
    >
      <ImagesPreviewWrapper>
        <MainImage>
          <Image src={mainImageSrc as string} layout="fill" objectFit="contain" />
        </MainImage>
        <RestImages>
          {allImages?.map(({ src, id }) => (
            <SmallImageWrapper key={id} onClick={() => setMainImageSrc(src as string)}>
              <Image src={src as string} layout="fill" objectFit="contain" />
            </SmallImageWrapper>
          ))}
        </RestImages>
        <CloseButton onClick={() => handleClosePreview()} />
      </ImagesPreviewWrapper>
    </ReactModal>
  )
}

export default ImagesPreview
