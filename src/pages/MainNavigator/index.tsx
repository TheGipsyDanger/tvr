import * as React from 'react';
import {inTest} from '~/../app.json';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from '~/pages/MainNavigator/navigator';

const MainStack = createStackNavigator();

export default function MainRoutes() {
  return (
    <MainStack.Navigator initialRouteName={inTest ? 'Test' : 'Initial'}>
      {routes.map(view => (
        <MainStack.Screen {...view} />
      ))}
    </MainStack.Navigator>
  );
}
