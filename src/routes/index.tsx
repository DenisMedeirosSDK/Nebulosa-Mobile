import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

// import { AppRoutes } from './app.routes';
import { MainRoutes } from './main.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
}
