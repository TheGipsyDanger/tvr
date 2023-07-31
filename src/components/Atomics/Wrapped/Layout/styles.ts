import styled, {css} from 'styled-components/native';
import {IWrappedLayout} from '../data';
import {IRadius, theme} from '~/styles/theme';

import {
  border,
  boxShadow,
  color,
  flexbox,
  space,
  typography,
  backgroundColor,
} from 'styled-system';

export default {
  Wrapped: styled.View<IWrappedLayout>`
    ${space};
    ${color};
    ${typography};
    ${border};
    ${flexbox};
    ${boxShadow};
    ${backgroundColor};

    ${({boxShadow: shadow}) =>
      shadow &&
      css`
        elevation: 5;
      `}

    ${({size}) =>
      size &&
      css`
        height: ${size}px;
        width: ${size}px;
      `}


    ${({radius}) =>
      radius &&
      css`
        border-radius: ${theme.raddi[radius as keyof IRadius]}px;
      `}

    ${({center}) =>
      center &&
      css`
        align-items: center;
        justify-content: center;
      `}
  `,
};
