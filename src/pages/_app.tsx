import GlobalStyles from 'styles/global'
import { AppProps } from 'next/app'
import Head from 'next/head'
import theme from 'styles/theme'
import { ThemeProvider } from 'styled-components'
import { useApollo } from 'graphql/client'
import { ApolloProvider } from '@apollo/client'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps)

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  )
}

export default App
