import { useRouter } from 'next/router';
import * as S from './style';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const Base = ({ children }) => {
  const router = useRouter();
  return (
    <S.Container path={ router.pathname } exit={{opacity: 0}}>
      <S.WrapHeader>
        <Menu logged />
      </S.WrapHeader>
      { children }
      <S.WrapFooter>
        <Footer  />
      </S.WrapFooter>
    </S.Container>
  )
}

export default Base;
