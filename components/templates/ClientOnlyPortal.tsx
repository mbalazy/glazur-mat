import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export const GALLERY_MODAL_ID = 'gallery-modal'

type ClientOnlyPortalProps = {
  children: JSX.Element | JSX.Element[]
}

export default function ClientOnlyPortal({ children }: ClientOnlyPortalProps) {
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    ref.current = document.querySelector(`#${GALLERY_MODAL_ID}`)
    setMounted(true)
  }, [])

  return mounted ? createPortal(children, ref.current as Element) : null
}
