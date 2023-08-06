import {IBaseResponse, ICard} from '~/utils';

export interface ICreateCardRequest extends IBaseResponse {
  data: ICard;
}
