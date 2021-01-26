import React, { useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import Header from '../../components/Header'
import ProviderItem, { Provider } from '../../components/ProviderItem'
import { Container, Content } from './styles'

export default function Favorites() {
  const [favorites, setFavorites] = useState([])

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedProviders = JSON.parse(response)

        setFavorites(favoritedProviders)
      }
    })
  }
  useFocusEffect(() => {
    loadFavorites()
  })

  return (
    <Container>
      <Header title="Profissionais favoritados" />
      <Content
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {favorites.map((provider: Provider) => {
          return (
            <ProviderItem key={provider.id} provider={provider} favorited />
          )
        })}
      </Content>
    </Container>
  )
}
