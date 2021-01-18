import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/theme';

export const Wrapper = styled.div`
  ${({ theme, path }) => css`
    display: flex;
    // min-width: 980px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
`}`;


export const SneakerWrapper = styled.div`
  ${({ theme, path }) => css`
    width: 25%;
    min-width: 300px;
    margin: 2%;
    ${mediaQuery.lessThan('mobile')`
      min-width: 100%;
    `}
`}`;
