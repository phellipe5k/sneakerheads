import styled, { css } from 'styled-components';

export const WrapperSearchBar = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  #search-icon {
    ${({ theme, path }) => css`
      cursor: pointer;
      color: ${
        path.pathname !== '/' 
        ? theme.colors.textDark 
        : theme.colors.textLight
      };
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      transition: ${theme.transition.default};
      width: ${theme.icons.small};
      &:hover {
      fill: ${ theme.colors.primary };
      }
    `}
  }
`;

export const Bar = styled.input`
  ${({ theme, path }) => css`
  background: none;
  font-family: ${theme.font.family};
  border-radius: ${theme.borderRadius.input};
  border: ${theme.borderNoColor} ${theme.colors.textLight};
  height: 40px;
  outline: none;
  padding-left: 15px;
  transition: ${theme.transition.default};
  width: 100%;
  color: ${
    path.pathname !== '/' 
    ? theme.colors.textDark 
    : theme.colors.secondary
    };;

  &::placeholder {
    color: ${ theme.colors.textDark };
  }

  &:focus {
    border-color: ${ theme.colors.primary };
  }
  `}
`;