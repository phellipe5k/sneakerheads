import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/theme';

export const Box = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 999;
    align-items: flex-end;
    font-family: ${theme.font.family};
    background-image: url('https://svgshare.com/i/SNW.svg');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${theme.colors.secondary};
    display: flex;
    min-height: 320px;
    padding: ${theme.spacings.inside.small};
    width: 100%;
    ${mediaQuery.lessThan("mobile")`
      align-items: baseline;
      background-color: ${theme.colors.primary};
      height: 380px;
      padding: ${theme.spacings.inside.huge};
    `}
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 30px;
  flex-wrap: wrap;
  ${mediaQuery.lessThan("mobile")`
    padding: 5%;
  `}
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaQuery.lessThan("mobile")`
    width: 50%;
  `}
`

export const Title = styled.h3`
  font-weight: bold;
`;

export const Line = styled.div`
  ${({ theme }) => css`
  width: 35px;
  height: 5px;
  background: ${theme.colors.secondary};
  `}
`;

export const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
`;

export const Itens = styled.a`
  ${({ theme }) => css`
  text-decoration: none;
  color: ${theme.colors.secondary};
  font-weight: ${theme.font.light};
  padding: 2% 0;
  list-style-position: outside;
  transition: ${theme.transition.default};
  &:hover {
    color: ${theme.colors.textDark};
  }
  `}
`; 