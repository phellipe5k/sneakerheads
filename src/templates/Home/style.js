import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/theme';
export const Background = styled.div`
  background-image: url('wallpaper.jpg');
  background-position: center;
  background-size: cover;
  height: 140vh;
  position:absolute;
  top: 0;
  width: 100%;
  z-index: -2;
`;

export const BackgroundMask = styled.div`
  background: rgb(64,66,68,89%);
  height: 140vh;
  position:absolute;
  top: 0;
  width: 100%;
  z-index: -2;
`;

export const Content = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mediaQuery.lessThan("tablet")`
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 7% 0;
  `}
`;

export const Slogan = styled.h2`
 ${({theme}) => css`
  color: #EAEAEA;
    cursor: default;
    font-size: ${theme.font.sizes.subtitle};
    font-weight: ${theme.font.light};
    height: 50%;
    width: 18%;
    ${mediaQuery.lessThan('tablet')`
      width: 100%;
      text-align: center;
      margin-top: 50px;
      margin-bottom: 100px;
      font-size: ${theme.font.sizes.xmedium};
      height: fit-content;
      order: 1;
    `}
 `}
`;

export const Interact = styled.div`
  ${({theme}) => css`
    color: ${theme.colors.textLight};
    width: 30%;
    height: 70%;
    ${mediaQuery.lessThan('tablet')`
      width: 80%;
      order: 0;
      height: fit-content;
    `}
  `}
`;

export const Title = styled.h1`
  ${({theme }) => css`
    cursor: default;
    font-size: ${theme.font.sizes.title};
    letter-spacing: 10px;
    margin-bottom: 25px;
    text-align: center;
    font-weight: ${theme.font.bold};
    ${mediaQuery.lessThan('tablet')`
      font-size: 50pt;
    `}
  `}
`;

export const Social = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  position: relative;
  width: 20%;
  z-index: ${({theme}) => theme.layers.base};
  ${mediaQuery.lessThan('tablet')`
      order: 2;
      width: 100%;
      height: fit-content;
      flex-direction: row;
      justify-content: space-evenly;
    `}
`;
export const Line = styled.div`
  ${({theme}) => css`
    background-color: ${theme.colors.textDark};
    border-radius: ${theme.borderRadius.rounded}; 
    height: 100%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 4px;
    z-index: ${theme.layers.disappear};
    ${mediaQuery.lessThan('tablet')`
      width: 100%;
      height: 4px;
    `}
  `}
`;


export const IconWrapper = styled.div`
  ${({ theme }) => css`
  background-color: ${theme.colors.secondary};
  border-radius: ${theme.borderRadius.rounded};
  cursor: pointer;
  padding: ${theme.spacings.inside.medium};
  transition: ${theme.transition.default};
  svg {
    fill: ${theme.colors.primary};
  }
  &:hover {
    background-color: ${theme.colors.primary};
    transform: scale(1.1);
    svg {
      fill: ${theme.colors.secondary};
    }
  }
  `}
`;