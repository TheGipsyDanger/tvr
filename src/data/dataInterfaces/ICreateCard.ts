import {IBaseResponse} from '~/utils/interfaces/customTypes';
import {ICreateCardRequest} from '~/data/models';

export interface ICreateCard {
  send(params: ICreateCard.Params): Promise<ICreateCard.Response>;
}

export namespace ICreateCard {
  export type Params = {
    cardNumber: string;
    cvv: string;
    validity: string;
    name: string;
  };

  export type Response = IBaseResponse & {
    data: ICreateCardRequest;
  };
}
