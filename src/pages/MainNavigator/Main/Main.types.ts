import {IPageWithNavigation, ICard} from '~/utils';
export namespace IMain {
  export interface IView extends IPageWithNavigation {}
  export interface IModelProps extends IView {}
  export interface IModel {
    cards: ICard[];
    goBack: () => void;
    goToAddCardForm: () => void;
  }
}
