import {IPageWithNavigation, ICard, ICardListItem} from '~/utils';
export namespace IMain {
  export interface IView extends IPageWithNavigation {}
  export interface IModelProps extends IView {}
  export interface IModel {
    renderItem: ({item}: ICardListItem) => JSX.Element;
    keyExtractor: (item: ICard) => string;
    cards: ICard[];
    goBack: () => void;
    goToAddCardForm: () => void;
  }
}
