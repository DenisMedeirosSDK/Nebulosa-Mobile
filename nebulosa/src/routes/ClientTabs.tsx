import React from 'react'

import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Favorites from '../pages/Favorites'
import ProviderList from '../pages/ProviderList'

const { Navigator, Screen } = createBottomTabNavigator()

export default function ClientTabs() {
  return (
    <Navigator tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 64
      },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20
      },
      labelStyle: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 13,
        marginLeft: 16
      },
      inactiveBackgroundColor: '#fafafc',
      activeBackgroundColor: '#ebebf5',
      activeTintColor: '#32264d'
    }}>
      <Screen
        options={{
          tabBarLabel: 'Profissionais',
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <Ionicons name="search-outline" size={size} color={focused ? '#b257e5' : color} />
            )
          }
        }}
        name="ProviderList"
        component={ProviderList}
      />
      <Screen options={{
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({ size, color, focused }) => {
          return (
            <Ionicons name="heart" size={size} color={focused ? '#b257e5' : color} />
          )
        }
      }}
        name="Favorites"
        component={Favorites}
      />
    </Navigator>
  )
}
