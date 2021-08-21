// https://github.com/nghiaht/examples/tree/develop/with-fb

import { useEffect } from 'react'
import { init, cleanup } from './fbInit.js'

const FacebookChat = () => {
  useEffect(() => {
    init()

    return () => {
      cleanup()
    }
  }, [])

  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  )
}
export default FacebookChat
