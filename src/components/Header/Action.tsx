import * as React from 'react';
import {IHeader} from '~/components/Header/Header.types';
import {Div} from '~/components/Atomics';

export const Action = ({icon, onPress}: IHeader.IAction) => (
  <Div height={30} onPress={onPress}>
    {icon}
  </Div>
);
