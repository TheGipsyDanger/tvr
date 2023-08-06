import {IPageWithNavigation, ICard} from '~/utils';
export namespace IInitial {
  export interface IView extends IPageWithNavigation {}
  export interface IModelProps extends IView {}
  export interface IModel {
    cards: ICard[];
    isLoading: boolean;
    goToMyCards: () => void;
    goToAddCardForm: () => void;
  }
}
