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
  width: 15%;
  border-radius: ${theme.borderRadius.button};
  &:hover {
    cursor: pointer;
    img {
      filter: grayscale(0);
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
    filter: grayscale(100%);

  `}
`;

