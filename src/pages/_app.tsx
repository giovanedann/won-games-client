import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'

import GlobalStyles from 'styles/global'
import { AppProps } from 'next/app'
import Head from 'next/head'
import theme from 'styles/theme'
import { useApollo } from 'infra/apollo/client'
import { CartProvider } from 'contexts/cart'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Won Games</title>
            <link rel="shortcut-icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="description"
              content="The game store that will surpass Steam, Epic, and every other store!"
            />
          </Head>
          <GlobalStyles />
          <NextNProgress
            color="#F231A5"
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </CartProvider>
    </ApolloProvider>
  )
}

export default App
