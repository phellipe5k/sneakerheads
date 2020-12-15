import '../styles/globals.css';
import Provider from '../Provider/Provider';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <GlobalStyle />
       <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
