import styled, {css} from 'styled-components';
import { mediaQuery } from '../../styles/theme';
const createBorder = (theme, element) => {
  return css`
    #${element} {
      border-bottom: 5px solid ${theme.colors.primary};
    }
  `
}

const handleRoute = (theme, path) => {
  if (path) {
      switch (path.pathname) {
      case '/':
        return createBorder(theme, 'home');
      case '/sneakers':
        return createBorder(theme, 'sneakers');
      case '/brands':
        return createBorder(theme, 'brands');
      case '/stores':
        return createBorder(theme, 'stores');
      case '/perfil':
        return createBorder(theme, 'perfil');
    }
  }
}


export const Wrapper = styled.div`
  ${({ theme }) => css`
  display: none;
  width: 100%;
  height: 100vh;
  ${
  mediaQuery.lessThan("tablet")`
    display: flex;
    width: 100%;
    height: fit-content;
    align-items: flex-start;
    justify-content: space-between;
    color: ${theme.colors.textLight};
  `}
  `}
`;

export const WrapperIcons = styled.div`
  ${({ theme, path }) => css`
    display:flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 4%;

    overflow-y: hidden;
    color: ${
    path.pathname !== '/' 
    ? theme.colors.textDark 
    : theme.colors.textLight
    };
  `}
`;

export const MenuMobileOn = styled.div`
${({theme, show}) => css`
  position: fixed;
  width: 100%;
  background-color: ${theme.colors.secondary};
  height: 100%;
  padding: 0;
  display: ${show ? 'flex' : 'none' };
  transition: ${theme.transition.slow};
  z-index: ${show ? theme.layers.menu : theme.layers.disappear };
  opacity: ${show ? theme.layers.menu : theme.layers.neutron };
  flex-direction: column;
  justify-content: space-between;
  `}
`;

export const Navigation = styled.div`
  ${({ theme, path }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    margin: 20px 0;
    color: ${theme.colors.textDark};
    text-decoration: none;
    font-size: ${theme.font.sizes.xmedium};
    font-weight: ${theme.font.bold};
  }
  ${ handleRoute(theme, path) }
  `}
`;

export const Account = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    min-height: 100px;
    margin-bottom: 30px;
    color: ${theme.colors.textDark};
    a {
      color: ${theme.colors.primary};
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 0;
      margin: 0;
    }
  `}
`;

export const Favorites = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  ${({theme, existWish}) => {
    if (existWish) {
      return css`
        span {
          display: flex;
          align-items:center;
          justify-content: center;
          position: absolute;
          top: 55%;
          right: 2%;
          color: ${theme.colors.secondary};
          width: 20px;
          height: 20px;
          background-color: ${theme.colors.primary};
          z-index: ${theme.colors.neutron};
          border-radius: 50%;
          font-size: 8pt;
        }
      `
    }
  }}
`;