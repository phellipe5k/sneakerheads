import Link from 'next/link';
import Image from 'next/image'
import * as S from './style';
import PropTypes from 'prop-types';

const Logo = ({ size }) => (
  <Link href="/">
    <a>
      <S.Wrapper>
        <S.Image src="/logo.png" size={ size } />
      </S.Wrapper>
    </a>
  </Link>
)


Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Logo.defaultProps = {
  size: 'medium',
};


export default Logo;
