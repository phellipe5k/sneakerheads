import Link from 'next/link';
import * as S from './style';
import PropTypes from 'prop-types';
import { Email, Lock, Login } from '@styled-icons/material-outlined';
import Logo from '../Logo';
import Button from '../Button';
import Input from '../Input';

const SignIn = () => {
  return (
    <S.Wrapper>
      <Logo size="large" />
      <S.Title>LOGIN</S.Title>
      <S.FormWrapper>
        <Input type="email" icon={<Email />} placeholder="Email" />
        <Input type="password" icon={<Lock />} placeholder="Senha" />
      </S.FormWrapper>
      <Button>Entrar <Login width="20"/></Button>
      <S.Call>Ainda não tem uma conta ? <Link href="/signup"><a>Cadastre-se</a></Link></S.Call>
    </S.Wrapper>
  )
}

export default SignIn;
