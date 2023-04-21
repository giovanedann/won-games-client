import GlobalStyles from 'styles/global'
import { AppProps } from 'next/app'
import Head from 'next/head'
import theme from 'styles/theme'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
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
          <Component {...pageProps} />
        </ThemeProvider>
      </CartProvider>
    </ApolloProvider>
  )
}

export default App
