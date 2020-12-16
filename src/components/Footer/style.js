import styled from 'styled-components';
import img from '../../../public/footer.svg';

export const Box = styled.div`
  background-image: url(${img});
  padding: 15px;
  width: 100%;
  background-position: cover;
  min-height: 320px;
  display: flex;
  align-items: flex-end;
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 30px;
`;

export const InfoBox = styled.div`
display: flex;
flex-direction: column;
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
`;

export const Itens = styled.a`
text-decoration: none;
color: white;
font-weight: lighter;
padding: 2% 0;
list-style-position: outside;
`; 