import * as React from 'react';
import {navigationRef} from '~/utils/navigator';
import {INavigationWrapped} from '~/components/NavigationWrapped/NavigationWrapped.types';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

export const NavigationWrapped = ({children}: INavigationWrapped.IView) => {
  return (
    <NavigationContainer
      ref={navigationRef as React.Ref<NavigationContainerRef>}
    >
      {children}
    </NavigationContainer>
  );
};
