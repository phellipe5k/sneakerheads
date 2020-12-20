import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/theme';

export const Wrapper = styled.div`
  ${({ theme}) => css`
     width: 100%;
     padding: 5%;
  `}
`;

export const ChecksSection = styled.div`
  ${({ theme}) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
  `}
`;

export const Title = styled.h5`
  ${({ theme }) => css`
    display: inline-block;
    font-size: ${theme.font.sizes.xmedium};
    &:after {
      content:'';
      display: flex;
      width: 15%;
      height: 4px;
      background: ${theme.colors.primary};
    }
    margin: 15px 0;
  `}
`


export const StoreSection = styled.div`
  ${({ theme}) => css`
     
  `}
`;


export const BrandSection = styled.div`
  ${({ theme}) => css`
     
  `}
`;

export const Division = styled.div`
${({ theme }) => css`
  margin: 10% 0;
  width: 80%;
  background-color: ${theme.colors.textDark};
  height: 2px;
`}
`
