import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import {Trans} from 'react-i18next';
import {Div} from '~/components/Atomics';
import {IButton} from '~/components/Button/Button.types';
import S from '~/components/Button/Button.styles';

export const Button = ({
  onPress,
  isLoading = false,
  ...rest
}: IButton.IView) => (
  <Div onPress={onPress} testID={`Button`}>
    <S.Container {...rest} center height={55} radius={'button'}>
      <S.Label variant={rest.variant}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Trans i18nKey={`components.Button.${rest.keyLabel}`} />
        )}
      </S.Label>
    </S.Container>
  </Div>
);
