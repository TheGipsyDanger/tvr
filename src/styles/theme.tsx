import * as React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';

import {RFValue} from 'react-native-responsive-fontsize';
import {withChildren} from '~/utils';

export const theme = {
  space: [],
  fonts: {},
  fontSizes: {},
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
  raddi: {},
  shadows: {},
};

export type IFont = typeof theme.fonts;
export type IFontSizes = typeof theme.fontSizes;
export type IColors = typeof theme.colors;
export type IRadius = typeof theme.raddi;

export const ThemeProvider = ({children}: withChildren) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
