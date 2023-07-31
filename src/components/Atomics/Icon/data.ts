import {IColors} from '~/styles';
export interface IIcon {
  data?: any;
  lib?: string;
  size?: number;
  color: IColors;
  name: string;
  onPress?(): void;
}

export interface IIconLayout extends IIcon {}

export interface IIconDefine {}
