import {
  IControl,
  ITrigger,
  IHandlerSubmit,
  IFormErros,
  IAddForm,
} from '~/utils';
export namespace ICreateCard {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    goBack: () => void;
    control: IControl<IAddForm<string>>;
    trigger: ITrigger<IAddForm<string>>;
    handleSubmit: IHandlerSubmit<IAddForm<string>>;
    errors: IFormErros<IAddForm<string>>;
    onSubmit: (data: any) => void;
    isValid: boolean;
  }
}
