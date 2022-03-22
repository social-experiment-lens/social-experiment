import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import Wrapper from '../components/hoc/Wrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Social Experiment</title>
      </Head>
      <ChakraProvider>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ChakraProvider>
    </>
  )
}

export default MyApp
