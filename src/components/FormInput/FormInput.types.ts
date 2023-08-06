import {TextInputProps} from 'react-native';
import {
  IAddForm,
  IFormErros,
  IWrappedSystem,
  ITriggerFormInput,
  IFormInputNameAccepeted,
} from '~/utils';

export namespace IFormInput {
  export interface IView
    extends TextInputProps,
      Omit<IWrappedSystem, 'textAlign' | 'children'> {
    errors: IFormErros<IAddForm<string>>;
    name: IFormInputNameAccepeted;
    trigger: ITriggerFormInput;
    onChange: (...event: any[]) => void;
  }
  export interface IModelProps {}
  export interface IModel {}
}
