import * as S from './style';
import Navigation from '../Navigation';
import Logo from '../Logo';
import User from '../User';
import MenuMobile from '../MenuMobile';
import HeaderSearchBar from '../HeaderSearchBar';

const Menu = () => {
  return (
    <S.Wrapper>
      <S.Left>
        <Logo />
        <Navigation />
      </S.Left>
      <S.Right>
        <S.WrapperBar>
            <HeaderSearchBar />
        </S.WrapperBar>
        <S.WrapperUser>
          <User />
        </S.WrapperUser>
      </S.Right>
      <MenuMobile />
    </S.Wrapper>
  )
}

export default Menu;
