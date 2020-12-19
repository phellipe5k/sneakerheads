import * as S from './style';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const HeaderSearchBar = ({ type }) => {
  const route = useRouter();
  return (
    <S.WrapperSearchBar path={route} type={ type }>
        <S.Bar typeBar={ type } path={route} type="text" placeholder="Search a sneaker"/>
        <SearchAlt2 id="search-icon"/>
    </S.WrapperSearchBar>
  )
}

HeaderSearchBar.propTypes = {
  type: PropTypes.string,
};

HeaderSearchBar.defaultProps = {
  type: 'primary',
};

export default HeaderSearchBar;
