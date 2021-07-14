import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  InfoAppointment,
  NameService,
  InfoService,
  NameUser,
  AvatarUser,
} from './styles';

type AppointmentProps = RectButtonProps & {
  name: string;
  avatar: string;
  service: string;
  duration: string;
  price: string;
};

export function Services({
  name,
  avatar,
  service,
  duration,
  price,
  ...rest
}: AppointmentProps) {
  return (
    <Container {...rest}>
      <AvatarUser source={{ uri: avatar }} />
      <InfoAppointment>
        <NameService>{service}</NameService>
        <InfoService>
          R$ {price} - {duration} min
        </InfoService>

        <NameUser>{name}</NameUser>
      </InfoAppointment>
    </Container>
  );
}
