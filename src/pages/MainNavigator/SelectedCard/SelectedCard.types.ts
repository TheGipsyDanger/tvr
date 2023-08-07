import {ICard} from '~/utils';

export namespace ISelectedCard {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    card: ICard;
    goToAddCardForm: () => void;
    goBack: () => void;
  }
}
