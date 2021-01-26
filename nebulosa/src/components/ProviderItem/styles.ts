import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #FFF;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`
export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`
export const ProfileAvatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`
export const ProfileInfo = styled.View`
  margin-left: 16px;
`
export const ProfileName = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #32264d;
  font-size: 20px;
`
export const ProfileSkill = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  font-size: 12px;
  margin-top: 4px;
`

export const ProfileBiography = styled.Text`
  margin-right: 24px;
  margin-left: 24px;
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
`
export const Footer = styled.View`
  background-color: #fafafc;
  padding: 24px;
  align-items: center;
  margin-top: 24px;
`

export const Price = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  color: #6a6180;
`

export const PriceValue = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 16px;
  color: #8257e5;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`
export const ButtonFavorite = styled(RectButton)`
  background: #8257e5;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`
export const ButtonWhatsapp = styled(RectButton)`
  background: #04d361;
  height: 56px;
  border-radius: 8px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`
export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #FFF;
  font-size: 18px;
  margin-left: 16px;
`
