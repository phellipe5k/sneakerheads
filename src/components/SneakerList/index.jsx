import * as S from './style';
import Sneaker from '../Sneaker';
import { stagger, hoverScale, tapScale } from '../../Animations';

const SneakerList = ({sneaker}) => {

  

  return (
    <S.Wrapper variants={ stagger }>
      {sneaker.map((sneaker, index) => (
        <S.SneakerWrapper key={index} hoverScale={ hoverScale } whileTap={ tapScale } >
        <Sneaker item={sneaker} />
      </S.SneakerWrapper>
      ))}
    </S.Wrapper>
  )
}

export default SneakerList;
