import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/theme';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  ${({ theme, path }) => css`
    display: flex;
    // min-width: 980px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
`}`;


export const SneakerWrapper = styled(motion.div)`
  ${({ theme, path }) => css`
    width: 25%;
    min-width: 300px;
    margin: 2%;
    ${mediaQuery.lessThan('mobile')`
      min-width: 100%;
    `}
`}`;
