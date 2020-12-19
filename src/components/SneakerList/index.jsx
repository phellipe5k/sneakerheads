import * as S from './style';
import Sneaker from '../Sneaker';
import mock from '../Sneaker/mock';

const SneakerList = (item) => {
  return (
    <S.Wrapper>
      {mock.map((sneaker, index) => (
        <S.SneakerWrapper key={index}>
        <Sneaker item={sneaker} />
      </S.SneakerWrapper>
      ))}
    </S.Wrapper>
  )
}

export default SneakerList;
