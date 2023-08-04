import {IColors} from '~/styles/theme';
export interface IIcon {
  data?: any;
  lib?: string;
  size?: number;
  color: keyof IColors;
  name: string;
  onPress?(): void;
}

export interface IIconLayout extends IIcon {}

export interface IIconDefine {}
