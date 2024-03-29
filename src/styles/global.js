import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: local('Poppins Light'), local('Poppins-Light'),
          url('/fonts/poppins-v12-latin-300.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Poppins Regular'), local('Poppins-Regular'),
          url('/fonts/poppins-v12-latin-regular.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
          url('/fonts/poppins-v12-latin-600.woff2') format('woff2');
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, .__next {
    font-family: 'Poppins' sans-serif;
  }
  @media screen and (max-width: 425px) {
    body {
        // overflow: hidden !important;
    }
}
`;

export default GlobalStyle;