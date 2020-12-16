import { useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './style';
import { MenuAlt1 } from '@styled-icons/heroicons-outline/MenuAlt1';
import Logo from '../Logo';
import { Close } from '@styled-icons/evil/Close';
import { BookmarkStarFill } from '@styled-icons/bootstrap/BookmarkStarFill';
import Button from '../Button';

const MenuMobile = ({logged}) => {
  const [menuMobile, setMenuMobile] = useState(false);
  const router = useRouter();
  const wishlist = 7;
  return (
    <S.Wrapper>
      <S.MenuMobileOn show={menuMobile}>
        <Close
          onClick={() => setMenuMobile(!menuMobile)}
          width="45"
        />
        <S.Navigation path={ router }>
          <a href="#" id="home" >Home</a>
          <a href="#" id="sneakers">Sneakers</a>
          <a href="#" id="brands">Brands</a>
          <a href="#" id="stores">Stores</a>
          {logged && <a href="#" id="perfil">Perfil</a>}
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
          id="menu"
          onClick={() => setMenuMobile(!menuMobile)}
        />
        <Logo size="large" />
        {logged && <S.Favorites existWish={wishlist} ><BookmarkStarFill width="40" /><span>{wishlist}</span></S.Favorites>}
     </S.WrapperIcons>
    </S.Wrapper>
  )

}

export default MenuMobile;
