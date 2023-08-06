import {IWrappedSystem} from '~/utils';
import {buttons} from '~/translate/buttons';

type IButtonVariants = 'primary' | 'success' | 'disable' | 'link';

export namespace IButton {
  export interface IView extends IWrappedSystem {
    isLoading?: boolean;
    variant: IButtonVariants;
    keyLabel: keyof typeof buttons;
  }
  export interface IModelProps {}
  export interface IModel {}
}
