import * as S from './style';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2';

const HeadSearchBar = () => {
  return (
    <S.Wrapper>
        <S.Bar type="text" placeholder="Search the sneaker that i want "/>
        <SearchAlt2 className="search-icon"/>
    </S.Wrapper>
  )
}

export default HeadSearchBar;
