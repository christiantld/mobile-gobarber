import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Left, Avatar, Info, Name, Time} from './styles';

export default function Appointment({data, onCancel}) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);
  return (
    <Container past={data.past}>
      <Left>
        {/* Alterar a url da imagem para um arquivo .env
          O android nao reconhece localhost que retorna da API
        */}
        <Avatar
          source={{
            uri: data.provider.avatar
              ? `http://192.168.0.14:3333/files/${data.provider.avatar.path}`
              : `https://api.adorable.io/avatar/50/${data.provider.name}.png`,
          }}
        />

        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#ff5151" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
