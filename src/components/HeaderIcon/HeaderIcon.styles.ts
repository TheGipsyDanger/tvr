import styled from 'styled-components/native';
import {IHeaderIcon} from '~/components/HeaderIcon/HeaderIcon.types';
import {Icon} from '~/components/Atomics';

export default {
  Icon: styled(Icon).attrs(({variant}: IHeaderIcon.IView) => ({
    name: variant,
    lib: 'Ionicons',
    size: 30,
    color: 'blue:light',
  }))``,
};
