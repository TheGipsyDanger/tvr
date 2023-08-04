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

import {INavigate, IRoute} from '~/routes/routeConfig';

import {IFont, IFontSizes, IColors, IRadius} from '~/styles/theme';

export type withChildren<T = {}> = T & {children?: React.ReactNode};
export type StringToNumberMapcd = {[key: string]: number};
export type IModalType = {[key: string]: JSX.Element};
export type IInsets = {top: number; bottom: number};
export type IStringMap = {[key: string]: string};
export type StringToNumberMap = {[key: string]: number};

export type ITextVariants =
  | 'h1:regular'
  | 'h1:regularCaption'
  | 'h1:bold'
  | 'h1:boldCaption'
  | 'h2:regular'
  | 'h2:regularCaption'
  | 'h2:bold'
  | 'h2:boldCaption'
  | 'h3:regular'
  | 'h3:regularCaption'
  | 'h3:bold'
  | 'h3:boldCaption'
  | 'h4:regular'
  | 'h4:regularCaption'
  | 'h4:bold'
  | 'h4:boldCaption'
  | 'h5:regular'
  | 'h5:regularCaption'
  | 'h5:bold'
  | 'h5:boldCaption'
  | 'p:paragraph:regular'
  | 'p:paragraph:regularCaption'
  | 'p:paragraph:bold'
  | 'p:paragraph:boldCaption'
  | 'p:small:regular'
  | 'p:small:regularCaption'
  | 'p:small:bold'
  | 'p:small:boldCaption';

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
