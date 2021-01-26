import React, { ReactNode } from 'react'

import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { Container, TopBar, ButtonBack, Title, HeaderContainer } from './styles'

interface HeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, headerRight, children }) => {
  const { navigate } = useNavigation()

  function handleGoBack() {
    navigate('Landing')
  }

  return (
    <Container>
      <TopBar>
        <ButtonBack onPress={handleGoBack}>
          <Icon name="arrow-left" size={28} color="#FFF" />
        </ButtonBack>
      </TopBar>
      <HeaderContainer>
        <Title>{title}</Title>
        {headerRight}

      </HeaderContainer>

      {children}
    </Container>
  )
}

export default Header
