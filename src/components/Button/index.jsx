import * as S from './style';
import PropTypes from 'prop-types';

const Button = ({ styles, size, children, onClick  }) => {
  return (
    <S.Wrapper size={size}>
      <S.Button onClick={ onClick } type="button" styles={ styles }>{ children }</S.Button>
    </S.Wrapper>
  ) 
};


Button.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    children: PropTypes.string,
    styles: PropTypes.oneOf(['primary', 'secondary']),
  };
  
Button.defaultProps = {
    size: 'medium',
    children: 'Botão',
    styles: 'primary',
};

export default Button;
