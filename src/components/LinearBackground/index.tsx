import React, { ReactNode } from 'react';

import { LinearGradientProps } from 'expo-linear-gradient';

import { Container } from './styles';

type BackgroundProps = LinearGradientProps & {
  children: ReactNode;
};

export function LinearBackground({ children, colors }: BackgroundProps) {
  return <Container colors={colors}>{children}</Container>;
}
