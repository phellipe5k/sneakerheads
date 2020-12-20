import { useState } from 'react';
import * as S from './style';
import Base from '../Base';

const SneakerDetail = ({ sneaker }) => {
  console.log(sneaker)
  return (
    <Base>
      <S.Container color="purple">
        <S.ImagesGallery>
          <S.ImageGallery src={sneaker.imageLinks[1]} />
          <S.ImageGallery src={sneaker.imageLinks[2]} />
          <S.ImageGallery src={sneaker.imageLinks[3]} />
          <S.ImageGallery src={sneaker.imageLinks[4]} />
        </S.ImagesGallery>
        <S.ShoesWrapper>
          <S.Shoes urls={sneaker.imageLinks[0]}></S.Shoes>
        </S.ShoesWrapper>
        <S.Void></S.Void>
        <svg width="1440" height="1033" viewBox="0 0 1440 1033" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0996L1290.59 -76L1440 -60V1062L0 1046Z"/>
        </svg>
      </S.Container>
    </Base>
  )
}

export default SneakerDetail;
