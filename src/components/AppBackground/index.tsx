import * as React from 'react';
import {ImageBackground} from 'react-native';
import {IAppBackground} from '~/components/AppBackground/AppBackground.types';
import splash from '~/../assets/splash.png';

export const AppBackground = ({
  children,
  onLayoutRootView,
}: IAppBackground.IView) => (
  <ImageBackground
    source={splash}
    resizeMode="cover"
    style={{flex: 1}}
    onLayout={onLayoutRootView}
  >
    {children}
  </ImageBackground>
);
