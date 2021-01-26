import React, { useState } from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Feather as Icon } from '@expo/vector-icons'

import Header from '../../components/Header'
import ProviderItem from '../../components/ProviderItem'
import { Container, Content, SearchForm, Label, TextInput, InputGroup, InputBlock, ButtonForm, ButtonFormText } from './styles'

export default function ProviderList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible)
  }

  return (
    <Container>
      <Header title="Profissionais disponiveis" headerRight={(
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Icon name="filter" size={20} color="#FFF" />
        </BorderlessButton>
      )} >
        {isFiltersVisible && (<SearchForm>
          <Label>Serviço</Label>
          <TextInput placeholder="Escolha um serviço" placeholderTextColor="#c1bccc" />

          <InputGroup>
            <InputBlock>
              <Label>Dia da semana</Label>
              <TextInput placeholder="Data" placeholderTextColor="#c1bccc" />
            </InputBlock>

            <InputBlock>
              <Label>Horário</Label>
              <TextInput placeholder="Horário" placeholderTextColor="#c1bccc" />
            </InputBlock>
          </InputGroup>
          <ButtonForm>
            <ButtonFormText>Filtrar</ButtonFormText>
          </ButtonForm>
        </SearchForm>
        )}
      </Header>
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
