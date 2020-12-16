import styled, { css } from 'styled-components';

export const User = styled.div`
  align-items: center;
  color: #656565;
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
  .arrow-down {
    transition: 450ms;
    position: relative;
    z-index: 3;
    ${({visible}) => css`
    color: ${visible ? 'white' : '#656565' };
    &:hover {
      color: ${visible ? 'white' : '#0098ff' };
    }
    `}
  }
`;

export const DropDown = styled.div`

  background-color: #0098ff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: flex-end;
  left: 50%;
  padding: 10px;
  position: absolute;
  top: 10%;
  transform: translateX(-50%);
  transition: 450ms ease-in-out;
  ${({visible}) => css`
  z-index: ${visible ? '1' : '-1' };
  opacity: ${visible ? '1' : '0' };
  `}
  // visibility: ${({visible}) => visible ? 'visible' : 'hidden'};
  .user-solid, .sign-out {
    background-color: white;
    width: 25px;
    border-radius: 50%;
    margin-bottom: 15%;
      transition: 450ms;
    cursor: pointer;
    z-index: 2;
    &:hover {
      background-color: #656565;
      color: white;
      transition: 450ms;
    }
  }
`;
