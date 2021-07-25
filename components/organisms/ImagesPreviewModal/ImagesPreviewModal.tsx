import React from 'react'
import ReactModal from 'react-modal'
type ImagesPreviewModalProps = {
  children: JSX.Element | JSX.Element[]
  handleClosePreview: () => void
  isPreviewOpen: boolean
}

const ImagesPreviewModal = ({
  handleClosePreview,
  isPreviewOpen,
  children,
}: ImagesPreviewModalProps) => {
  return (
    <ReactModal
      contentLabel="Podgląd zdjeć z tej realizacji"
      isOpen={isPreviewOpen}
      onRequestClose={() => handleClosePreview()}
      closeTimeoutMS={200}
      appElement={document.getElementById('__next') || {}}
    >
      {children}
    </ReactModal>
  )
}
export default ImagesPreviewModal
