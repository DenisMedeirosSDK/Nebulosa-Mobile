import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  InfoAppointment,
  NameUser,
  InfoService,
  DateService,
  AvatarUser,
} from './styles';

type AppointmentProps = RectButtonProps & {
  name: string;
  avatar: string;
  service: string;
  time: string;
  week: string;
  day: string;
  month: string;
  hour: string;
};

export function Appointment({
  name,
  avatar,
  service,
  time,
  day,
  hour,
  month,
  week,
  ...rest
}: AppointmentProps) {
  return (
    <Container {...rest}>
      <AvatarUser source={{ uri: avatar }} />
      <InfoAppointment>
        <NameUser>{name}</NameUser>
        <InfoService>
          {service} - {time} min
        </InfoService>

        <DateService>
          {week}, {day} de {month} ás {hour}h
        </DateService>
      </InfoAppointment>
    </Container>
  );
}
