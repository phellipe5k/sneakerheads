import Link from 'next/link';
import * as S from './style';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();
  return (
    <S.WrapperNavigationD>
      <S.Linkers path={ router }>
        <Link href="/sneakers"><a id="sneaker">Sneakers</a></Link>
        <Link href="/brands"><a id="brand">Brands</a></Link>
        <Link href="/stores"><a id="store">Stores</a></Link>
        </S.Linkers>
    </S.WrapperNavigationD>
  )
}

export default Navigation;
