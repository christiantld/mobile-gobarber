import React, {useRef} from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';
import logo from '~/assets/logo.png';

import BackGround from '~/components/Background';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({navigation}) {
  function navigateToSignIn() {
    navigation.navigate('SignIn');
  }

  function handleSubmit() {}

  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <BackGround>
      <Container>
        <Image tintColor="#dab22f" source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Seu nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboarType="email-adress"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={() => {}}>Cadastrar</SubmitButton>
        </Form>

        <SignLink onPress={navigateToSignIn}>
          <SignLinkText>Já sou cadastrado</SignLinkText>
        </SignLink>
      </Container>
    </BackGround>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
