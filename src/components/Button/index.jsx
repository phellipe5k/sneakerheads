import * as S from './style';
import PropTypes from 'prop-types';

const Button = ({ size, children  }) => {
  return (
    <S.Wrapper size={size}>
      <S.Button type="button">{ children }</S.Button>
    </S.Wrapper>
  ) 
};


Button.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    children: PropTypes.string,
  };
  
Button.defaultProps = {
    size: 'medium',
    children: 'Botão',
};

export default Button;
