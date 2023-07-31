import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  SpaceProps,
  TypographyProps,
  BackgroundColorProps,
  LayoutProps,
  BorderColorProps,
  FontSizeProps,
  FontFamilyProps,
  FontWeightProps,
  FontStyleProps,
  ResponsiveValue,
} from 'styled-system';

import {INavigate, IRoute} from '~/types/routes';

import {IFont, IFontSizes, IColors, IRadius} from '~/styles/theme';

export type withChildren<T = {}> = T & {children?: React.ReactNode};
export type StringToNumberMapcd = {[key: string]: number};
export type IModalType = {[key: string]: JSX.Element};
export type IInsets = {top: number; bottom: number};
export type IStringMap = {[key: string]: string};
export type StringToNumberMap = {[key: string]: number};

export type ITextVariants =
  | 'header'
  | 'formError'
  | 'h1:thin'
  | 'h1:extraLight'
  | 'h1:light'
  | 'h1'
  | 'h1:medium'
  | 'h1:semiBold'
  | 'h1:bold'
  | 'h1:extraBold'
  | 'h1:black'
  | 'h2:thin'
  | 'h2:extraLight'
  | 'h2:light'
  | 'h2'
  | 'h2:medium'
  | 'h2:semiBold'
  | 'h2:bold'
  | 'h2:extraBold'
  | 'h2:black'
  | 'h3:thin'
  | 'h3:extraLight'
  | 'h3:light'
  | 'h3'
  | 'h3:medium'
  | 'h3:semiBold'
  | 'h3:bold'
  | 'h3:extraBold'
  | 'h3:black'
  | 'h4:thin'
  | 'h4:extraLight'
  | 'h4:light'
  | 'h4'
  | 'h4:medium'
  | 'h4:semiBold'
  | 'h4:bold'
  | 'h4:extraBold'
  | 'h4:black'
  | 'h5:thin'
  | 'h5:extraLight'
  | 'h5:light'
  | 'h5'
  | 'h5:medium'
  | 'h5:semiBold'
  | 'h5:bold'
  | 'h5:extraBold'
  | 'h6:black'
  | 'h6:thin'
  | 'h6:extraLight'
  | 'h6:light'
  | 'h6'
  | 'h6:medium'
  | 'h6:semiBold'
  | 'h6:bold'
  | 'h6:extraBold'
  | 'h6:black';

export type IEditSettingsTypes = 'theme' | 'language';

export interface IPageWithNavigation {
  navigation: INavigate;
  route: IRoute;
}

export interface IWrappedSystem
  extends BorderProps,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps,
    BackgroundColorProps,
    BorderColorProps,
    LayoutProps,
    withChildren {
  size?: number;
  testID?: string;
  center?: boolean;
  onPress?(): void;
  radius?: keyof IRadius;
  bg?: ResponsiveValue<keyof IColors>;
  activeOpacity?: number;
}
export interface ITextSystem
  extends BorderProps,
    ColorProps,
    FontSizeProps,
    FontFamilyProps,
    FontWeightProps,
    FontStyleProps,
    SpaceProps,
    TypographyProps,
    withChildren {
  variant?: ITextVariants;
  textTransform?: string;
  textDecoration?: string;
  font?: keyof IFont;
  fontSize?: keyof IFontSizes;
  testID?: string;
  numberOfLines?: number;
}

export interface IBaseResponse {
  message?: string;
  status: 'Success' | 'Error';
}

export interface ISvgIconProps {
  color?: string | undefined;
  width?: number;
  height?: number;
  size?: string;
  border?: number;
}
