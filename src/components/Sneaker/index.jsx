import { useState } from 'react';
import Link from 'next/link';
import * as S from './style';
import { Favorite, FavoriteBorder } from '@styled-icons/material';

const Sneaker = (item) => {
  const { shoeName, brand, thumbnail, retailPrice, lowestResellPrice } = item.item;
  const [favorited, setFavorited] = useState(false);
  const handleBrand = (brand) => {
    switch (brand) {
      case 'Nike':
        return 'images/nike.svg';
      case 'adidas':
        return 'images/adidas.svg';
      case 'Jordan':
        return 'images/jordan.svg';
      case 'Fila':
        return 'images/fila.svg';
      case 'Puma':
        return 'images/puma.svg';
      case 'Converse':
        return 'images/converse.svg';
      case 'Vans':
        return 'images/vans.svg';
      case 'New Balance':
        return 'images/new_balance.svg';
      default:
        return '';
    }
  }
  const getLowestValue = (prices) => {
    if (prices) {
      const lowest = Object.entries(prices).sort((a, b) => a[1] - b[1])[0];
    return lowest;
    } else {
      return ['null', retailPrice];
    }
  }

  const getIconStore = () => {
    const store = getLowestValue(lowestResellPrice)[0];
    switch(store){
      case 'stockX':
        return 'images/stockx.svg';
      case 'flightClub':
        return 'images/flightclub.svg';
      case 'stadiumGoods':
        return 'images/stadiumgoods.svg';
      case 'goat':
        return 'images/goat.svg';
      default:
        return 'null';
    }
  }
  return (
    <Link href="/sneakers/BV1310-555">
      <a>
      <S.Wrapper>
        <S.Content>
          <S.TopPart>
            <img src={ handleBrand(brand) }/>
            <S.Favorite onClick={() => setFavorited(!favorited)} favorited={favorited}>
              <FavoriteBorder id="stroke" />
              <Favorite id="filled" />
            </S.Favorite>
          </S.TopPart>
          <S.ImageWrapper>
            <S.Image src={thumbnail} />
          </S.ImageWrapper>
          <S.Info>
            <S.Name>{shoeName}</S.Name>
            <S.Price>
              <S.SmallFont>Lowest Price</S.SmallFont>
              <span>$ {getLowestValue(lowestResellPrice)[1]}</span>
              <S.Store>on {getIconStore() !== 'null' ? <S.Image src={getIconStore()} /> : <span> retail</span>}</S.Store>
            </S.Price>
          </S.Info>
        </S.Content>
      </S.Wrapper>
      </a>
    </Link>
    
  )
}

export default Sneaker;
