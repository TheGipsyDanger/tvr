import styled from 'styled-components/native';
import {Div, Text} from '~/components/Atomics';
import {theme} from '~/styles/theme';

const defaultText = styled(Text)`
  color: ${theme.colors['grey:dark']};
`;

export default {
  Container: styled(Div).attrs({
    px: 4,
  })`
    height: 180px;
    justify-content: center;
    border-radius: ${theme.raddi.card}px;
    background-color: ${theme.colors['green:light']};
  `,
  Label: styled(defaultText).attrs({
    variant: 'h5:regular',
  })``,
  Name: styled(defaultText).attrs({
    variant: 'p:paragraph',
  })``,
  CardNumber: styled(defaultText).attrs({
    variant: 'p:small',
  })``,
  Validate: styled(defaultText).attrs({
    variant: 'h5:regular',
  })``,
};
