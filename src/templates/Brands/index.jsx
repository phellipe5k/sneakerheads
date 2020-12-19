import * as S from './style';
import Base from '../Base';
const Brands = () => {
  return (
    <Base>
      <S.Content>
        <S.LogoWrapper>
          <S.Image src="images/nike.svg" />
        </S.LogoWrapper>
        <S.LogoWrapper>
          <S.Image src="images/jordan.svg" />
        </S.LogoWrapper>
        <S.LogoWrapper>
          <S.Image src="images/adidas.svg" />
        </S.LogoWrapper>
        <S.LogoWrapper>
          <S.Image src="images/vans.svg" />
        </S.LogoWrapper>
        <S.LogoWrapper>
          <S.Image src="images/puma.svg" />
        </S.LogoWrapper>
        <S.LogoWrapper>
          <S.Image src="images/fila.svg" />
        </S.LogoWrapper>
        <S.LogoWrapper>
          <S.Image src="images/new_balance.svg" />
        </S.LogoWrapper>
        <S.LogoWrapper>
          <S.Image src="images/converse.svg" />
        </S.LogoWrapper>
      </S.Content>
    </Base>
  )
}

export default Brands;
