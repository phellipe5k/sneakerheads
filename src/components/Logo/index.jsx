import Image from 'next/image'
import * as S from './style';
import PropTypes from 'prop-types';

const Logo = ({ size }) => (
  <S.Wrapper>
    <S.Image src="https://cdn.dribbble.com/users/906391/screenshots/8978996/image.png?compress=1&resize=800x600" size={ size } />
  </S.Wrapper>
)


Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Logo.defaultProps = {
  size: 'medium',
};


export default Logo;
