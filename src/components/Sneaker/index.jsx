import * as S from './style';
import { Favorite, FavoriteBorder } from '@styled-icons/material';

const Sneaker = (item) => {
  const { shoeName, brand, thumbnail, retailPrice } = item.item;
  return (
    <S.Wrapper>
      <S.Content>
        <S.TopPart>
          <img src="https://svgshare.com/i/STk.svg"/>
          <S.Favorite>
            <FavoriteBorder />
          </S.Favorite>
        </S.TopPart>
        <S.ImageWrapper>
          <S.Image src={thumbnail} />
        </S.ImageWrapper>
        <S.Info>
          <S.Name>{shoeName}</S.Name>
          <S.Price>
            <S.SmallFont>Lowest Price</S.SmallFont>
            <span>$ {retailPrice}</span>
            <S.Store>on <S.Image src="https://svgshare.com/i/SQi.svg" /></S.Store>
          </S.Price>
        </S.Info>
      </S.Content>
    </S.Wrapper>
  )
}

export default Sneaker;
