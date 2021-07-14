import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

type CategoryProps = RectButtonProps & {
  title: string;
};

export function Category({ title, ...rest }: CategoryProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
