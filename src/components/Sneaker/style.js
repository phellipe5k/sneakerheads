import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme, path }) => css`
    width: 100%;
    padding: 2% 1.5%;
    border-radius: 46px;
    font-family: ${theme.font.family};
    background: white;
    color: ${theme.colors.textDark};
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
  ${({ theme, path }) => css`
    background: ${theme.colors.textLight};
    padding: 2%;
    border-radius: ${theme.borderRadius.rounded};
    width: 38px;
    svg {
      color: ${theme.colors.secondary};
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
    font-size: 1.1rem;
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