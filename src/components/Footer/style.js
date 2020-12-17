import styled from 'styled-components';

export const Box = styled.div`
  background-image: url('https://svgshare.com/i/SNW.svg');
  padding: 15px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  min-height: 320px;
  display: flex;
  align-items: flex-end;
  color: white;
  @media(max-width: 615px) {
    background-color: #0098FF;
    padding: 5%;
    height: 380px;
    align-items: baseline;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 30px;
  flex-wrap: wrap;
  @media(max-width: 615px) {
    padding: 5%;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width: 615px) {
    width: 50%;
  }
`

export const Title = styled.h3`
  font-weight: bold;
`;

export const Line = styled.div`
  width: 35px;
  height: 5px;
  background: white;
`;

export const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
`;

export const Itens = styled.a`
  text-decoration: none;
  color: white;
  font-weight: lighter;
  padding: 2% 0;
  list-style-position: outside;
  &:hover {
    color: #ccc;
    transition: 450ms;
  }
`; 