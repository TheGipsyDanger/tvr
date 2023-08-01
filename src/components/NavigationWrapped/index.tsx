import * as React from 'react';
import {navigationRef} from '~/utils/navigator';
import {INavigationWrapped} from '~/components/NavigationWrapped/NavigationWrapped.types';
import {
  DefaultTheme,
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

export const NavigationWrapped = ({children}: INavigationWrapped.IView) => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <NavigationContainer
      theme={navTheme}
      ref={navigationRef as React.Ref<NavigationContainerRef>}
    >
      {children}
    </NavigationContainer>
  );
};
