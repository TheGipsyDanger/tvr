import {ReactNode} from 'react';
import {withChildren} from '~/utils';

type IVariant = 'default' | 'clean';

export namespace IHeader {
  export interface IRoot extends withChildren {
    variant: IVariant;
  }
  export interface IAction {
    onPress: () => void;
    icon: ReactNode;
  }
  export interface IContent {
    text: string;
    variant: IVariant;
  }
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    top: number;
  }
}
