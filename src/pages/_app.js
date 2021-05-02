import Head from 'next/head';
import '../styles/globals.css';
import Provider from '../Provider/Provider';
import GlobalStyle from '../styles/global';
import { AnimatePresence } from "framer-motion"; 
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';


//  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
// <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
// <meta name="viewport" content="width=device-width, minimum-scale=1.0"></meta>
function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ThemeProvider  theme={theme}>
        <Head>
          <title>SneakerHeads</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        </Head>
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
