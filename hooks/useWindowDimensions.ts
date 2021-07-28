import { useEffect, useState } from 'react'

type WindowDimentions = {
  width: number | undefined
  height: number | undefined
  isOnDesktop?: boolean
}

const useWindowDimensions = (): WindowDimentions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return (): void => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return { ...windowDimensions, isOnDesktop: windowDimensions!.width! >= 900 }
}

export default useWindowDimensions
