import React from 'react';
import { StatusBar } from 'react-native';

import { Background } from './src/components/Background';
import { SignIn } from './src/screens/SignIn';

export default function App() {
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <SignIn />
    </Background>
  );
}
