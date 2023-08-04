import * as React from 'react';
import * as ICON from '@expo/vector-icons';

import {Wrapped} from '../../Wrapped';

import {theme} from '~/styles';
import {IIconLayout} from '../data';

const Main = ({lib, ...props}: IIconLayout) => {
  // @ts-ignore
  const Icon = ICON[lib];
  return <Icon {...props} />;
};

export const Icon: React.FC<IIconLayout> = ({
  color = 'black',
  lib = 'AntDesign',
  size = 20,
  name = 'stepforward',
  ...props
}) => {
  return (
    <Wrapped {...props} testID={'Icon'}>
      <Main lib={lib} size={size} color={theme.colors[color]} name={name} />
    </Wrapped>
  );
};
