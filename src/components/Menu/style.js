import styled from 'styled-components';



export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  @media(max-width: 870px) {
    display: none;
  }
`;

export const Right = styled.div`
  width: 35%;
  height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 870px) {
    display: none;
  }

`;

export const WrapperBar = styled.div`
  width: 50%;
`;

export const WrapperUser = styled.div`
  width: 35%;
`;
