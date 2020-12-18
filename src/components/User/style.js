import styled, { css } from 'styled-components';

export const User = styled.div`
  align-items: center;
  color: #c4c4c4;
  display: flex;
  font-size: 20pt;
  justify-content: space-between;
  width: 100%;
  > svg {
    transition: 450ms;
    &:hover {
      fill: #0098FF;
      cursor: pointer;
    }
  }
`;

export const WrapDrop = styled.div`
position: relative;
`;

export const Name = styled.h5`
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  padding: 3% 0;
  transition: 450ms;
  width: 80%;
  position:relative;
  #arrow-down {
    transition: 450ms;
    position: relative;
    margin-right: 5px;
    z-index: 3;
    ${({visible}) => css`
    color: ${visible ? 'white' : '#c4c4c4' };
    &:hover {
      color: ${visible ? 'white' : '#0098ff' };
    }
    `}
  }
`;

export const DropDown = styled.div`
  ${({visible}) => css`
    background-color: #0098ff;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: flex-end;
    left: 50%;
    padding: 10px;
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    transition: 450ms ease-in-out;
    z-index: ${visible ? '1' : '-1' };
    opacity: ${visible ? '1' : '0' };
    `
    }
  #user-solid, #sign-out {
    border-radius: 50%;
    color: white;
    cursor: pointer;
    margin-bottom: 15%;
    transition: 450ms;
    width: 25px;
    z-index: 2;
    &:hover {
      color: #656565;
      transition: 450ms;
    }
  }
`;
