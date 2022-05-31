import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import { Global } from '@emotion/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Global styles={GlobalStyle} />
    </>
  )
}

export default MyApp
