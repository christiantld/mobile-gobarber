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
  function navigateToSignUp() {
    navigation.navigate('SignUp');
  }

  function handleSubmit() {}

  const passwordRef = useRef();

  return (
    <BackGround>
      <Container>
        <Image tintColor="#dab22f" source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboarType="email-adress"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
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

          <SubmitButton onPress={() => {}}>Entrar</SubmitButton>
        </Form>

        <SignLink onPress={navigateToSignUp}>
          <SignLinkText>Criar Conta Gratuita</SignLinkText>
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
