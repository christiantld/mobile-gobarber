import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 46px;
  background: #dab22f;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #222;
  font-weight: bold;
  font-size: 16px;
`;
