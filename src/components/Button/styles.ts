import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

interface IStyledProps {
  colorButton: string;
}

export const Container = styled(RectButton)<IStyledProps>`
  flex: 1;
  height: 56px;
  border-width: 1px;
  border-radius: 8px;
  background-color: ${(props) => props.colorButton};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #28262c;
`;
