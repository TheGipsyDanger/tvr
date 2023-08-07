import * as React from 'react';
import {Trans} from 'react-i18next';
import {ISubheader} from '~/components/Subheader/Subheader.types';
import S from '~/components/Subheader/Subheader.styles';

export const Subheader = (props: ISubheader.IView) => (
  <S.Container testID={`Subheader`}>
    <S.Label testID={`Subheader:Label`}>
      <Trans i18nKey={`components.Header.MyCards`} />
    </S.Label>
  </S.Container>
);
