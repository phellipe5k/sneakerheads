import styled, { css } from 'styled-components';

export const User = styled.div`
  ${({ theme, path }) => css`
  align-items: center;
  color: ${
    path.pathname !== '/' 
    ? theme.colors.textDark 
    : theme.colors.textLight
    };
  display: flex;
  font-size: ${theme.font.sizes.xmedium};
  justify-content: space-between;
  width: 100%;
  > svg:hover {
    cursor: pointer;
    fill: ${theme.colors.primary};
    transition: ${theme.transition.default};
  }
  `}
`;

export const WrapDrop = styled.div`
  position: relative;
`;

export const Name = styled.h5`
  ${({ theme, path }) => css`
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  padding: ${theme.spacings.inside.huge} 0;
  position: relative;
  transition: ${theme.transition.default};
  width: 80%;
  #arrow-down {
    position: relative;
    margin-right: 5px;
    z-index: ${theme.layers.menu};
    ${({visible}) => css`
    color: ${
    path.pathname !== '/' 
    ? theme.colors.textDark 
    : theme.colors.textLight
    };
    &:hover {
      color: ${visible ? theme.colors.secondary : theme.colors.primary };
    }
    `}
  }`}
`;

export const DropDown = styled.div`
  ${({theme, visible}) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.button};
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: flex-end;
    left: 50%;
    opacity: ${visible ? theme.layers.base : theme.layers.neutron };
    padding: calc(${theme.spacings.inside.huge} * 3);
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    transition: ${theme.transition.default};
    z-index: ${visible ? theme.layers.base : theme.layers.disappear };
    `
    }
  #user-solid, #sign-out {
    ${({ theme }) => css`
    color: ${theme.colors.secondary};
    padding: ${theme.spacings.inside.huge};
    cursor: pointer;
    margin-bottom: 15%;
    transition: ${theme.transition.default};
    width: ${ theme.icons.medium };
    z-index: ${theme.layers.dropDown};
    &:hover {
      color: ${theme.colors.textDark};
    }
  }
    `}
`;
