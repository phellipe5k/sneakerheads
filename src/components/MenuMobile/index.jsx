import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './style';
import Button from '../Button';
import Logo from '../Logo';
import disableScroll from 'disable-scroll';
import { MenuAlt1 } from '@styled-icons/heroicons-outline/MenuAlt1';
import { Close } from '@styled-icons/evil/Close';
import { BookmarkStarFill } from '@styled-icons/bootstrap/BookmarkStarFill';

const MenuMobile = ({logged}) => {
  const [menuMobile, setMenuMobile] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if(menuMobile) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
    return () => {
      disableScroll.off();
    };
  }, [menuMobile])
  const wishlist = 7;
  return (
    <S.Wrapper>
      <S.MenuMobileOn show={menuMobile}>
        <Close
          onClick={() => setMenuMobile(!menuMobile)}
          width="45"
        />
        <S.Navigation path={ router }>
          <Link href="/"><a id="home">Home</a></Link>
          <Link href="/sneakers"><a id="sneakers">Sneakers</a></Link>
          <Link href="/brands"><a id="brands">Brands</a></Link>
          <Link href="/stores"><a id="stores">Stores</a></Link>
          {logged && <Link href="/profile"><a id="perfil">Perfil</a></Link>}
        </S.Navigation>
          {
          logged
          ? (
            <S.Account>
              <Link href="/">
                <a>
                  <Button >Sair</Button>
                </a>
              </Link>
            </S.Account>
          )
          : (
            <S.Account>
              <Link href="/sign-in">
                <a>
                  <Button >Entrar</Button>
                </a>
              </Link>
              <span>ou</span>
              <Link href="/sign-up"><a >Crie sua conta</a></Link>
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
