import { useEffect, useState } from 'react';
import * as S from './style';
import Base from '../Base';
import SneakerList from '../../components/SneakerList';
import Axios from 'axios';
import HeaderSearchBar from '../../components/HeaderSearchBar';
import { Filter as FilterIcon } from '@styled-icons/boxicons-regular/Filter';
import Select from '../../components/Select';
import Filter from '../../components/Filter';
import { stagger, hoverScale, tapScale } from '../../Animations';
import { Close } from '@styled-icons/evil/Close';

const Sneakers = ({ sneaker }) => {
  const [filterOn, setFilterOn] = useState(false);
  const [data, setData] = useState(sneaker);
  const handleInput = async ({ target }) => {
    const { data } = await Axios.get(`https://sneakers-api-app.herokuapp.com/search/${ target.value }`);
    setData(data);
  };
  return (
    <Base>
      <S.Container isFilter={filterOn} exit={{opacity: 0}} initial="initial" animate="animate">
        <S.InputContainer isFilter={filterOn}>
          <S.WrapperSearch filterOn={filterOn}>
            <HeaderSearchBar type="secondary" onChange={ handleInput } />
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
          <S.FilterWrapper filterOn={filterOn} variants={ stagger }>
            <S.Close onClick={() => setFilterOn(!filterOn)}><Close width="50"/></S.Close>
            <Filter />
          </S.FilterWrapper>
          <S.LisWrapper filterOn={filterOn}>
            <SneakerList sneaker={data} />
          </S.LisWrapper>
        </S.ListContainer>
      </S.Container>
    </Base>
  )
}

export default Sneakers;
