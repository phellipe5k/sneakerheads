import Link from 'next/link';
import * as S from './style';

const Navigation = () => {
  return (
    <S.Wrapper>
      <S.Linkers>
        <a href="#">Sneakers</a>
        <a href="#">Brands</a>
        <a href="#">Stores</a>
        </S.Linkers>
    </S.Wrapper>
  )
}

export default Navigation;
