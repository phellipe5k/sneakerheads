import { useState } from 'react';
import * as S from './style';
import Base from '../Base';
import SneakerList from '../../components/SneakerList';
import HeaderSearchBar from '../../components/HeaderSearchBar';
import { Filter } from '@styled-icons/boxicons-regular/Filter';

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
              <Filter width="30"/>
              Filtrar
            </S.Button>
            <S.Select>
              <option value="" hidden>Ordenar</option>
              <option value="highest-price">Menor preço</option>
              <option value="lowest-price">Maior preço</option>
              <option value="name">Nome</option>
              <option value="release-date">Data de lançamento</option>
              <option value="relevance">Relevância</option>
            </S.Select>
          </S.Filtering>
        </S.InputContainer>
        <S.ListContainer>
          <S.FilterWrapper filterOn={filterOn} />
          <S.LisWrapper filterOn={filterOn}>
            <SneakerList />
          </S.LisWrapper>
        </S.ListContainer>
      </S.Container>
    </Base>
  )
}

export default Sneakers;
