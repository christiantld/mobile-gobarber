import 'react-native-gesture-handler';
import React from 'react';
import '~/config/ReactotronConfig';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '~/routes';

// import { Container } from './styles';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#22222b" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}
