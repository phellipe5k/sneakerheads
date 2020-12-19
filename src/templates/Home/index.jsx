import * as S from './style';
import Base from '../Base';
import HeaderSearchBar from '../../components/HeaderSearchBar';
import { Twitter, Instagram, Github } from '@styled-icons/boxicons-logos';

const Home = () => {
  return (
    <Base>
    <S.Background />
    <S.BackgroundMask />
    <S.Content>
        <S.Slogan>
          Find the Sneaker pair of your dreams
        </S.Slogan>
        <S.Interact>
          <S.Title>
            Sneaker Heads
          </S.Title>
          <HeaderSearchBar />
        </S.Interact>
        <S.Social>
          <S.Line />
          <S.IconWrapper>
            <Twitter width="50" />
          </S.IconWrapper>
          <S.IconWrapper>
            <Github width="50" />
          </S.IconWrapper>
          <S.IconWrapper>
            <Instagram width="50" />
          </S.IconWrapper>
        </S.Social>
      </S.Content>
    </Base>
  )
}

export default Home;