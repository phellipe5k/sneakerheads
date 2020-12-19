import * as S from './style';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2';
import { useRouter } from 'next/router';

const HeaderSearchBar = () => {
  const route = useRouter();
  return (
    <S.WrapperSearchBar path={route}>
        <S.Bar path={route} type="text" placeholder="Search a sneaker"/>
        <SearchAlt2 id="search-icon"/>
    </S.WrapperSearchBar>
  )
}

export default HeaderSearchBar;
