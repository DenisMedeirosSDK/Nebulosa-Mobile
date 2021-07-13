import React from 'react';

import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';

const Tab = createBottomTabNavigator();

export function MainRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#DD55DD',
        showLabel: false,
        style: { borderTopWidth: 0 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: () => <Feather name="home" size={24} color="#FFF" />,
        }}
      />
    </Tab.Navigator>
  );
}
