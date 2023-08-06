import {IBaseResponse, ICard} from '~/utils';

export interface IGetCardsRequest extends IBaseResponse {
  data: ICard[];
}
