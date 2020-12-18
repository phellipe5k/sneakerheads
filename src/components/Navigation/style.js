import styled, { css } from 'styled-components';

const underLine = (theme, route) => {
  return css`
    #${route} {
      position: relative;
      ::after {
        content: '';
        background-color: ${theme.colors.primary};
        width: 40%;
        height: 4px;
        position: absolute;
        bottom: -5px;
        left: 0;
      }
    } 
    
  `
}

const handlePath = (theme, path) => {
  if (path) {
    switch (path.pathname) {
    case '/sneakers':
      return underLine(theme, 'sneaker');
    case '/brands':
      return underLine(theme, 'brand');
    case '/stores':
      return underLine(theme, 'store');
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
  ${({ theme, path }) => {
    return handlePath(theme, path);
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