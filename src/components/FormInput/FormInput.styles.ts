import styled from 'styled-components/native';
import {Div, Text} from '~/components/Atomics';
import {theme} from '~/styles/theme';

export default {
  Label: styled(Text).attrs({
    variant: 'p:small:regular',
    mb: 2,
  })``,
  Content: styled(Div).attrs({
    height: 55,
    px: 3,
    justifyContent: 'center',
    borderWidth: 1,
  })`
    box-shadow: ${theme.shadows.input};
    border-radius: ${theme.raddi.input}px;
    background-color: ${theme.colors.white};
  `,
};
