import * as S from './style';
import Navigation from '../Navigation';
import Logo from '../Logo';
import { MenuAlt1 } from '@styled-icons/heroicons-outline/MenuAlt1';
import User from '../User';
import { User as UserSolid } from '@styled-icons/boxicons-solid/User';
import { SignInAlt } from '@styled-icons/fa-solid/SignInAlt';
import { BookmarkStarFill } from '@styled-icons/bootstrap/BookmarkStarFill';
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow';
import MenuSearchBar from '../MenuSearchBar';

const Menu = () => {
  return (
    <S.Wrapper>
      <S.Left>
        <Logo />
        <Navigation />
      </S.Left>
      <S.Right>
        <S.WrapperBar>
          <MenuSearchBar />
        </S.WrapperBar>
        <S.WrapperUser>
          <User />
        </S.WrapperUser>
      </S.Right>
    </S.Wrapper>
  )
}

export default Menu;
