import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { LinearBackground } from '../../components/LinearBackground';
import {
  Container,
  ContainerScroll,
  Title,
  SubTitle,
  Wrapper,
  Form,
  Footer,
  ButtonSignUp,
  GoToSignUp,
} from './styles';

export function SignIn() {
  const primary = '#DD55DD';
  const secondary = '#EF946C';
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    console.log(email, password);
    navigation.navigate('MainRoutes');
  }
  async function handleToSignUp() {
    console.log('Go to signUp');
  }

  return (
    <LinearBackground colors={[secondary, primary]}>
      <Container>
        <ContainerScroll showsVerticalScrollIndicator={false}>
          <Wrapper>
            <Title>Nebulosa</Title>
            <SubTitle>Sua plataforma de agendamento rápido</SubTitle>
          </Wrapper>
          <Form>
            <Input
              label="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu e-mail"
              returnKeyType="next"
              onChangeText={setEmail}
              value={email}
            />
            <Input
              label="Senha"
              keyboardType="ascii-capable"
              secureTextEntry
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite sua senha"
              returnKeyType="go"
              onChangeText={setPassword}
              value={password}
            />
            <Button title="Entrar" onPress={handleSignIn} />
          </Form>
          <Footer>
            <ButtonSignUp onPress={handleToSignUp}>
              <GoToSignUp>Faça seu cadastro</GoToSignUp>
            </ButtonSignUp>
          </Footer>
        </ContainerScroll>
      </Container>
    </LinearBackground>
  );
}
