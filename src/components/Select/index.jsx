import * as S from './style';

const Select = () => {
  return (
    <S.Select>
      <option value="" hidden>Ordenar</option>
      <option value="highest-price">Menor preço</option>
      <option value="lowest-price">Maior preço</option>
      <option value="name">Nome</option>
      <option value="release-date">Data de lançamento</option>
      <option value="relevance">Relevância</option>
    </S.Select>
  )

}

export default Select;
