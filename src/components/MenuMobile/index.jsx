import * as S from './style';
import { MenuAlt1 } from '@styled-icons/heroicons-outline/MenuAlt1';
import Logo from '../Logo';
import { BookmarkStarFill } from '@styled-icons/bootstrap/BookmarkStarFill';
const MenuMobile = () => {
  const logged = true;
  return (
    <S.Wrapper>
      <MenuAlt1 width="40" />
      <Logo size="large" />
      {logged && <BookmarkStarFill width="40" />}
    </S.Wrapper>
  )

}

export default MenuMobile;
