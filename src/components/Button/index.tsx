import * as React from 'react';
import {Div} from '~/components/Atomics';
import {IButton} from '~/components/Button/Button.types';
import S from '~/components/Button/Button.styles';

export const Button = ({onPress, ...rest}: IButton.IView) => (
  <Div onPress={onPress} testID={`Button`}>
    <S.Container {...rest} center height={55} radius={'button'}>
      <S.Label variant={rest.variant}>{`Button`}</S.Label>
    </S.Container>
  </Div>
);
