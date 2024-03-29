import { useState } from 'react';
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
  const [input, setInput] = useState('');
  return (
    <S.Wrapper>
      <S.Left>
        <Logo />
        <Navigation />
      </S.Left>
      <S.Right>
        <S.WrapperBar>
            { router.pathname !== '/'
             && router.pathname !== '/sneakers' 
             && <HeaderSearchBar
                  value={ input }
                  onChange={ ({ target }) => setInput(target.value) }
                  onClick={ () => router.push(`/sneakers?search=${ input }`) }
                />
             }
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
