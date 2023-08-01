import styled from 'styled-components/native';
import {variant} from 'styled-system';
import {Div, Text} from '~/components/Atomics';
import {theme} from '~/styles/theme';

export default {
  Container: styled(Div)(
    variant({
      variants: {
        primary: {
          backgroundColor: theme.colors['blue:clean'],
        },
        success: {
          backgroundColor: theme.colors['green'],
        },
        disable: {
          backgroundColor: theme.colors['gray:clean'],
        },
        link: {
          backgroundColor: theme.colors['transparent'],
        },
      },
    })
  ),
  Label: styled(Text)(
    variant({
      variants: {
        primary: {
          color: theme.colors['white'],
          fontFamily: theme.fonts['regular'],
          fontSize: theme.fontSizes['default'],
        },
        success: {
          color: theme.colors['blue:strong'],
          fontFamily: theme.fonts['regular'],
          fontSize: theme.fontSizes['default'],
        },
        disable: {
          color: theme.colors['gray'],
          fontFamily: theme.fonts['regular'],
          fontSize: theme.fontSizes['default'],
        },
        link: {
          color: theme.colors['white'],
          fontFamily: theme.fonts['regular'],
          fontSize: theme.fontSizes['default'],
        },
      },
    })
  ),
};
