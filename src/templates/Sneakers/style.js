import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/theme';

export const Wrapper = styled.div`

`;

export const LisWrapper = styled.div`
  ${({ theme, filterOn }) => css`
  transition: ${theme.transition.default};
  width: ${filterOn ? '75%' : '100%'};
  `}
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`


export const InputContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`


export const Filtering = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
`;

export const Button = styled.button`
  ${({ theme, isFilter }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    outline: none;
    transition: ${theme.transition.fast};
    color: ${isFilter ? theme.colors.primary : theme.colors.textDark};
    border: none;
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    cursor: pointer;
    svg {
      width: 45px;
    }
    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    transition: ${theme.transition.default};
    font-family: ${theme.font.family};
    padding: 2%;
    color: ${theme.colors.secondary};
    outline: none;
    border-radius: ${theme.borderRadius.button};
    background-color: ${theme.colors.primary};
    border: ${theme.borderNoColor} ${theme.colors.secondary};
    opacity: 0.6;
    &:focus-within {
      opacity: 1;
    }
    option {
      background: ${theme.colors.secondary};
      color: ${theme.colors.primary};
    }
  `}
`;


export const WrapperSearch = styled.div`
 ${({ theme, filterOn }) => css`
  transition: ${theme.transition.default};
    width: 27%;
    position: relative;
    right: ${filterOn ? '7%' : '0' };
 `}
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content:space-evenly;
  width: 100%;
  // flex-wrap: wrap;
`
export const FilterWrapper = styled.div`
  ${({ theme, filterOn }) => css`
    transition: ${theme.transition.default};
    width: ${filterOn ? '20%' : '0'}
  `}
`