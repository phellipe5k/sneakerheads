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
${({size}) => css`
 ${SizesModified[size]};
`}
`;

export const Button = styled.button`
width: 100%;
background-color: #0098FF;
padding: 10px;
border-radius: 7px;
border: none;
color: white;
cursor: pointer;
`;
