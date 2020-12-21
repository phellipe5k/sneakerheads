import { useState } from 'react';
import * as S from './style';
import Base from '../Base';
import { Favorite, FavoriteBorder } from '@styled-icons/material';

const SneakerDetail = ({ sneaker, colors, luminosity }) => {
  const [favorited, setFavorited] = useState(false);
  console.log(colors)
  const decide = () => {
    if(colors) {
      if (luminosity === 'light1' || luminosity === 'dark1') {
        return colors[1];
      } else {
        return colors[0];
      }
    }
    return 'white';
  } 
  return (
    <Base>
      <S.Container color={decide()}>
        <S.ImagesGallery>
          <S.ImageGallery src={sneaker.imageLinks[1]} />
          <S.ImageGallery src={sneaker.imageLinks[2]} />
          <S.ImageGallery src={sneaker.imageLinks[3]} />
          <S.ImageGallery src={sneaker.imageLinks[4]} />
        </S.ImagesGallery>
        <S.ShoesWrapper>
          <S.Shoes urls={sneaker.thumbnail}></S.Shoes>
        </S.ShoesWrapper>
        <S.Void luminosity={luminosity ? luminosity : 'white'}>
          <S.Info>
            <S.Favorite luminosity={luminosity} onClick={() => setFavorited(!favorited)} favorited={favorited}>
              <FavoriteBorder id="stroke" />
              <Favorite id="filled" />
            </S.Favorite>
            <S.Title>{sneaker.shoeName}</S.Title>
            <S.Colorway luminosity={luminosity}>Colorway - {sneaker.colorway}</S.Colorway>
            <S.Release>Release Date: {sneaker.releaseDate}</S.Release>
            <S.Retail>Retail Price: <span>$ {sneaker.retailPrice}</span></S.Retail>
          </S.Info>
          <S.Sizes>

          </S.Sizes>
          <S.WrapDescription>
            <S.Description>
              { sneaker.description }
            </S.Description>
          </S.WrapDescription>
        </S.Void>
        <svg width="1440" height="1033" viewBox="0 0 1440 1033" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0996L1290.59 -76L1440 -60V1062L0 1046Z"/>
        </svg>
      </S.Container>
    </Base>
  )
}

export default SneakerDetail;
