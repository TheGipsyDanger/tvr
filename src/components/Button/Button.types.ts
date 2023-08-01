import {IWrappedSystem} from '~/utils';
type IButtonVariants = 'primary' | 'success' | 'disable' | 'link';

export namespace IButton {
  export interface IView extends IWrappedSystem {
    variant: IButtonVariants;
  }
  export interface IModelProps {}
  export interface IModel {}
}
