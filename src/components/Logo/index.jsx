import Image from 'next/image'
import * as S from './style';
import PropTypes from 'prop-types';

const Logo = ({ size }) => (
  <S.Wrapper>
    <S.Image src="logo.png" size={ size } />
  </S.Wrapper>
)


Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Logo.defaultProps = {
  size: 'medium',
};


export default Logo;
