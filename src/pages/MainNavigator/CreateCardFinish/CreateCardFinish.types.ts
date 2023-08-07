import {ICard} from '~/utils';

export namespace ICreateCardFinish {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    goToMain: () => void;
    goToInitial: () => void;
    card: ICard;
  }
}
