import * as S from './style';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Logo from '../Logo';
import User from '../User';
import MenuMobile from '../MenuMobile';
import HeaderSearchBar from '../HeaderSearchBar';

const Menu = ({ logged }) => {
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.Left>
        <Logo />
        <Navigation />
      </S.Left>
      <S.Right>
        <S.WrapperBar>
            { router.pathname !== '/' && <HeaderSearchBar />  }
        </S.WrapperBar>
        <S.WrapperUser>
          <User logged={ logged } />
        </S.WrapperUser>
      </S.Right>
      <MenuMobile logged={ logged } />
    </S.Wrapper>
  )
}


Menu.propTypes = {
  logged: PropTypes.bool,
};

Menu.defaultProps = {
  logged: false,
};

export default Menu;
