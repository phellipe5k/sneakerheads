import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  width: 100%;
  @media(max-width: 870px) {
      display: flex;
      width: 100%;
      height: fit-content;
      align-items: flex-start;
      justify-content: space-between;
      color: #c4c4c4;
      #menu {
        cursor: pointer;
      }
    }
    height: 100vh;
`;

export const WrapperIcons = styled.div`
  display:flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 4%;
`;
//absolute

export const MenuMobileOn = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  ${({show}) => css`
  transition: 650ms;
  z-index: ${show ? '2' : '-1' };
  opacity: ${show ? '2' : '0' };
  `}
  flex-direction: column;
  justify-content: space-between;
  > svg {
    cursor: pointer;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    margin: 20px 0;
    color: #656565;
    text-decoration: none;
    font-size: 20pt;
    font-weight: bold;
  }
  ${({ path }) => {
    if (path) {
      switch (path.pathname) {
      case '/':
        return css` #home { border-bottom: 5px solid #0098FF } `;
      case '/sneakers':
        return css`#sneakers { border-bottom: 5px solid #0098FF } `;
      case '/brands':
        return css`#brands { border-bottom: 5px solid #0098FF }`;
      case '/stores':
        return css`#stores { border-bottom: 5px solid #0098FF }`;
      case '/perfil':
        return css`#perfil { border-bottom: 5px solid #0098FF }`;
    }
  }
    }
    }
`;

export const Account = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  min-height: 100px;
  margin-bottom: 30px;
  color: #656565;
  a {
    color: #0098FF;
  }
`;

export const Favorites = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  ${({existWish}) => {
    if (existWish) {
      return css`
        span {
          display: flex;
          align-items:center;
          justify-content: center;
          position: absolute;
          top: 55%;
          right: 2%;
          color: white;
          width: 20px;
          height: 20px;
          background-color: #0098ff;
          z-index: 0;
          border-radius: 50%;
          font-size: 8pt;
        }
      `
    }
  }}
`;