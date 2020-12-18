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
cursor: pointer;
padding: 10px;
outline: none;
${({styles}) => styles === 'primary'
? css`
  background-color: #0098FF;
  border-radius: 7px;
  border: none;
  color: white;
`
: css`
  color: #c4c4c4;
  background: none;
  border-radius: 15px;
  border: 2px solid #c4c4c4;
  transition: 450ms;
  &:hover {
    background-color: #0098ff;
    transition: 450ms;
    border: none;
    color: white;
  }
`
}

`;
