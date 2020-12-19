import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/theme';

export const Wrapper = styled.div`
  width: 110%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Input = styled.input`
  ${({theme}) => css`

    font-family: ${theme.font.family};
    outline: none;
    font-size: ${theme.font.sizes.small};
    border-radius: ${theme.borderRadius.input};
    padding: calc(${theme.spacings.inside.huge} - 1%);
    margin: 2% 0;
    padding-left: 3.2rem;
    width: calc(100% - 2.2rem);
    position: relative;
    right: 2.2rem;
    background: none;
    z-index: 0;
    border: ${theme.borderNoColor} ${theme.colors.primary};
    color: ${theme.colors.textDark};
    &::placeholder {
      color: ${theme.colors.textDark};
    }
  `}

`;

export const Icon = styled.div`
  ${({theme}) => css`
  display: inline;
    svg {
      width: 2.2rem;
      color: ${theme.colors.textDark};
      position: relative;
      left: 8px;
    }
  `}
`;