import styled from 'styled-components/native';
import {variant} from 'styled-system';
import {Div, Text} from '~/components/Atomics';
import {theme} from '~/styles/theme';

export default {
  Container: styled(Div)(
    variant({
      variants: {
        primary: {
          backgroundColor: theme.colors['blue:light'],
        },
        success: {
          backgroundColor: theme.colors['green:light'],
        },
        disable: {
          backgroundColor: theme.colors['grey:light'],
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
          fontSize: theme.fontSizes['h5'],
        },
        success: {
          color: theme.colors['blue:dark'],
          fontFamily: theme.fonts['regular'],
          fontSize: theme.fontSizes['h5'],
        },
        disable: {
          color: theme.colors['grey'],
          fontFamily: theme.fonts['regular'],
          fontSize: theme.fontSizes['h5'],
        },
        link: {
          color: theme.colors['white'],
          fontFamily: theme.fonts['regular'],
          fontSize: theme.fontSizes['h5'],
        },
      },
    })
  ),
};
