import styled, { css } from 'styled-components';

export const Select = styled.select`
  ${({ theme }) => css`
    width: 55%;
    cursor: pointer;
    transition: ${theme.transition.default};
    font-family: ${theme.font.family};
    padding: 2%;
    color: ${theme.colors.secondary};
    outline: none;
    border-radius: ${theme.borderRadius.button};
    background-color: ${theme.colors.primary};
    border: ${theme.borderNoColor} ${theme.colors.secondary};
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
    &:focus-within {
      opacity: 1;
    }
    option {
      background: ${theme.colors.secondary};
      color: ${theme.colors.primary};
    }
    appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4286 1C11.4286 0.609375 11.1049 0.285714 10.7143 0.285714H0.714286C0.323661 0.285714 0 0.609375 0 1C0 1.18973 0.078125 1.3683 0.212054 1.50223L5.21205 6.50223C5.34598 6.63616 5.52455 6.71429 5.71429 6.71429C5.90402 6.71429 6.08259 6.63616 6.21652 6.50223L11.2165 1.50223C11.3504 1.3683 11.4286 1.18973 11.4286 1Z" fill="white"/></svg>');
    background-repeat: no-repeat;
    background-position: right 8px center;

  `}
`;