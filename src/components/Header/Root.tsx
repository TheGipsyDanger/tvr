import * as React from 'react';
import {Children} from 'react';
import {Div} from '~/components/Atomics';
import {IHeader} from '~/components/Header/Header.types';
import {useHeader} from '~/components/Header/Header.model';
import S from '~/components/Header/Header.styles';

export const Root = ({children, variant}: IHeader.IRoot) => {
  const {top} = useHeader();
  const [first, second, third] = Children.toArray(children);

  return [
    <Div
      key="compensation"
      height={top}
      bg={variant === 'clean' ? 'transparent' : 'grey:light'}
    />,
    <S.Container testID="Header:Root" variant={variant} key="component">
      <Div flex={1}>{first}</Div>
      <Div flex={1} center>
        {second}
      </Div>
      <Div flex={1} alignItems="flex-end">
        {third}
      </Div>
    </S.Container>,
  ];
};
