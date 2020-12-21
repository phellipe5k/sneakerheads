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
      right: -20px;
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
    ${media.lessThan('1300px')`
      > svg {
      right: -80px;
      }
    `}
  `}
`;


export const ImagesGallery = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  position: relative;
  z-index: 999;
`;

export const ImageGallery = styled.img`
  width: 100%;
`;

export const Shoes = styled.div`
  ${({theme, urls}) => css`
    background-image: url("${urls}");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    transform: rotate(-40deg) scaleX(-1) ;
    position: absolute;
    top: 0px;
    right: 70px;
    ${media.lessThan('huge')`
      right: 80px;
    `}
    @media(max-width: 1300px) {
      right: 50px;
      top: -50px;

    }
    ${media.lessThan('large')`
      right: 70px;
      top: -90px;
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
  ${({theme, luminosity}) => css`
    color: ${luminosity === 'light1' || luminosity === 'light0' ? theme.colors.lightBg : theme.colors.darkBg};
    width: 40%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    padding: 3% 2%;
  `}
`;

export const Info = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  text-align: right;
  align-items: flex-end;
  width: 75%;
`;


export const Title = styled.h2`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: 400;
  `}
`;

export const Colorway = styled.h5`
${({theme, luminosity}) => css`
    font-size: ${theme.font.sizes.medium};
    margin: 2.5% 0;
    color: ${luminosity === 'light1' || luminosity === 'light0' ? theme.colors.subLightBg : theme.colors.subDarkBg};
    // color: ${theme.colors.textLight};
    font-weight: ${theme.font.normal};
    width: 80%;
  `}
`;


export const Release = styled.h5`
${({theme}) => css`
    font-size: ${theme.font.sizes.medium};
    margin: 2.5% 0;
    font-weight: ${theme.font.normal};
  `}
`;


export const Retail = styled.h5`
${({theme}) => css`
    font-size: ${theme.font.sizes.medium};
    margin: 2.5% 0;
    font-weight: ${theme.font.normal};
    span {
      font-size: ${theme.font.sizes.xmedium}
    }
  `}`;



export const Favorite = styled.div`
  ${({ theme, favorited, luminosity }) => css`
    border: 2px solid ${luminosity === 'light1' || luminosity === 'light0' ? theme.colors.lightBg : theme.colors.darkBg};
    border-radius: ${theme.borderRadius.rounded};
    width: 38px;
    cursor: pointer;
    height: 38px;
    position: relative;
    #stroke {
      transition: ${theme.transition.fast};
      color: ${luminosity === 'light1' || luminosity === 'light0' ? theme.colors.lightBg : theme.colors.darkBg};
      // color: ${theme.colors.secondary};
      position: absolute;
      width: 23px;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      z-index: ${favorited ? theme.layers.disappear : theme.layers.base };
      opacity: ${favorited ? 0 : 1 };
    }
    #filled {
      transition: ${theme.transition.fast};
      color: ${luminosity === 'light1' || luminosity === 'light0' ? theme.colors.lightBg : theme.colors.darkBg};
      // color: ${theme.colors.secondary};
      position: absolute;
      width: 30px;
      top: 50%;
      left: 50%;
      opacity: ${!favorited ? 0 : 1 };
      transform: translateY(-50%) translateX(-50%);
      z-index: ${!favorited ? theme.layers.disappear : theme.layers.base };
    }
`}`;

export const Sizes = styled.div``;

export const WrapDescription = styled.div`
  width: 150%;
  position: relative;
  align-self: flex-end;
`;

export const Description = styled.p``;