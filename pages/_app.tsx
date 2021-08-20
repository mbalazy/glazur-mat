import React from 'react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { MobileMenuProvider } from '../lib/mobileMenuContext'
import GlobalStyle from '../theme/globalStyle'
import mainTheme from '../theme/mainTheme'
import SEO from '../next-seo.config'
import FacebookChat from '../components/organisms/FacebookChat/FacebookChat.jsx'

import '@fontsource/im-fell-great-primer-sc'
import '@fontsource/montserrat'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={mainTheme as DefaultTheme}>
      <MobileMenuProvider>
        <GlobalStyle />
        <Head>
          <html lang="pl-PL" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <FacebookChat />
      </MobileMenuProvider>
    </ThemeProvider>
  )
}
export default MyApp
