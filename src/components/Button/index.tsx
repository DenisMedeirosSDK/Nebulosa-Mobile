import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

type ButtonProps = RectButtonProps & {
  title: string;
  icon?: string;
};

export function Button({ title, icon, ...rest }: ButtonProps) {
  return (
    <Container colorButton="#F9F5FF" {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
