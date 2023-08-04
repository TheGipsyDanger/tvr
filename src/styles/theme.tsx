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
    h1: '28px',
    h2: '26px',
    h3: '22px',
    h4: '20px',
    h5: '18px',
    'p:paragraph': '16px',
    'p:small': '14px',
  },
  colors: {
    background: '#FFFFFF',
    transparent: 'transparent',
    icon: '#1e1a1a',
    white: 'white',
    black: 'black',
    orange: 'orange',
    blue: 'blue',
    pink: 'pink',
    purple: 'purple',
    green: '#1E9400',
    yellow: '#FFB800',
    red: '#FF0000',
    'green:light': '#A5FF32',
    'grey:btn:text': '#BBBBBB',
    'blue:light': '#10C2E9',
    'blue:dark': '#142A96',
    grey: '#BBBBBB',
    'grey:light': '#EEEEEE',
    'grey:dark': '#3F3F3F',
    'black:clean': '#111111',
  },
  raddi: {
    light: RFValue(4),
    medium: RFValue(8),
    button: RFValue(12),
    input: RFValue(6),
    bgSquare: RFValue(50),
    circle: 100,
  },
  shadows: {
    input: '0px 0px 8px rgba(0, 0, 0, 0.15)',
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
