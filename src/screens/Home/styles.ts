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

export const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01px;
  margin-top: 25px;

  color: #f9f5ff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Footer = styled.View`
  flex: 1;
  margin-top: 60px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const GoToSignUp = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1px;

  color: #ffffff;
`;

export const ButtonSignUp = styled.TouchableOpacity``;

export const Content = styled.View`
  background: white;
  height: 374px;

  background: #f9f5ff;
  border-radius: 6px;
  margin-top: 30px;
  margin-bottom: 60px;
`;
