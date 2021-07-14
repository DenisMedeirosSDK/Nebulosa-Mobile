import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import { LinearBackground } from '../../components/LinearBackground';
import { Services } from '../../components/Services';
import { Container, Title, Wrapper } from './styles';

interface IServiceProps {
  id: string;
  name: string;
  avatar: string;
  service: string;
  duration: string;
  price: string;
}

export function ListServices() {
  const primary = '#DD55DD';
  const secondary = '#EF946C';

  const [services] = useState<IServiceProps[]>([
    {
      id: '1',
      name: 'Mikasa Ackerman',
      avatar:
        'https://pbs.twimg.com/profile_images/1380331337836494848/SK3vASDG_400x400.jpg',
      price: '25',
      service: 'Mão francesinha',
      duration: '20',
    },
    {
      id: '2',
      name: 'Vitoria',
      avatar:
        'https://pbs.twimg.com/profile_images/1380331337836494848/SK3vASDG_400x400.jpg',
      price: '25',
      service: 'Mão francesinha',
      duration: '20',
    },
    {
      id: '3',
      name: 'Vitoria',
      avatar:
        'https://pbs.twimg.com/profile_images/1380331337836494848/SK3vASDG_400x400.jpg',
      price: '25',
      service: 'Mão francesinha',
      duration: '20',
    },
    {
      id: '4',
      name: 'Vitoria',
      avatar:
        'https://pbs.twimg.com/profile_images/1380331337836494848/SK3vASDG_400x400.jpg',
      price: '25',
      service: 'Mão francesinha',
      duration: '20',
    },
    {
      id: '5',
      name: 'Vitoria',
      avatar:
        'https://pbs.twimg.com/profile_images/1380331337836494848/SK3vASDG_400x400.jpg',
      price: '25',
      service: 'Mão francesinha',
      duration: '20',
    },
  ]);

  function handleNewAppointment(id: string) {
    console.log('New appointment', id);
  }

  return (
    <LinearBackground colors={[secondary, primary]}>
      <Container>
        <Wrapper>
          <Title>Serviços</Title>
        </Wrapper>
        <FlatList
          data={services}
          keyExtractor={(service) => service.id}
          renderItem={({ item }) => (
            <Services
              onPress={() => handleNewAppointment(item.id)}
              name={item.name}
              avatar={item.avatar}
              price={item.price}
              service={item.service}
              duration={item.duration}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ marginBottom: 20 }} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 60 }}
        />
      </Container>
    </LinearBackground>
  );
}
