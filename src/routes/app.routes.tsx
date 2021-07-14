import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { ListServices } from '../screens/ListServices';
import { SignIn } from '../screens/SignIn';
import { MainRoutes } from './main.routes';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="MainRoutes" component={MainRoutes} />
      <Stack.Screen name="ListService" component={ListServices} />
    </Stack.Navigator>
  );
}
