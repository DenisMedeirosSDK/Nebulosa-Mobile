import { TextInput } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View``;

export const InputText = styled(TextInput)`
  height: 56px;
  border: 2px solid #f9f5ff;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 10px 10px;
`;

export const Label = styled.Text`
  margin-left: 10px;
  margin-bottom: 5px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
