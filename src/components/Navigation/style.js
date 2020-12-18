import styled, { css } from 'styled-components';

const handlePath = (path) => {
  if (path) {
    console.log(path)
    switch (path.pathname) {
    case '/sneakers':
      return css`#sneaker { border-bottom: 5px solid #0098FF } `;
    case '/brands':
      return css`#brand { border-bottom: 5px solid #0098FF }`;
    case '/stores':
      return css`#store { border-bottom: 5px solid #0098FF }`;
    }
  }
};


export const WrapperNavigationD = styled.nav`
  width: 80%;
`;

export const Linkers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  ${({ path }) => {
    switch (path.pathname) {
    case '/sneakers':
      return css`#sneaker { border-bottom: 5px solid #0098FF } `;
    case '/brands':
      return css`#brand { border-bottom: 5px solid #0098FF }`;
    case '/stores':
      return css`#store { border-bottom: 5px solid #0098FF }`;
    }
  }
  }
  a {
    font-size: 12pt;
    color: #c4c4c4;
    text-decoration: none;
    transition: 450ms;
    font-weight: 400;
    &:hover {
      color: #0098FF;
    transition: 450ms;
    }
  }
`;