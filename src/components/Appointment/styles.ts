import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  flex: 1;
  margin-top: 30px;
  background: #f9f5ff;
  border-radius: 6px;
  height: 120px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0 10px;
`;

export const AvatarUser = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-right: 10px;
  background: #c4c4c4;
`;

export const InfoAppointment = styled.View`
  flex: 1;
`;

export const NameUser = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  color: #28262c;
`;

export const InfoService = styled.Text`
  margin: 10px 0;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  color: #000000;
`;

export const DateService = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #000000;
`;
