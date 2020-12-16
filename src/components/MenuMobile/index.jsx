import { useState } from 'react';
import * as S from './style';
import { MenuAlt1 } from '@styled-icons/heroicons-outline/MenuAlt1';
import Logo from '../Logo';
import { Close } from '@styled-icons/evil/Close';
import { BookmarkStarFill } from '@styled-icons/bootstrap/BookmarkStarFill';
import Button from '../Button';

const MenuMobile = ({logged}) => {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <S.Wrapper>
      <S.MenuMobileOn show={menuMobile}>
        <Close
          onClick={() => setMenuMobile(!menuMobile)}
          width="45"
        />
        <S.Navigation>
          <a href="#">Home</a>
          <a href="#">Sneakers</a>
          <a href="#">Brands</a>
          <a href="#">Stores</a>
          {logged && <a href="#">Perfil</a>}
        </S.Navigation>
          {
          logged
          ? (
            <S.Account>
              <Button>Sair</Button>
            </S.Account>
          )
          : (
            <S.Account>
              <Button >Entrar</Button>
              <span>ou</span>
              <a href="#">Crie sua conta</a>
            </S.Account>
          )
          }
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
