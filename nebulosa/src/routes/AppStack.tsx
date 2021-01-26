import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing'
import ProviderList from '../pages/ProviderList'
import ProviderRegister from '../pages/ProviderRegister'

const { Navigator, Screen } = createStackNavigator()

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="ProviderList" component={ProviderList} />
        <Screen name="ProviderRegister" component={ProviderRegister} />
      </Navigator>
    </NavigationContainer>
  )
}
