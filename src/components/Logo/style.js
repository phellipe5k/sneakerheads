import styled, { css } from 'styled-components';

const SizesModified = {
  small: () => css`
  width: 40px;
  `,
  large: () => css`
  width: 100px;
  `,
  medium: () => css`
  width: 75px;
  `,
}


export const Wrapper = styled.div`
  padding: 1.5rem;
`;

export const Image = styled.img`
  ${({ size, src }) => css`
  src: url(${src});
  ${SizesModified[size]};
  `}
`;