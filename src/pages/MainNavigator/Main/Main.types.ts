import {IPageWithNavigation} from '~/utils';
export namespace IMain {
  export interface IView extends IPageWithNavigation {}
  export interface IModelProps extends IView {}
  export interface IModel {
    goBack: () => void;
    goToAddCardForm: () => void;
  }
}
