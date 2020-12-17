import styled from 'styled-components';

export const Background = styled.div`
  background-image: url('https://wallpapercave.com/wp/wp6053187.jpg');
  background-position: center;
  background-size: cover;
  height: 140vh;
  position:absolute;
  top: 0;
  width: 100%;
  z-index: -2;
`;

export const BackgroundMask = styled.div`
  background: rgb(64,66,68,89%);
  height: 140vh;
  position:absolute;
  top: 0;
  width: 100%;
  z-index: -2;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  padding: 10% 0;
  align-items: center;
  justify-content: space-around;
  @media(max-width: 870px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const Slogan = styled.h2`
  color: #EAEAEA;
  cursor: default;
  font-size: 30pt;
  width: 18%;
  font-weight: 300;
  height: 50%;
  @media(max-width: 870px) {
    width: 100%;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 100px;
    font-size: 20pt;
    height: fit-content;
    order: 1;
  }
`;

export const Interact = styled.div`
  color: #E9E9E9;
  width: 30%;
  height: 70%;
  @media(max-width: 870px) {
    width: 80%;
    order: 0;
    height: fit-content;
  }
`;

export const Title = styled.h1`
  cursor: default;
  font-size: 70pt;
  letter-spacing: 10px;
  margin-bottom: 25px;
  text-align: center;
  font-weight: 5 00;
  @media(max-width: 870px) {
    font-size: 50pt;
  }
`;

export const Social = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  position: relative;
  width: 20%;
  z-index: 1;
  @media(max-width: 870px) {
    order: 2;
    width: 100%;
    height: fit-content;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
export const Line = styled.div`
  background-color: grey;
  border-radius: 100%; 
  height: 100%;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 4px;
  z-index: -1;
  @media(max-width: 870px) {
    width: 100%;
    height: 4px;
  }
`;

export const IconWrapper = styled.div`
  background-color: white;
  border-radius: 50%;
  padding: 7px;
  cursor: pointer;
  transition: 450ms;

  svg {
    fill: #0098FF;
  }

  &:hover {
    background-color: #0098FF;
    transition: 450ms;
    transform: scale(1.1);
    svg {
      fill: white;
      transition: 450ms;
    }
  }
`;