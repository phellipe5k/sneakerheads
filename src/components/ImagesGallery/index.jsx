import * as S from './style';
import { dissolve } from '../../Animations';

const ImagesGallery = ({sneaker}) => {
  return (
    <S.ImagesGallery variants={ dissolve } >
      <S.ImageGallery src={sneaker.imageLinks[1]} />
      <S.ImageGallery src={sneaker.imageLinks[2]} />
      <S.ImageGallery src={sneaker.imageLinks[3]} />
      <S.ImageGallery src={sneaker.imageLinks[4]} />
    </S.ImagesGallery>
  )

}

export default ImagesGallery;
