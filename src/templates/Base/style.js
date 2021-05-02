import styled, {css} from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  ${({theme, path}) => {
    return path !== '/' && css`
    background-color: ${path === '/sneakers/[id]' ? theme.colors.secondary : theme.colors.background };
  `
  }}
`;

export const WrapHeader = styled.div``;

export const WrapFooter = styled.div``;