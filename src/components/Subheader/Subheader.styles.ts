import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Div, Text} from '~/components/Atomics';

export default {
  Container: styled(Div).attrs({
    bg: 'grey:light',
    center: true,
    height: 60,
    boxShadow: 'card',
  })`
    border-bottom-left-radius: ${RFValue(25)}px;
    border-bottom-right-radius: ${RFValue(25)}px;
  `,
  Label: styled(Text).attrs({
    variant: 'h4:regular',
    color: 'blue:light',
  })``,
};
