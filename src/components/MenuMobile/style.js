import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  width: 100%;
  @media(max-width: 870px) {
      display: flex;
      width: 100%;
      align-items: flex-start;
      justify-content: space-between;
      color: #656565;
      .menu {
        cursor: pointer;
      }
    }
    padding: 0;
    height: 100vh;
`;

export const WrapperIcons = styled.div`
display:flex;
width: 100%;
justify-content: space-between;
`;
//absolute

export const MenuMobileOn = styled.div`
  position: absolute;
  width: 100%;
  background-color: white;
  height: 100vh;
  display: flex;
  ${({show}) => css`
  transition: 650ms;
  z-index: ${show ? '1' : '-1' };
  opacity: ${show ? '1' : '0' };
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
`;


export const Account = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  min-height: 100px;
  color: #656565;
  a {
    color: #0098FF;
  }
`;