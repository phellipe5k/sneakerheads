import * as S from './style';
import Menu from '../../components/Menu';

const Base = ({ children }) => {
  return (
    <S.Container>
      <S.WrapHeader>
        <Menu />
      </S.WrapHeader>
      { children }
      <S.WrapFooter>
        <Footer  />
      </S.WrapFooter>
    </S.Container>
  )
}

export default Base;
