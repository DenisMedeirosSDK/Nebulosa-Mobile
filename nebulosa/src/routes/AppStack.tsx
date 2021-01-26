import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing'
import ProviderRegister from '../pages/ProviderRegister'
import ClientTabs from './ClientTabs'

const { Navigator, Screen } = createStackNavigator()

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="ProviderRegister" component={ProviderRegister} />
        <Screen name="ClientTabs" component={ClientTabs} />
      </Navigator>
    </NavigationContainer>
  )
}
