import * as S from './style';
import Sneaker from '../Sneaker';

const SneakerList = ({sneaker}) => {
  return (
    <S.Wrapper>
      {sneaker.map((sneaker, index) => (
        <S.SneakerWrapper key={index}>
        <Sneaker item={sneaker} />
      </S.SneakerWrapper>
      ))}
    </S.Wrapper>
  )
}

export default SneakerList;
