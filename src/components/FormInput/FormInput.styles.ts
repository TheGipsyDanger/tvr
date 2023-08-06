import styled from 'styled-components/native';
import {Div, Text} from '~/components/Atomics';

export default {
  Label: styled(Text).attrs({
    variant: 'p:small:regular',
    mb: 2,
  })``,
  Content: styled(Div).attrs({
    height: 55,
    px: 3,
    justifyContent: 'center',
    bg: 'white',
    radius: 'input',
    boxShadow: 'input',
    borderWidth: 1,
  })``,
};
