import * as React from 'react';
import {ImageBackground} from 'react-native';
import {IAppBackground} from '~/components/AppBackground/AppBackground.types';
import bg from '~/../assets/bg.png';
import splash from '~/../assets/splash.png';

export const AppBackground = ({
  children,
  hasBg = true,
}: IAppBackground.IView) => (
  <ImageBackground
    resizeMode="cover"
    source={hasBg ? bg : splash}
    style={{flex: 1}}
  >
    {children}
  </ImageBackground>
);
