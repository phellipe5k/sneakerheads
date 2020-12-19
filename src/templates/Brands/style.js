import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/theme';


export const Content = styled.div`
${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-height: 50vh;
    ${mediaQuery.lessThan('mobile')`
      flex-direction: column;
    `}
`}
`;


export const LogoWrapper = styled.div`
${({ theme }) => css`
  user-select: none;
  transition: ${theme.transition.fast};
  padding: 1% 2%;
  width: 12%;
  border-radius: ${theme.borderRadius.button};
  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.lightBg};
    img {
      filter: sepia(100%);
      filter: contrast(300%);
      transform: scale(1.1);
    }
  }
  ${mediaQuery.lessThan('mobile')`
      width: 35%;
      margin: 5% 0;
    `}
`}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    user-select: none;
    transition: ${theme.transition.fast};
    width: 100%;
  `}
`;

