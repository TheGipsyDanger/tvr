import {IBaseResponse} from '~/utils/interfaces/customTypes';
import {IGetCardsRequest} from '~/data/models';

export interface IGetCards {
  send(params: IGetCards.Params): Promise<IGetCards.Response>;
}

export namespace IGetCards {
  export type Params = {};

  export type Response = IBaseResponse & {
    data: IGetCardsRequest;
  };
}
