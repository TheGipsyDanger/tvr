import styled from 'styled-components/native';
import {Div, Text} from '~/components/Atomics';
import {variant} from 'styled-system';
import {theme} from '~/styles/theme';

const DivDefault = styled(Div).attrs({
  px: 4,
})`
  height: 55px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export default {
  Container: styled(DivDefault)(
    variant({
      variants: {
        default: {
          backgroundColor: 'grey:light',
        },
        clean: {
          backgroundColor: 'transparent',
        },
      },
    })
  ),
  Label: styled(Text)(
    variant({
      variants: {
        default: {
          fontSize: theme.fontSizes.h3,
          fontFamily: theme.fonts.regularCaption,
          color: theme.colors['blue:dark'],
        },
        clean: {
          fontSize: theme.fontSizes.h3,
          fontFamily: theme.fonts.regularCaption,
          color: theme.colors['blue:light'],
        },
      },
    })
  ),
};
