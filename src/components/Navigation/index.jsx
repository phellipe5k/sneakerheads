import Link from 'next/link';
import * as S from './style';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();
  return (
    <S.WrapperNavigationD>
      <S.Linkers path={ router }>
        <Link href="/sneakers" id="sneakers"><a>Sneakers</a></Link>
        <a href="#" id="brands" >Brands</a>
        <a href="#" id="stores">Stores</a>
        </S.Linkers>
    </S.WrapperNavigationD>
  )
}

export default Navigation;
