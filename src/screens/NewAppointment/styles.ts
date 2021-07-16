import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 0px 20px;
`;

export const ContainerScroll = styled.ScrollView``;

export const Wrapper = styled.View`
  padding-top: 100px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  color: #f9f5ff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.View`
  flex: 1;
  min-height: 374px;
  align-items: center;

  background: #f9f5ff;
  border-radius: 6px;
  margin-bottom: 30px;
  padding: 20px 20px;
`;

export const NameService = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  color: #28262c;
`;

export const Date = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 10px;

  color: #28262c;
`;

export const LabelDate = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;

  color: #000000;
`;

export const InfoService = styled.Text`
  margin: 10px 0;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;

  color: #000000;
`;

export const Description = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: justify;

  color: #000000;
`;

export const Calendar = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const TimeWrapper = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const OpenDatePicker = styled.TouchableOpacity`
  margin-top: 20px;
  align-items: center;
`;
