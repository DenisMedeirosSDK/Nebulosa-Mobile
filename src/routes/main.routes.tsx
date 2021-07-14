import React from 'react';

import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Search } from '../screens/Search';

const Tab = createBottomTabNavigator();

export function MainRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#ED8E76',
        showLabel: false,
        style: { borderTopWidth: 0, backgroundColor: '#DD55DD' },
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
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
          tabBarIcon: () => <Feather name="search" size={24} color="#FFF" />,
        }}
      />
    </Tab.Navigator>
  );
}
