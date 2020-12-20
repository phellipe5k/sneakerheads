import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme, path }) => css`
    width: 100%;
    padding: 10%;
    border-radius: 46px;
    font-family: ${theme.font.family};
    background: white;
    color: ${theme.colors.textDark};
    min-height: 350px;
`}`;

export const Content = styled.div`
  ${({ theme, path }) => css`
    
`}`;


export const TopPart = styled.div`
  ${({ theme, path }) => css`
    display: flex;
    justify-content: space-between;
`}`;

export const Favorite = styled.div`
  ${({ theme, favorited }) => css`
    background: ${theme.colors.textLight};
    border-radius: ${theme.borderRadius.rounded};
    width: 38px;
    cursor: pointer;
    height: 38px;
    position: relative;
    #stroke {
      transition: ${theme.transition.fast};
      color: ${theme.colors.secondary};
      position: absolute;
      width: 30px;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      z-index: ${favorited ? theme.layers.disappear : theme.layers.base };
      opacity: ${favorited ? 0 : 1 };
    }
    #filled {
      transition: ${theme.transition.fast};
      color: ${theme.colors.primary};
      position: absolute;
      width: 30px;
      top: 50%;
      left: 50%;
      opacity: ${!favorited ? 0 : 1 };
      transform: translateY(-50%) translateX(-50%);
      z-index: ${!favorited ? theme.layers.disappear : theme.layers.base };
    }
`}`;

export const ImageWrapper = styled.div`
  ${({ theme, path }) => css`
    
`}`;


export const Image = styled.img`
  ${({ theme, path }) => css`
    width: 100%;
`}`;

export const Info = styled.div`
  ${({ theme, path }) => css`
    display: flex;
    justify-content: space-between;
    height: fit-content;
`}`;


export const Name = styled.h3`
  ${({ theme, path }) => css`
    width: 53%;
    font-size: 1.0rem;
    font-weight: ${theme.font.normal};
`}`;

export const Price = styled.div`
  ${({ theme, path }) => css`
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.0rem;
    justify-content: space-between;
    font-weight: ${theme.font.normal};
`}`;

export const Store = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  top: -10px;
  img {
    width: 70%;
  }
`

export const SmallFont = styled.span`
  font-size: 0.8rem;
`