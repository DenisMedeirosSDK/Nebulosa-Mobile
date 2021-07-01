import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, InputText, Label } from './styles';

type InputProps = {
  label: string;
  iconName?: string;
} & TextInputProps;

export function Input({ label, iconName, ...rest }: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputText {...rest} />
    </Container>
  );
}
