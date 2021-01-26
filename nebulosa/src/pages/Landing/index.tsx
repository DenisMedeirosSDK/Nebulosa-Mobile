import React, { useState, useEffect } from 'react'
import { Image, Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import LandingImg from '../../assets/landing.png'
import api from '../../services/api'
import { Container, Title, TitleBold, ButtonClient, ButtonService, ButtonsContainer, ButtonText } from './styles'

export default function Landing() {
  const { navigate } = useNavigation()

  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data

      setTotalConnections(total)
    })
  }, [setTotalConnections])

  function handleNavigateToRegisterProvider() {
    navigate('ProviderRegister')
  }

  function handleNavigateToListProviders() {
    navigate('ClientTabs')
  }

  return (
    <Container >
      <Image source={LandingImg} style={{ width: '100%', resizeMode: 'contain' }} />
      <Title >Seja bem-vindo, {'\n'} <TitleBold>O que deseja fazer?</TitleBold></Title>

      <ButtonsContainer>
        <ButtonClient onPress={handleNavigateToRegisterProvider}>
          <ButtonText>Seja uma profissional</ButtonText>
        </ButtonClient>
        <ButtonService onPress={handleNavigateToListProviders}>
          <ButtonText>Procure uma profissional</ButtonText>
        </ButtonService>
      </ButtonsContainer>
      <Text style={{ color: '#FFF', marginTop: 20 }}>Total de conexões {totalConnections}</Text>
    </Container>
  )
}
