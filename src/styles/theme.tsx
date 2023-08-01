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
    regular: 'PTSans_400Regular',
    regularCaption: 'PTSansCaption_400Regular',
    bold: 'PTSans_700Bold',
    boldCaption: 'PTSansCaption_700Bold',
  },
  fontSizes: {
    tiny: '13px',
    xsmall: '14px',
    small: '16px',
    default: '18px',
    big: '20px',
    large: '22px',
    xlarge: '28px',
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
    'gray:btn:text': '#BBBBBB',
    'blue:clean': '#10C2E9',
    'blue:strong': '#142A96',
    'gray:strong': '#010101',
    'gray:clean': '#C7C7C7',
    'black:clean': '#3F3F3F',
  },
  raddi: {
    light: RFValue(4),
    medium: RFValue(8),
    button: RFValue(12),
    circle: 100,
  },
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
