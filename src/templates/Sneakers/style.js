import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/theme';

export const Wrapper = styled.div`

`;

export const LisWrapper = styled.div`
  ${({ theme, filterOn }) => css`
    transition: ${theme.transition.default};
    width: ${filterOn ? '75%' : '100%'};
    ${mediaQuery.lessThan('mobile')`
       padding: 5%;
       display: ${filterOn ? 'none' : 'block'};
  `}
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
  ${mediaQuery.lessThan('tablet')`
    width: 100%;
    flex-wrap: wrap;
  `}
`


export const Filtering = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
  ${mediaQuery.lessThan('tablet')`
    width: 100%;
    padding: 3%;
  `}
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
    ${mediaQuery.lessThan('tablet')`
        order: 1;
    `}
    ${mediaQuery.lessThan('mobile')`
        justify-content: flex-end;
        width: 50px;
      `}
    span {
      ${mediaQuery.lessThan('mobile')`
        display: none;
      `}
    }
  `}
`;


export const WrapperSearch = styled.div`
 ${({ theme, filterOn }) => css`
  transition: ${theme.transition.default};
    width: 27%;
    position: relative;
    right: ${filterOn ? '7%' : '0' };
    ${mediaQuery.lessThan('tablet')`
      width: 100%;
      right: 0;
      padding: 3%;
  `}
 `}
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content:space-evenly;
  width: 100%;
`

export const FilterWrapper = styled.div`
  ${({ theme, filterOn }) => css`
    transition: ${theme.transition.default};
    width: ${filterOn ? '20%' : '0'};
    opacity: ${filterOn ? '1' : '0'};
    z-index: ${filterOn ? theme.layers.base : theme.layers.disappear };
    position: relative;
    left: 25px;
    ${mediaQuery.lessThan('mobile')`
        background: ${theme.colors.secondary};
        position: absolute;
        top: 0;
        left: 0;
        max-heigth: 100vh;
        width: 100%;
        z-index: ${filterOn ? theme.layers.modal : theme.layers.disappear};
     `};
  `}
`;

export const Close = styled.div`
  display: none;
  ${mediaQuery.lessThan('mobile')`
    display: inline-block;
    position: relative;
    top: 20px;
  `};
  > svg {
    color: ${({theme}) => theme.colors.textDark};
  }
`;
