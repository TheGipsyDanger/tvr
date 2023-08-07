export namespace IInitial {
  export interface IView {}
  export interface IModelProps extends IView {}
  export interface IModel {
    isLoading: boolean;
    goToMyCards: () => void;
    goToAddCardForm: () => void;
  }
}
