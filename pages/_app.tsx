import type { AppProps } from 'next/app'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/globalStyle'
import mainTheme from '../theme/mainTheme'

import '@fontsource/im-fell-great-primer-sc'
import '@fontsource/montserrat'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={mainTheme as DefaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
