import styled, { css } from 'styled-components';

export const WrapperSearchBar = styled.div`
  ${({ theme, path, type }) => css`
  position: relative;
  display: inline-block;
  width: 100%;

  #search-icon {
        ${(type !== 'primary') 
      ? css`
        color: ${theme.colors.secondary};
        &:hover {
          fill: ${ theme.colors.textLight };
        }
      `
      : css`
        color: ${
          path.pathname !== '/' 
          ? theme.colors.textDark 
          : theme.colors.textLight
        };
        &:hover {
          fill: ${ theme.colors.primary };
        }
      `}
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      transition: ${theme.transition.fast};
      width: ${theme.icons.small};
    }
  `}
`;

export const Bar = styled.input`
  ${({ theme, path, typeBar }) => css`
  ${(typeBar !== 'primary') 
  ? css`
    background: ${theme.colors.primary};
    border: ${theme.borderNoColor} ${theme.colors.secondary};
    color: ${theme.colors.secondary};
    &::placeholder {
      color: ${ theme.colors.secondary };
    }
    border-radius: ${theme.borderRadius.button};
    padding: 20px 0;
    opacity: 0.6;
    &:focus-within {
    opacity: 1;
    }
  `
  : css`
    background: none;
    border: ${theme.borderNoColor} ${theme.colors.textLight};
    color: ${
    path.pathname !== '/' 
    ? theme.colors.textDark 
    : theme.colors.secondary
    };
     &::placeholder {
      color: ${ theme.colors.textDark };
    }
    border-radius: ${theme.borderRadius.input};
  `
  }
  font-family: ${theme.font.family};
  height: 40px;
  outline: none;
  padding-left: 15px;
  transition: ${theme.transition.fast};
  width: 100%;

  &:focus {
    border-color: ${ theme.colors.primary };
  }
  `}
`;