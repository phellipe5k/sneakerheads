import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/theme';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({theme, color}) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    > svg {
      position: absolute;
      top: 0;
      right: 0;
      // z-index: -1;
    }
    > svg path {
      fill: ${color};
    }
    ${media.lessThan('huge')`
      > svg {
      right: -60px;
      }
    `}
  `}
`;


export const ImagesGallery = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
`;

export const ImageGallery = styled.img`
  width: 100%;
`;

export const Shoes = styled.div`
  ${({theme, urls}) => css`
    background-image: url("https://stockx.imgix.net/images/Nike-SB-Dunk-Low-Concepts-Purple-Lobster-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606322845");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: red;
    width: 100%;
    height: 100%;
    transform: rotate(-40deg) scaleX(-1) ;
    position: absolute;
    top: 0px;
    right: 70px;
    ${media.lessThan('huge')`
      right: 80px;
    `}
  `}
`;
export const ShoesWrapper = styled.div`
  width: 45%;
  // background: blue;
  position: relative;
  height: 480px;
`

export const Void = styled.div`
  width: 40%;
  // background: green;
`;
