import React, { useState } from 'react'
import { Linking } from 'react-native'

import { Ionicons as Icon } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

import api from '../../services/api'
import {
  Container,
  ProfileContainer,
  ProfileInfo,
  ProfileAvatar,
  ProfileName,
  ProfileSkill,
  ProfileBiography,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  ButtonFavorite,
  ButtonWhatsapp,
  ButtonText
} from './styles'

export interface Provider {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  skill: string;
  whatsapp: string;
}

interface ProviderProps {
  provider: Provider;
  favorited: boolean;
}

const ProviderItem: React.FC<ProviderProps> = ({ provider, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited)
  function handleToLinkWhatsapp() {
    api.post('connections', {
      user_id: provider.id
    })
    Linking.openURL(`whatsapp://send?&phone=+55${provider.whatsapp}`)
  }

  async function handleToggleeFavorite() {
    const favorites = await AsyncStorage.getItem('favorites')

    let favoritesArray = []

    if (favorites) {
      favoritesArray = JSON.parse(favorites)
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((providerItem: Provider) => {
        return providerItem.id === provider.id
      })

      favoritesArray.splice(favoriteIndex, 1)
      setIsFavorited(false)
    } else {
      favoritesArray.push(provider)
      setIsFavorited(true)
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
  }

  return (
    <Container>
      <ProfileContainer>
        <ProfileAvatar source={{ uri: 'https://avatars.githubusercontent.com/u/48757658?s=60&v=4' }} />

        <ProfileInfo>
          <ProfileName>{provider.name}</ProfileName>
          <ProfileSkill>{provider.skill}</ProfileSkill>
        </ProfileInfo>
      </ProfileContainer>
      <ProfileBiography>{provider.bio}</ProfileBiography>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>R$ {provider.cost}</PriceValue>
        </Price>

        <ButtonsContainer>
          <ButtonFavorite onPress={handleToggleeFavorite}>
            {isFavorited
              ? <Icon name="heart-dislike-outline" size={32} color="#fd0101" />
              : <Icon name="heart-outline" size={32} color="#FFF" />
            }
          </ButtonFavorite>

          <ButtonWhatsapp onPress={handleToLinkWhatsapp}>
            <Icon name="logo-whatsapp" size={20} color="#FFF" />
            <ButtonText>Entrar em contato</ButtonText>
          </ButtonWhatsapp>
        </ButtonsContainer>
      </Footer>

    </Container>
  )
}

export default ProviderItem
