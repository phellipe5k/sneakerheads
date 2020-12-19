import { useRouter } from 'next/router';
import * as S from './style';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

const Auth = () => {
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>Find the Sneaker pair of your dreams</S.Title>
      </S.Content>
      ${ router.pathname === '/sign-in' ? <SignIn /> : <SignUp /> }
    </S.Wrapper>
  )
}

export default Auth;
