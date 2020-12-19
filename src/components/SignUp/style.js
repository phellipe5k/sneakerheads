import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xmedium};
    align-self: flex-start;
    border-bottom: 5px solid ${theme.colors.primary};
    margin: 3% 0;
    letter-spacing: 5px;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.lightBg};
  `}
`;

export const FormWrapper = styled.div`
  margin-bottom: 20px;
`;


export const Call = styled.div`
  ${({ theme }) => css`
  margin: 5%;
  a {
    color: ${theme.colors.lightBg};
    text-decoration: underline;
    &:hover {
      color: ${theme.colors.primary};
    }
    }
  `}
`;

