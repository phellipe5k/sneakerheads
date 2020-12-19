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
  ${({ theme }) => css`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  ${({ path }) => {
    return handlePath(theme, path);
  }
  }
  a {
    color: ${theme.colors.textLight};
    font-size: ${theme.font.sizes.small};
    font-weight: 400;
    text-decoration: none;
    transition: ${theme.transition.default};
    &:hover {
      color: ${theme.colors.primary}
    }
  }
  `}
`;