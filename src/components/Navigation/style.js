import styled from 'styled-components';

export const WrapperNavigationD = styled.nav`
  width: 80%;
`;

export const Linkers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  a {
    font-size: 12pt;
    color: #656565;
    text-decoration: none;
    transition: 450ms;
    &:hover {
      border-bottom: 4px solid #0098FF;
    transition: 450ms;
    }
  }
`;