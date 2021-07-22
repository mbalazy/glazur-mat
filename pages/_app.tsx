import type { AppProps } from 'next/app'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { MobileMenuProvider } from '../lib/mobileMenuContext'
import mainTheme from '../theme/mainTheme'

import '@fontsource/im-fell-great-primer-sc'
import '@fontsource/montserrat'
import '../theme/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={mainTheme as DefaultTheme}>
      <MobileMenuProvider>
        <Component {...pageProps} />
      </MobileMenuProvider>
    </ThemeProvider>
  )
}
export default MyApp
