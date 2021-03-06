import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`
export const Content = styled.ScrollView`
  margin-top: -40px;
`

export const SearchForm = styled.View`
  margin-bottom: 24px;
`
export const Label = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins_400Regular';
`
export const TextInput = styled.TextInput`
  height: 54px;
  background-color: #FFF;
  border-radius: 8px;
  justify-content: center;
  padding: 0px 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`
export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const InputBlock = styled.View`
  width: 48%;
`

export const ButtonForm = styled(RectButton)`
  background: #04d361;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ButtonFormText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #FFF;
  font-size: 18px;
`
