import React from 'react'

import Header from '../../components/Header'
import ProviderForm from '../../components/ProviderForm'
import { Container, Content } from './styles'

export default function ProviderRegister() {
  return (
    <Container>
      <Header title="Cadastrar perfil" />
      <Content
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <ProviderForm />
      </Content>
    </Container>
  )
}
