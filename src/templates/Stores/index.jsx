import * as S from './style';
import Base from '../Base';
const Stores = () => {
  return (
    <Base>
      <S.Content>
        <S.LogoWrapper>
          <S.Image src="images/goat.svg" />
        </S.LogoWrapper>
        <S.LogoWrapper>
          <S.Image src="images/flightclub-red.svg" />
        </S.LogoWrapper>
        <S.LogoWrapper>
          <S.Image src="images/stadiumgoods.svg" />
        </S.LogoWrapper>
        <S.LogoWrapper>
          <S.Image src="images/stockx-color.svg" />
        </S.LogoWrapper>
      </S.Content>
    </Base>
  )
}

export default Stores;
