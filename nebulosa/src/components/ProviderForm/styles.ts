import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`
export const SubHeader = styled.View`
  flex-direction: row;
`

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Archivo_700Bold';
  color: #32264D;
  margin-bottom: 18px;
`

export const ButtonAddTime = styled(RectButton)`
  flex-direction:row;
  justify-content: center;
  align-items: center;
  margin-left: 18px;
`
export const ButtonAddTimeText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins_400Regular';
  color: #8257E5;
`

export const ProfileContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
`

export const LabelName = styled.Text`
  font-size: 14px;
  font-family: 'Poppins_400Regular';
  color: #9C98A6;
`

export const TextInput = styled.TextInput`
  height: 54px;
  width: 100%;
  background-color: #FAFAFC;
  border-radius: 8px;
  border-width: 1px;
  border-color: #E6E6F0;
  justify-content: center;
  padding: 0px 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`
export const ServiceContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
`

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const InputBlock = styled.View`
  width: 48%;
`

export const ButtonSubmit = styled(RectButton)`
  background: #04d361;
  height: 56px;
  width: 100%;
  margin-top: 24px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ButtonSubmitText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #FFF;
  font-size: 18px;
`

export const ScheduleItem = styled.View`
  width: 100%;
`
