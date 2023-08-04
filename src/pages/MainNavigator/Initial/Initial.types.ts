import {IPageWithNavigation} from '~/utils';
export namespace IInitial {
  export interface IView extends IPageWithNavigation {}
  export interface IModelProps extends IView {}
  export interface IModel {
    goToMyCards: () => void;
    goToAddCardForm: () => void;
  }
}
