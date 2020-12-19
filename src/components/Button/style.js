import styled, { css } from 'styled-components';

const SizesModified = {
    small: () => css`
    width: 30%;
    `,
    large: () => css`
    width: 100%;
    `,
    medium: () => css`
    width: 60%;
    `,
  }

export const Wrapper = styled.div`
${({ size }) => css`
 ${SizesModified[size]};
`}
`;

export const Button = styled.button`
${({ theme, styles }) => css`
  width: 100%;
  cursor: pointer;
  padding: ${theme.spacings.inside.huge};
  border-radius: ${theme.borderRadius.button};
  outline: none;
  transition: ${theme.transition.default};
  ${
  styles === 'primary'
  ? css`
      background-color: ${theme.colors.primary};
      border: none;
      color: ${theme.colors.secondary};
  `
  : css `
      color: ${theme.colors.textLight};
      background: none;
      border: ${theme.borderNoColor} ${theme.colors.textLight}; 
      &:hover {
        background-color: ${theme.colors.primary};
        border: none;
        color: ${theme.colors.secondary};
      }
  `
  }
`}

`;
