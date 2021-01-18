import * as S from './style';

const ImagesGallery = ({sneaker}) => {
  return (
    <S.ImagesGallery>
      <S.ImageGallery src={sneaker.imageLinks[1]} />
      <S.ImageGallery src={sneaker.imageLinks[2]} />
      <S.ImageGallery src={sneaker.imageLinks[3]} />
      <S.ImageGallery src={sneaker.imageLinks[4]} />
    </S.ImagesGallery>
  )

}

export default ImagesGallery;
