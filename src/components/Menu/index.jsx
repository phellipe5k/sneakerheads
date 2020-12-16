import * as S from './style';
import Navigation from '../Navigation';
import Logo from '../Logo';
import User from '../User';
import HeadSearchBar from '../HeadSearchBar';
import MenuMobile from '../MenuMobile';

const Menu = () => {
  return (
    <S.Wrapper>
      <S.Left>
        <Logo />
        <Navigation />
      </S.Left>
      <S.Right>
        <S.WrapperBar>
          <HeadSearchBar />
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
