import * as React from 'react';
import {IHeaderIcon} from '~/components/HeaderIcon/HeaderIcon.types';
import S from '~/components/HeaderIcon/HeaderIcon.styles';

export const HeaderIcon = (props: IHeaderIcon.IView) => <S.Icon {...props} />;
