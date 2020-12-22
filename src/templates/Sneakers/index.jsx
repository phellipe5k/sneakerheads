import { useState } from 'react';
import * as S from './style';
import Base from '../Base';
import SneakerList from '../../components/SneakerList';
import HeaderSearchBar from '../../components/HeaderSearchBar';
import { Filter as FilterIcon } from '@styled-icons/boxicons-regular/Filter';
import Select from '../../components/Select';
import Filter from '../../components/Filter';
import { Close } from '@styled-icons/evil/Close';

const Sneakers = ({ sneaker }) => {
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
              <FilterIcon id="filter-icon" width="30"/>
              <span>Filtrar</span>
            </S.Button>
              <Select>
                <option value="" hidden>Ordenar</option>
                <option value="highest-price">Menor preço</option>
                <option value="lowest-price">Maior preço</option>
                <option value="name">Nome</option>
                <option value="release-date">Data de lançamento</option>
                <option value="relevance">Relevância</option>
              </Select>
          </S.Filtering>
        </S.InputContainer>
        <S.ListContainer>
          <S.FilterWrapper filterOn={filterOn}>
            <S.Close onClick={() => setFilterOn(!filterOn)}><Close width="50"/></S.Close>
            <Filter />
          </S.FilterWrapper>
          <S.LisWrapper filterOn={filterOn}>
            <SneakerList sneaker={sneaker} />
          </S.LisWrapper>
        </S.ListContainer>
      </S.Container>
    </Base>
  )
}

export default Sneakers;
