import { BorderlessButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

export const Container = styled.View`
padding:40px;
background-color: #8257e5;
`

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const ButtonBack = styled(BorderlessButton)``

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #FFF;
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  margin-top: 40px;
  margin-bottom: 40px;
`

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
