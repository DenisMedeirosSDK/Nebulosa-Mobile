import React from 'react';

import { Appointment } from '../../components/Appointment';
import { LinearBackground } from '../../components/LinearBackground';
import { Container, ContainerScroll, Title, Wrapper, Content } from './styles';

export function Home() {
  const primary = '#DD55DD';
  const secondary = '#EF946C';

  return (
    <LinearBackground colors={[secondary, primary]}>
      <Container>
        <ContainerScroll showsVerticalScrollIndicator={false}>
          <Wrapper>
            <Title>Próximo compromisso</Title>
          </Wrapper>
          <Appointment
            name="Mikasa Ackerman"
            avatar="https://pbs.twimg.com/profile_images/1380331337836494848/SK3vASDG_400x400.jpg"
            service="Mão francesinha"
            time="30"
            week="Seg"
            day="25"
            month="março"
            hour="14:30"
          />
          <Content></Content>
        </ContainerScroll>
      </Container>
    </LinearBackground>
  );
}
