import Head from 'next/head';
import '../styles/globals.css';
import Provider from '../Provider/Provider';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ThemeProvider  theme={theme}>
        <Head>
          <title>SneakerHeads</title>
          <meta name="viewport" content="width=device-width, minimum-scale=1.0"></meta>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
