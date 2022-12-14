import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../src/redux/store';
import { ColorModeScript } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import theme from '../src/utils/theme';

export function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default wrapper.withRedux(App);
