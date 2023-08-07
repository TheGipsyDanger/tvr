import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Div, Text} from '~/components/Atomics';
import {theme} from '~/styles/theme';

export default {
  Container: styled(Div).attrs({
    center: true,
    height: 60,
  })`
    background-color: ${theme.colors['green:light']};
    border-bottom-left-radius: ${RFValue(25)}px;
    border-bottom-right-radius: ${RFValue(25)}px;
    box-shadow: ${theme.shadows.card};
  `,
  Label: styled(Text).attrs({
    variant: 'h4:regular',
  })`
    color: ${theme.colors['blue:light']};
  `,
};
