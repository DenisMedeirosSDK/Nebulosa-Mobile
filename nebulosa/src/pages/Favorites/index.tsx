import React from 'react'

import Header from '../../components/Header'
import ProviderItem from '../../components/ProviderItem'
import { Container, Content } from './styles'

export default function Favorites() {
  return (
    <Container>
      <Header title="Profissionais favoritados" />
      <Content
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <ProviderItem />
        <ProviderItem />
        <ProviderItem />
        <ProviderItem />
        <ProviderItem />
        <ProviderItem />
        <ProviderItem />
      </Content>
    </Container>
  )
}
