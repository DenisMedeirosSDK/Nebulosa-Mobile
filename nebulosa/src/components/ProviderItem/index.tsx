import React from 'react'

import { Ionicons as Icon } from '@expo/vector-icons'

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

export default function ProviderItem() {
  return (
    <Container>
      <ProfileContainer>
        <ProfileAvatar source={{ uri: 'https://avatars.githubusercontent.com/u/48757658?s=60&v=4' }} />

        <ProfileInfo>
          <ProfileName>Denis Medeiros</ProfileName>
          <ProfileSkill>Programador</ProfileSkill>
        </ProfileInfo>
      </ProfileContainer>
      <ProfileBiography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit soluta neque, praesentium reprehenderit ea consectetur porro corporis necessitatibus! Quae fugit illum molestiae sunt quod dolor tempore eius laboriosam ad dolores?
      </ProfileBiography>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>R$ 50,00</PriceValue>
        </Price>

        <ButtonsContainer>
          <ButtonFavorite>
            <Icon name="heart-outline" size={32} color="#FFF" />
            {/* <Icon name="heart-dislike-outline" size={32} color="#FFF" /> */}
          </ButtonFavorite>

          <ButtonWhatsapp>
            <Icon name="logo-whatsapp" size={20} color="#FFF" />
            <ButtonText>Entrar em contato</ButtonText>
          </ButtonWhatsapp>
        </ButtonsContainer>
      </Footer>

    </Container>
  )
}
