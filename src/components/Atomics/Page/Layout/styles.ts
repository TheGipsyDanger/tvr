import styled from 'styled-components/native';
import {KeyboardAvoidingView} from 'react-native';
import {Wrapped} from '~/components/Atomics/Wrapped';
import {color, BackgroundColorProps, backgroundColor} from 'styled-system';

export const SafeAreaStyled = styled(Wrapped)<BackgroundColorProps>`
  ${color};
  ${backgroundColor};
  flex: 1;
`;

export const KeyboardAvoidStyled = styled(KeyboardAvoidingView)`
  flex: 1;
`;
