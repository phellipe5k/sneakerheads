import { useState } from 'react';
import * as S from './style';
import { MenuAlt1 } from '@styled-icons/heroicons-outline/MenuAlt1';
import Logo from '../Logo';
import { BookmarkStarFill } from '@styled-icons/bootstrap/BookmarkStarFill';

const MenuMobile = () => {
  const logged = true;
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <S.Wrapper>
      <S.MenuMobileOn show={menuMobile}>
        <h1 onClick={() => setMenuMobile(!menuMobile)}>X</h1>
        <S.Navigation>
          <a href="#">Home</a>
          <a href="#">Sneakers</a>
          <a href="#">Brands</a>
          <a href="#">Stores</a>
        </S.Navigation>
        <S.Account>
          <button type="button" >Entrar</button>
          <span>ou</span>
          <a href="#">Crie sua conta</a>
        </S.Account>
      </S.MenuMobileOn>
     <S.WrapperIcons>
      <MenuAlt1
          width="45"
          className="menu"
          onClick={() => setMenuMobile(!menuMobile)}
        />
        <Logo size="large" />
        {logged && <BookmarkStarFill width="40" />}
     </S.WrapperIcons>
    </S.Wrapper>
  )

}

export default MenuMobile;
