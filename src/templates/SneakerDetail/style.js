import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { mediaQuery } from '../../styles/theme';
import media from 'styled-media-query';

export const Container = styled(motion.div)`
  ${({theme, color}) => css`
    width: 100%;
    height: 700px;
    display: flex;
    #background {
      position: absolute;
      top: 0;
      right: -20px;
      path {
        fill: ${color};
      }
      circle {
        stroke: ${color};
      }
      // z-index: -1;
    }
    ${media.lessThan('huge')`
    #background {
      right: -60px;
      }
    `}
    ${media.lessThan('1300px')`
    #background {
      right: -80px;
      }
    `}
    ${media.lessThan('950px')`
    #background {
      right: -100%;
      top: 15%;
      }
      height: 1050px;
      flex-wrap: wrap;
    `}
    ${media.lessThan('430px')`
    #background {
      right: -100%;
      top: 45%;
      }
      height: 1100px;
      flex-wrap: wrap;
    `}
  `}
`;

export const WrapImagesGallery = styled(motion.div)`
  width: 15%;
  ${media.lessThan('950px')`
    width: 20%;
  `}
  ${media.lessThan('430px')`
    width: 100%;
    > div {
      flex-direction: row;
      > img {
        width: 25%;
        height: 70px;
      }
    }
  `}
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
    ${media.lessThan('950px')`
    top: -50px;
    right: 0;
    left: -50px;
  `}
    ${media.lessThan('430px')`
      left: -10px;
      top: -80px;
    `}
  `}
`;
export const ShoesWrapper = styled(motion.div)`
  width: 45%;
  // background: blue;
  position: relative;
  height: 480px;
  ${media.lessThan('950px')`
    width: 80%;
  `}
`

export const Void = styled(motion.div)`
  ${({theme, luminosity}) => css`
    color: ${luminosity === 'light1' || luminosity === 'light0' ? theme.colors.lightBg : theme.colors.darkBg};
    width: 40%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    padding: 3% 2%;
    justify-content: space-around;
    position: relative;
    height: 800px;
    ${media.lessThan('950px')`
    width: 100%;
    top: -100px;
  `}
  ${media.lessThan('420px')` 
    padding: 7%;
    top: -170px;
  `}
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
  height: 300px;
  ${media.lessThan('huge')`
      right: 80px;
    `}

  ${media.lessThan('1100px')`
     
      }
    `}
    ${media.lessThan('950px')`
    width: 100%;
    align-content: flex-start;
    height: 300px;
  `}
`;


export const Title = styled.h2`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: 400;
    ${media.lessThan('950px')`
    width: 70%;
    font-size: ${theme.font.sizes.medium};
  `}
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
    ${media.lessThan('950px')`
    width: 100%;
    font-size: ${theme.font.sizes.small};
  `}
  `}
`;


export const Release = styled.h5`
${({theme}) => css`
    font-size: ${theme.font.sizes.medium};
    margin: 2.5% 0;
    font-weight: ${theme.font.normal};
    ${media.lessThan('950px')`
    width: 100%;
    font-size: ${theme.font.sizes.small};
  `}
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
    ${media.lessThan('950px')`
    width: 100%;
    font-size: ${theme.font.sizes.small};
    span {
      font-size: ${theme.font.sizes.medium}
    }
  `}
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
export const WrapSizes = styled.div`
  display: flex;
  justify-content: center;
  width: 170%;
  align-self: flex-end;
  height: 20px;
  ${media.lessThan('1350px')`
      width: 200%;
    `}
    ${media.lessThan('1100px')`
      width: 250%;
    `}
    ${media.lessThan('950px')`
    width: 100%;
  `}
  `;
export const WrapSelect = styled.div`
  width: 15%;
  ${media.lessThan('950px')`
  width: 22%;
  `}
  ${media.lessThan('420px')`
  width: 35%;
  margin-bottom: 20px;
  > div {
    padding: 2%;
  }
  `}
`
export const Sizes = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 70%;
  top: -170px;
  h3 {
    font-size: 24pt;
    margin: 2% 0;
    font-weight: 400;
    margin: 2% 0;
  }
  ${media.lessThan('950px')`
  width: 100%;
`}
${media.lessThan('420px')`
  top: -190px;
  `}
`;

export const WrapDescription = styled.div`
  width: 150%;
  position: relative;
  align-self: flex-end;
  ${media.lessThan('1350px')`
      width: 180%;
    `}
    ${media.lessThan('1100px')`
      width: 200%;
    `}
`;

export const Description = styled.p`
  font-weight: lighter;
  font-size: 13pt;
  ${media.lessThan('420px')` 
    display: none;
  `}
`;

export const Stores = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 5% 0;
  ${media.lessThan('950px')`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  `}
`;

export const Boxes = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${media.lessThan('950px')`
  width: 50%;
  flex-direction: column;
  margin: 0;
  `}
`;

export const Logos = styled.img`
  width: 100px;
`;

export const Prices = styled.h5`
  font-size: 20pt;
  font-weight: 400;
`;


// 950 px