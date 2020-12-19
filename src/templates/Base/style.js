import styled, {css} from 'styled-components';

export const Container = styled.div`
  ${({theme, path}) => {
    return path !== '/' && css`
    background-color: ${theme.colors.background};
  `
  }}
`;

export const WrapHeader = styled.div``;

export const WrapFooter = styled.div``;