import * as React from 'react';
import {ITextLayout} from '../data';
import C from './styles';

export const Text: React.FC<ITextLayout> = ({
  color = 'primary',
  font = 'regular',
  fontSize = 'small',
  ...props
}) => <C.Text {...props} font={font} color={color} fontSize={fontSize} />;
