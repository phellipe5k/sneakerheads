import * as S from './style';
import { useRouter } from 'next/router';
import Menu from '../../components/Menu';

const Footer = ({ children }) => {
  const router = useRouter();
  return (
    <S.Box path={router.pathname}>
      <S.Wrapper>
        <S.InfoBox>
          <S.Title>
            CONTATO
            <S.Line />
          </S.Title>
          <S.ListInfo>
            <S.Itens href="#">Phellipe501@gmail.com</S.Itens>
            <S.Itens href="#">+55 11 957733826</S.Itens>
          </S.ListInfo>
        </S.InfoBox>
        <S.InfoBox>
          <S.Title>
            NOS ACOMPANHE
            <S.Line />
          </S.Title>
          <S.ListInfo>
            <S.Itens href="#">Instagram</S.Itens>
            <S.Itens href="#">Twitter</S.Itens>
            <S.Itens href="#">Github</S.Itens>
          </S.ListInfo>
        </S.InfoBox>
        <S.InfoBox>
          <S.Title>
            LINKS
            <S.Line />
          </S.Title>
          <S.ListInfo>
            <S.Itens href="#">Sneaker</S.Itens>
            <S.Itens href="#">Brands</S.Itens>
            <S.Itens href="#">Store</S.Itens>
            <S.Itens href="#">Login</S.Itens>
          </S.ListInfo>
        </S.InfoBox>
        <S.InfoBox>
          <S.Title>
            LOCALIZAÇÃO
            <S.Line />
          </S.Title>
          <S.ListInfo>
            <S.Itens href="#">Rua Pedroso da Silva</S.Itens>
            <S.Itens href="#">400 - 08080040</S.Itens>
            <S.Itens href="#">São Paulo, Brasil</S.Itens>
          </S.ListInfo>
        </S.InfoBox>
      </S.Wrapper>
    </S.Box>
  )
}

export default Footer;
