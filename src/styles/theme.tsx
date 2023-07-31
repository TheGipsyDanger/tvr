import * as React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';

import {RFValue} from 'react-native-responsive-fontsize';
import {withChildren} from '~/utils';

export const theme = {
  space: [
    ...[
      0,
      RFValue(4),
      ...Array.from({length: 8}, (_, index) => RFValue((index + 1) * 8)),
    ],
  ],
  fonts: {
    thin: 'Poppins_100Thin',
    extraLight: 'Poppins_200ExtraLight',
    light: 'Poppins_300Light',
    regular: 'Poppins_400Regular',
    medium: 'Poppins_500Medium',
    semiBold: 'Poppins_600SemiBold',
    bold: 'Poppins_700Bold',
    extraBold: 'Poppins_800ExtraBold',
    black: 'Poppins_900Black',
  },
  fontSizes: {
    tiny: '9px',
    xsmall: '11px',
    small: '13px',
    default: '16px',
    big: '20px',
    large: '24px',
    xlarge: '34px',
  },
  colors: {
    transparent: 'transparent',
    background: '#FFFFFF',
    icon: '#1e1a1a',
    white: 'white',
    black: 'black',
    red: 'red',
    orange: 'orange',
    blue: 'blue',
    pink: 'pink',
    purple: 'purple',
    gray: 'gray',
    green: '#A5FF32',
    'blue:clean': '#10C2E9',
    'blue:strong': '#142A96',
    'gray:clean': '#EEEEEE',
    'gray:strong': '#C7C7C7',
    'black:clean': '#3F3F3F',
  },
  raddi: {light: RFValue(4), medium: RFValue(8), circle: 100},
  shadows: {
    cell: '0px 0px 8px rgba(0,0,0,0.05)',
    card: '0px 0px 8px rgba(0,0,0,0.1)',
  },
};

export type IFont = typeof theme.fonts;
export type IFontSizes = typeof theme.fontSizes;
export type IColors = typeof theme.colors;
export type IRadius = typeof theme.raddi;

export const ThemeProvider = ({children}: withChildren) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
