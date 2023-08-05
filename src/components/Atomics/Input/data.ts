import {withChildren} from '~/utils';
import {IFont, IFontSizes} from '~/styles/theme';
import {TextInput} from 'react-native';

import {
  SpaceProps,
  ColorProps,
  BorderProps,
  BoxShadowProps,
  FontSizeProps,
  FontStyleProps,
  TypographyProps,
  FontFamilyProps,
  FontWeightProps,
} from 'styled-system';

export interface IInput
  extends withChildren,
    BorderProps,
    ColorProps,
    FontSizeProps,
    FontFamilyProps,
    FontWeightProps,
    BoxShadowProps,
    FontStyleProps,
    SpaceProps,
    TypographyProps {
  testID?: string;
  font?: IFont;
  size?: IFontSizes;
  forwardRef: React.MutableRefObject<TextInput | undefined>;
  onChange: any;
  handleValue: any;
  handleChange: any;
  disabled: boolean;
  editable: boolean;
  mask: string;
  type: string;
  value: string;
}

export interface IInputLayout extends IInput {
  forwardRef: React.MutableRefObject<TextInput | undefined>;
}
