import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: #8257E5;
  justify-content: center;
  padding: 40px;
`

export const Title = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #FFF;
  font-size: 20px;
  line-height:30px;
  margin-top:80px;
`
export const TitleBold = styled.Text`
  font-weight: bold;
`

export const ButtonsContainer = styled.View`
  flex-direction: column;
  margin-top: 40px;
  justify-content: space-between;
`
export const ButtonClient = styled(RectButton)`
  height: 80px;
  width: 100%;
  background-color: #9871f5;
  border-radius: 8px;
  padding: 24px;
  justify-content: center;
`
export const ButtonService = styled(RectButton)`
  height: 80px;
  width: 100%;
  background-color: #04d361;
  border-radius: 8px;
  padding: 24px;
  margin-top: 20px;
  justify-content: center;
`
export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #FFF;
  font-size: 18px;
`
