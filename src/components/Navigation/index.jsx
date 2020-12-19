import Link from 'next/link';
import * as S from './style';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();
  return (
    <S.WrapperNavigationD>
      <S.Linkers path={ router }>
        <Link href="/sneakers"><a id="sneaker">Sneakers</a></Link>
        <a href="#" id="brand" >Brands</a>
        <a href="#" id="store">Stores</a>
        </S.Linkers>
    </S.WrapperNavigationD>
  )
}

export default Navigation;
