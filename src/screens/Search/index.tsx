import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import { Category } from '../../components/Category';
import { LinearBackground } from '../../components/LinearBackground';
import { Container, Title, Wrapper } from './styles';

interface ICategoryProps {
  id: string;
  title: string;
}

export function Search() {
  const primary = '#DD55DD';
  const secondary = '#EF946C';

  const [categories] = useState<ICategoryProps[]>([
    {
      id: '1',
      title: 'Manicure',
    },
    {
      id: '2',
      title: 'Pedicure',
    },
    {
      id: '3',
      title: 'Sobrancelha',
    },
  ]);

  function handleSearchByCategory(id: string) {
    console.log('Search by', id);
  }

  return (
    <LinearBackground colors={[secondary, primary]}>
      <Container>
        <Wrapper>
          <Title>Categorias</Title>
        </Wrapper>
        <FlatList
          data={categories}
          keyExtractor={(category) => category.id}
          renderItem={({ item }) => (
            <Category
              onPress={() => handleSearchByCategory(item.id)}
              title={item.title}
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
