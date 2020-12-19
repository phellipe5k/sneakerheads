import Link from 'next/link';
import * as S from './style';
import PropTypes from 'prop-types';
import { Email, Lock, Login } from '@styled-icons/material-outlined';
import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle';
import { Image } from '@styled-icons/boxicons-regular/Image';
import Logo from '../Logo';
import Button from '../Button';
import Input from '../Input';

const SignUp = () => {
  return (
    <S.Wrapper>
      <Logo size="large" />
      <S.Title>REGISTER</S.Title>
      <S.FormWrapper>
        <Input type="text" icon={<UserCircle />} placeholder="Nome" />
        <Input type="email" icon={<Email />} placeholder="Email" />
        <Input type="text" icon={<Image />} placeholder="Avatar" />
        <Input type="password" icon={<Lock />} placeholder="Senha" />
        <Input type="password" icon={<Lock />} placeholder="Confirmar senha" />
      </S.FormWrapper>
      <Button>Cadastrar <Login width="20"/></Button>
      <S.Call>Já tem uma conta? <Link href="/sign-in"><a>Entrar</a></Link></S.Call>
    </S.Wrapper>
  )
}

export default SignUp;
