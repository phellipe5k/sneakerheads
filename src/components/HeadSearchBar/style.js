import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  .search-icon {
    cursor: pointer;
    fill: #656565;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    transition: 450ms;
    width: 25px;
    &:hover {
    fill: #0098FF;
    transition: 450ms;
    }
  }
`;

export const Bar = styled.input`
  background: none;
  border-radius: 15px;
  border: 2px solid #c4c4c4;
  height: 29px;
  outline: none;
  padding-left: 15px;
  transition: 450ms;
  width: 100%;

  &::placeholder {
    color: #656565;
  }

  &:focus {
    border-color: #0098FF;
    transition: 450ms;
  }
`;