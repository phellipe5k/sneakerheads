import * as S from './style';
import logo from '../../images/logo.png';
import PropTypes from 'prop-types';

const Logo = ({ size }) => (
  <S.Wrapper>
    <S.Image src={logo} size={ size } />
  </S.Wrapper>
)


Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Logo.defaultProps = {
  size: 'medium',
};


export default Logo;
