import React, { useState } from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Feather as Icon } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import Header from '../../components/Header'
import ProviderItem, { Provider } from '../../components/ProviderItem'
import api from '../../services/api'
import {
  Container,
  Content,
  SearchForm,
  Label,
  TextInput,
  InputGroup,
  InputBlock,
  ButtonForm,
  ButtonFormText
} from './styles'

export default function ProviderList() {
  const [providers, setProviders] = useState([])
  const [favorites, setFavorites] = useState<number[]>([])
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  const [skill, setSkill] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedProviders = JSON.parse(response)
        const favoritedProviderIds = favoritedProviders.map((provider: Provider) => {
          return provider.id
        })
        setFavorites(favoritedProviderIds)
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  })

  async function handleFilterSubmit() {
    loadFavorites()

    const response = await api.get('services', {
      params: {
        skill,
        week_day,
        time
      }
    })
    setIsFiltersVisible(false)
    setProviders(response.data)
  }

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
          <TextInput
            placeholder="Escolha um serviço"
            placeholderTextColor="#c1bccc"
            value={skill}
            onChangeText={text => setSkill(text)}
          />

          <InputGroup>
            <InputBlock>
              <Label>Dia da semana</Label>
              <TextInput
                placeholder="Data"
                placeholderTextColor="#c1bccc"
                value={week_day}
                onChangeText={text => setWeek_day(text)}
              />
            </InputBlock>

            <InputBlock>
              <Label>Horário</Label>
              <TextInput
                placeholder="Horário"
                placeholderTextColor="#c1bccc"
                value={time}
                onChangeText={text => setTime(text)}
              />
            </InputBlock>
          </InputGroup>
          <ButtonForm onPress={handleFilterSubmit}>
            <ButtonFormText>Filtrar</ButtonFormText>
          </ButtonForm>
        </SearchForm>
        )}
      </Header>
      <Content
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {providers.map((provider: Provider) => {
          return (
            <ProviderItem key={provider.id} provider={provider} favorited={favorites.includes(provider.id)} />
          )
        })}

      </Content>
    </Container>
  )
}
