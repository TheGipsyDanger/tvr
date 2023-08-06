import styled from 'styled-components/native';
import {Div, Text} from '~/components/Atomics';

export default {
  Container: styled(Div).attrs({
    px: 4,
  })`
    height: 180px;
    justify-content: center;
  `,
  Label: styled(Text).attrs({
    variant: 'h5:regular',
    color: 'grey:dark',
  })``,
  Name: styled(Text).attrs({
    variant: 'p:paragraph',
    color: 'grey:dark',
  })``,
  CardNumber: styled(Text).attrs({
    variant: 'p:small',
    color: 'grey:dark',
  })``,
  Validate: styled(Text).attrs({
    variant: 'h5:regular',
    color: 'grey:dark',
  })``,
};
