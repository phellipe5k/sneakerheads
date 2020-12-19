import styled from 'styled-components';
import { mediaQuery } from '../../styles/theme';


export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 4%;
  ${mediaQuery.lessThan('tablet')`
    padding: 0;
  `}
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  ${mediaQuery.lessThan('tablet')`
    display: none;
  `}
`;

export const Right = styled.div`
  width: 35%;
  height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mediaQuery.lessThan('tablet')`
    display: none;
  `}

`;

export const WrapperBar = styled.div`
  width: 50%;
`;

export const WrapperUser = styled.div`
  width: 35%;
`;