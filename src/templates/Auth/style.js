import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/theme';

export const Wrapper = styled.div`
${({ theme }) => css`
    display: flex;
    min-height: 100vh;
`}
`;


export const Content = styled.div`
${({ theme }) => css`
    width: 65%;
    background-image: url('Login.png');
    background-position: left;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mediaQuery.lessThan('tablet')`
        display: none;
    `}
`}
`;


export const Title = styled.h1`
${({ theme }) => css`
    font-size: calc(${theme.font.sizes.title} - 10pt);
    color: ${theme.colors.secondary};
    width: 75%;
`}
`;

export const FormWrapper = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    ${mediaQuery.lessThan('tablet')`
        width: 100%;
        padding-left: 6%;
    `}
`;
