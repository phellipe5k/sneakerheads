import styled from 'styled-components';

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
    &:hover {
      color: #0098ff
    }
  }
`;

export const DropDown = styled.div`
  background-color: #0098ff;
  display: flex;
  flex-direction: column;
  height: 75px;
  justify-content: flex-end;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 10%;
  z-index: -1;
  border-radius: 6px;
  .user-solid {
    margin-bottom: 15%;
  }
`;