import React from 'react';

import { Button } from '../../components/Button';
import { LinearBackground } from '../../components/LinearBackground';
import {
  Container,
  ContainerScroll,
  Title,
  Wrapper,
  Content,
  NameService,
  InfoService,
  Description,
  Calendar,
  TimeWrapper,
  LabelDate,
  Date,
  OpenDatePicker,
} from './styles';

export function NewAppointment() {
  const primary = '#DD55DD';
  const secondary = '#EF946C';

  return (
    <LinearBackground colors={[secondary, primary]}>
      <Container>
        <ContainerScroll showsVerticalScrollIndicator={false}>
          <Wrapper>
            <Title>Agendar serviço</Title>
          </Wrapper>
          <Content>
            <NameService>Mão francesinha</NameService>
            <InfoService>R$ 20 - 30 min</InfoService>
            <Description>
              As unhas francesinhas são indicadas para ocasiões mais formais,
              pois, são elegantes e realçam a beleza das mãos femininas
            </Description>
            <Calendar>
              <OpenDatePicker>
                <Date>Escolha uma data</Date>
              </OpenDatePicker>
              <LabelDate>24 de julho 2021</LabelDate>
            </Calendar>
            <TimeWrapper>
              <OpenDatePicker>
                <Date>Escolha um horário</Date>
              </OpenDatePicker>
              <LabelDate>14:30h</LabelDate>
            </TimeWrapper>
          </Content>
          <Button title="Confirmar" />
        </ContainerScroll>
      </Container>
    </LinearBackground>
  );
}
