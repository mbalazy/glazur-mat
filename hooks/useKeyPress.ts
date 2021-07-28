import { useEffect, useState } from 'react'

export function useKeyPress(targetKey: string, onPressDown = () => {}) {
  const [keyPressed, setKeyPressed] = useState(false)
  useEffect(() => {
    function downHandler({ key }: { key: string }) {
      if (key === targetKey) {
        setKeyPressed(true)
        onPressDown()
      }
    }
    window.addEventListener('keydown', downHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  })

  return keyPressed
}
