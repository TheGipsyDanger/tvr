import * as React from 'react';
import {IHeader} from '~/components/Header/Header.types';
import S from '~/components/Header/Header.styles';

export const Content = ({text, variant}: IHeader.IContent) => (
  <S.Label variant={variant}>{text}</S.Label>
);
