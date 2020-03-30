import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Provider = styled(RectButton)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px;
`;

export const Avatar = styled.Image`
  width: 66px;
  height: 66px;
  border-radius: 33px;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
  color: #ddd;
  text-align: center;
  text-transform: capitalize;
`;
