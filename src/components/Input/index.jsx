import * as S from './style';
import PropTypes from 'prop-types';
import { Email, Lock } from '@styled-icons/material-outlined'

const Input = ({ type, icon, placeholder }) => {
  return (
    <S.Wrapper>
      <S.Icon>{icon}</S.Icon>
      <S.Input type={type} placeholder={placeholder} />
    </S.Wrapper>
  )
}



Input.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.node,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  icon: <Email />,
  placeholder: 'Email'
};

export default Input;
