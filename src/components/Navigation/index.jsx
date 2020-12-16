import Link from 'next/link';
import * as S from './style';

const Navigation = () => {
  return (
    <S.WrapperNavigationD>
      <S.Linkers>
        <a href="#">Sneakers</a>
        <a href="#">Brands</a>
        <a href="#">Stores</a>
        </S.Linkers>
    </S.WrapperNavigationD>
  )
}

export default Navigation;
