import {TextInputProps} from 'react-native';
import {ITriggerFormInput, IFormInputNameAccepeted} from '~/utils';

export namespace IFormInput {
  export interface IView extends TextInputProps {
    name: IFormInputNameAccepeted;
    trigger: ITriggerFormInput;
    onChange: (...event: any[]) => void;
    label?: string;
  }
  export interface IModelProps {}
  export interface IModel {}
}
