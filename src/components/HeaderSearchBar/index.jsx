import * as S from './style';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2';

const HeaderSearchBar = () => {
  return (
    <S.WrapperSearchBar>
        <S.Bar type="text" placeholder="Search the sneaker that i want "/>
        <SearchAlt2 className="search-icon"/>
    </S.WrapperSearchBar>
  )
}

export default HeaderSearchBar;
