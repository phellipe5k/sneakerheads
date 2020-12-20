import { useState } from 'react';
import * as S from './style';
import Base from '../Base';
import SneakerList from '../../components/SneakerList';
import HeaderSearchBar from '../../components/HeaderSearchBar';
import { Filter as FilterIcon } from '@styled-icons/boxicons-regular/Filter';
import Select from '../../components/Select';
import Filter from '../../components/Filter';

const Sneakers = () => {
  const [filterOn, setFilterOn] = useState(false);
  return (
    <Base>
      <S.Container isFilter={filterOn}>
        <S.InputContainer isFilter={filterOn}>
          <S.WrapperSearch filterOn={filterOn}>
            <HeaderSearchBar type="secondary" />
          </S.WrapperSearch>
          <S.Filtering>
            <S.Button
              isFilter={filterOn}
              onClick={() => setFilterOn(!filterOn)}
            >
              <FilterIcon width="30"/>
              Filtrar
            </S.Button>
              <Select />
          </S.Filtering>
        </S.InputContainer>
        <S.ListContainer>
          <S.FilterWrapper filterOn={filterOn}>
            <Filter />
          </S.FilterWrapper>
          <S.LisWrapper filterOn={filterOn}>
            <SneakerList />
          </S.LisWrapper>
        </S.ListContainer>
      </S.Container>
    </Base>
  )
}

export default Sneakers;
