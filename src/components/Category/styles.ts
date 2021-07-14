import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  flex: 1;
  height: 100px;
  background: #f9f5ff;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #28262c;
`;
