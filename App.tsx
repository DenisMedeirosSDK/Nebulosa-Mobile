import React from 'react';
import { StatusBar } from 'react-native';

import { SignIn } from './src/screens/SignIn';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <SignIn />
    </>
  );
}
