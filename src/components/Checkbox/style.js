import styled, { css } from 'styled-components';
import { mediaQuery } from '../../styles/theme';

export const CheckWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 1% 0;
width: 100%;
${({ theme}) => css`
   input, label {
    cursor: pointer;
    width: 100%;
   }
   input + label:before {
    content:'';
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 3px;
    background: transparent;
    border: 3px solid ${theme.colors.textDark};
    transition: ${theme.transition.fast};
    margin-right: 10px;
    position: relative;
    top: 5px;
   }

   input:checked + label:before {
    background: ${theme.colors.primary};
    background-image: url('images/check.svg');
    background-size: 75%;
    background-position: center;
    background-repeat: no-repeat;
    border: 3px solid ${theme.colors.darkerPrimary};
   }
`}
`;

export const Checkbox = styled.input`
display: none;
width: 100%;
`;
